import React, { useState, useCallback, useRef } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useRequest } from 'ahooks';

import { getAlbumDetailService } from 'services';

import ThemeContainer from 'containers/ThemeContainer';
import Header from 'components/Header';
import { Loading } from 'components/Loading';
import AlbumDetail from 'components/AlbumDetail';
import Scroll from 'components/Scroll';
import AnimatePage from 'components/AnimatePage';

import StyledAlbum from './style';

interface AlbumRouteParams {
  id: string;
}

function Album() {
  const history = useHistory();
  const { id } = useParams<AlbumRouteParams>();
  const { navBarHeight, themeColor } = ThemeContainer.useContainer();

  const { loading, data: albumData } = useRequest(() => getAlbumDetailService(Number(id)), {
    loadingDelay: 300,
    refreshDeps: [id],
  });

  const headerRef = useRef<HTMLDivElement>(null);

  const [showPage, setShowPage] = useState(true);
  const [title, setTitle] = useState('歌单');
  const [isMarquee, setIsMarquee] = useState(false); // title 是否为跑马灯

  const handleBackButtonClick = useCallback(() => {
    setShowPage(false);
  }, []);

  const goBack = useCallback(() => {
    history.goBack();
  }, [history]);

  const handleScroll = useCallback(
    (pos: any) => {
      const minScrollY = -navBarHeight;
      const percent = Math.abs(pos.y / minScrollY);
      const headerDom = headerRef.current;

      if (!albumData) return;
      if (!headerDom) return;

      // 滑过顶部的高度开始变化
      if (pos.y < minScrollY) {
        headerDom.style.backgroundColor = themeColor;
        headerDom.style.opacity = `${Math.min(1, (percent - 1) / 2)}`;
        setTitle(albumData.name);
        setIsMarquee(true);
      } else {
        headerDom.style.backgroundColor = '';
        headerDom.style.opacity = String(1);
        setTitle('歌单');
        setIsMarquee(false);
      }
    },
    [albumData, navBarHeight, themeColor],
  );

  return (
    <AnimatePage showPage={showPage} onExited={goBack}>
      <StyledAlbum>
        <Header ref={headerRef} isMarquee={isMarquee} onBackButtonClick={handleBackButtonClick}>
          {title}
        </Header>
        {albumData && (
          <Scroll bounceTop={false} onScroll={handleScroll}>
            <AlbumDetail data={albumData} />
          </Scroll>
        )}
        {loading && <Loading full />}
      </StyledAlbum>
    </AnimatePage>
  );
}

export default React.memo(Album);

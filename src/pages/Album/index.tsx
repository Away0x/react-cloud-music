import React, { useState, useCallback, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useRequest } from 'ahooks';

import { getAlbumDetailService } from 'services';

import ThemeContainer from 'containers/ThemeContainer';
import AlbumDetail from 'components/AlbumDetail';
import Scroll from 'components/Scroll';
import SubPage, { SubPageHandlers } from 'components/SubPage';

import StyledAlbum from './style';

interface AlbumRouteParams {
  id: string;
}

function Album() {
  const { id } = useParams<AlbumRouteParams>();
  const { navBarHeight, themeColor } = ThemeContainer.useContainer();

  const subPageRef = useRef<SubPageHandlers>(null);
  const [title, setTitle] = useState('歌单');
  const [isMarquee, setIsMarquee] = useState(false); // title 是否为跑马灯

  const { loading, data: albumData } = useRequest(() => getAlbumDetailService(Number(id)), {
    loadingDelay: 300,
    refreshDeps: [id],
  });

  const handleScroll = useCallback(
    (pos: any) => {
      if (!subPageRef.current) return;
      const minScrollY = -navBarHeight;
      const percent = Math.abs(pos.y / minScrollY);
      const headerDom = subPageRef.current.headerDom;

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
    <SubPage ref={subPageRef} isMarquee={isMarquee} title={title} loading={loading}>
      <StyledAlbum>
        {albumData && (
          <Scroll bounceTop={false} onScroll={handleScroll}>
            <AlbumDetail data={albumData} />
          </Scroll>
        )}
      </StyledAlbum>
    </SubPage>
  );
}

export default React.memo(Album);

import React, { useRef, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useRequest, useMount } from 'ahooks';

import { getSingerInfoService } from 'services';
import { prefixStyle } from 'tools/utils';
import ThemeContainer from 'containers/ThemeContainer';
import PlayerContainer from 'containers/PlayerContainer';
import SubPage, { SubPageHandlers } from 'components/SubPage';
import Scroll, { ScrollerHandlers } from 'components/Scroll';
import Songlist from 'components/Songlist';

import StyledSinger, {
  ImgWrapper,
  ImgWrapperFilter,
  CollectButton,
  CollectButtonText,
  SongListWrapper,
  BgLayer,
} from './style';

interface SingerRouteParams {
  id: string;
}

const OFFSET = 5;
const transform = prefixStyle('transform');

function Singer() {
  const { id } = useParams<SingerRouteParams>();
  const { navBarHeight } = ThemeContainer.useContainer();
  const { changePlayList } = PlayerContainer.useContainer();

  const initialHeightRef = useRef(0);
  const subPageRef = useRef<SubPageHandlers | null>(null);
  const collectBtnRef = useRef<HTMLDivElement>(null);
  const imgWrapperRef = useRef<HTMLDivElement>(null);
  const songListRef = useRef<HTMLDivElement>(null);
  const songScrollRef = useRef<ScrollerHandlers>(null);
  const bgLayerRef = useRef<HTMLDivElement>(null);

  const { loading, data } = useRequest(() => getSingerInfoService(Number(id)), {
    loadingDelay: 300,
    refreshDeps: [id],
  });

  const handleScroll = useCallback(
    (pos: any) => {
      const height = initialHeightRef.current;
      const newY = pos.y;
      const imageDOM = imgWrapperRef.current;
      const buttonDOM = collectBtnRef.current;
      const headerDOM = subPageRef.current?.headerDom;
      const layerDOM = bgLayerRef.current;

      if (!imageDOM || !buttonDOM || !headerDOM || !layerDOM) return;

      const minScrollY = -(height - OFFSET) + navBarHeight;
      // 指的是滑动距离占图片高度的百分比
      const percent = Math.abs(newY / height);
      // 说明: 在歌手页的布局中，歌单列表其实是没有自己的背景的，layerDOM 其实是起一个遮罩的作用，给歌单内容提供白色背景
      // 因此在处理的过程中，随着内容的滚动，遮罩也跟着移动
      if (newY > 0) {
        // 处理往下拉的情况,效果：图片放大，按钮跟着偏移
        imageDOM.style[transform] = `scale(${1 + percent})`;
        buttonDOM.style[transform] = `translate3d(0, ${newY}px, 0)`;
        layerDOM.style.top = `${height - OFFSET + newY}px`;
      } else if (newY >= minScrollY) {
        // 往上滑动，但是还没超过 Header 部分
        layerDOM.style.top = `${height - OFFSET - Math.abs(newY)}px`;
        layerDOM.style.zIndex = '2';
        imageDOM.style.paddingTop = '75%';
        imageDOM.style.height = '0';
        imageDOM.style.zIndex = '1';
        buttonDOM.style[transform] = `translate3d(0, ${newY}px, 0)`;
        buttonDOM.style.opacity = `${1 - percent * 2}`;
      } else if (newY < minScrollY) {
        // 往上滑动，但是超过 Header 部分
        layerDOM.style.top = `${navBarHeight - OFFSET}px`;
        layerDOM.style.zIndex = '2';
        // 防止溢出的歌单内容遮住 Header
        headerDOM.style.zIndex = '100';
        // 此时图片高度与 Header 一致
        imageDOM.style.height = `${navBarHeight}px`;
        imageDOM.style.paddingTop = '0';
        imageDOM.style.zIndex = '99';
      }
    },
    [navBarHeight],
  );

  const handleSelectSong = useCallback(
    (_: Data.SongListItem, index: number) => {
      changePlayList(data?.hotSongs || [], index);
    },
    [data, changePlayList],
  );

  useMount(() => {
    if (!imgWrapperRef.current || !songListRef.current || !bgLayerRef.current || !songScrollRef.current) return;

    const h = imgWrapperRef.current.offsetHeight;
    initialHeightRef.current = h;
    songListRef.current.style.top = `${h - OFFSET}px`;
    bgLayerRef.current.style.top = `${h - OFFSET}px`; //把遮罩先放在下面，以裹住歌曲列表
    songScrollRef.current.refresh();
  });

  return (
    <SubPage ref={subPageRef} title={data?.artist.name} loading={loading}>
      <StyledSinger>
        <ImgWrapper ref={imgWrapperRef} bgUrl={data?.artist.picUrl}>
          <ImgWrapperFilter></ImgWrapperFilter>
        </ImgWrapper>
        <CollectButton ref={collectBtnRef}>
          <i className="iconfont">&#xe62d;</i>
          <CollectButtonText>收藏</CollectButtonText>
        </CollectButton>
        <BgLayer ref={bgLayerRef} />
        <SongListWrapper ref={songListRef}>
          <Scroll ref={songScrollRef} onScroll={handleScroll}>
            <Songlist songs={data?.hotSongs || []} showCollect={false} onItemClick={handleSelectSong} />
          </Scroll>
        </SongListWrapper>
      </StyledSinger>
    </SubPage>
  );
}

export default React.memo(Singer);

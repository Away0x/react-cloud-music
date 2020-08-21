import React, { useRef, useCallback } from 'react';
import { CSSTransition } from 'react-transition-group';

import { PlayMode, getPlayModeIcon, getPlayModeText } from 'constants/player';
import { getSingerName } from 'tools/song';
import { prefixStyle } from 'tools/utils';
import Scroll, { ScrollerHandlers } from 'components/Scroll';
import Confirm, { ConfirmHandlers } from 'components/Confirm';

import StyledPlayList, {
  ListWrapper,
  ListHeader,
  Title,
  TitleText,
  TitleClear,
  ScrollWrapper,
  ListContent,
  ListItem,
  ItemText,
  ItemCurrent,
  ItemLike,
  ItemDelete,
} from './PlayList-style';

const transform = prefixStyle('transform');
const transition = prefixStyle('transition');

function useListWrapperTouch({
  listWrapperRef,
  canTouchRef,
  onHideList,
}: {
  listWrapperRef: React.RefObject<HTMLDivElement | null>;
  canTouchRef: React.RefObject<boolean>;
  onHideList: () => void;
}) {
  const inTouchRef = useRef(false);
  const startYRef = useRef(0);
  const distanceRef = useRef(0);

  const handleListWrapperTouchStart = useCallback(
    (ev: React.TouchEvent<HTMLDivElement>) => {
      if (!canTouchRef.current || inTouchRef.current || !listWrapperRef.current) return;
      listWrapperRef.current.style[transition] = '';
      distanceRef.current = 0;
      startYRef.current = ev.nativeEvent.touches[0].pageY;
      inTouchRef.current = true;
    },
    [canTouchRef, listWrapperRef],
  );

  const handleListWrapperTouchMove = useCallback(
    (ev: React.TouchEvent<HTMLDivElement>) => {
      if (!canTouchRef.current || !inTouchRef.current || !listWrapperRef.current) return;
      const dis = ev.nativeEvent.touches[0].pageY - startYRef.current;
      if (dis < 0) return;

      distanceRef.current = dis;
      listWrapperRef.current.style[transform] = `translate3d(0, ${dis}px, 0)`;
    },
    [listWrapperRef, canTouchRef],
  );

  const handleListWrapperTouchEnd = useCallback(() => {
    inTouchRef.current = false;

    if (distanceRef.current >= 150) {
      onHideList();
    } else {
      if (!listWrapperRef.current) return;
      listWrapperRef.current.style[transition] = 'all 0.3s';
      listWrapperRef.current.style[transform] = `translate3d(0px, 0px, 0px)`;
    }
  }, [listWrapperRef, onHideList]);

  return {
    distance: distanceRef.current,
    handleListWrapperTouchStart,
    handleListWrapperTouchMove,
    handleListWrapperTouchEnd,
  };
}

interface PlayListProps {
  show?: boolean;
  mode: PlayMode;
  song?: Data.SongListItem | null;
  list: Data.SongListItem[];
  onHideList?: () => void;
  onDeleteItemSong?: (item: Data.SongListItem, index: number) => void;
  onSelectItemSong?: (item: Data.SongListItem, index: number) => void;
  onCleanList?: () => void;
  onChangePlayMode?: () => void;
}

function PlayList({
  show = false,
  mode,
  song,
  list,
  onHideList,
  onDeleteItemSong,
  onSelectItemSong,
  onCleanList,
  onChangePlayMode,
}: PlayListProps) {
  const confirmRef = useRef<ConfirmHandlers | null>(null);
  const scrollRef = useRef<ScrollerHandlers | null>(null);
  const listWrapperRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const canTouchRef = useRef(true);

  const handleHideList = useCallback(() => {
    onHideList && onHideList();
  }, [onHideList]);

  const {
    distance,
    handleListWrapperTouchStart,
    handleListWrapperTouchMove,
    handleListWrapperTouchEnd,
  } = useListWrapperTouch({
    listWrapperRef,
    canTouchRef,
    onHideList: handleHideList,
  });

  const handleScroll = useCallback((pos: any) => {
    canTouchRef.current = pos.y === 0;
  }, []);

  const handleShowConfirm = useCallback(() => {
    confirmRef.current?.show();
  }, []);

  const handleCleanConfirm = useCallback(() => {
    onCleanList && onCleanList();
  }, [onCleanList]);

  return (
    <CSSTransition
      in={show}
      timeout={300}
      classNames="list-fade"
      mountOnEnter
      onEnter={() => {
        if (!containerRef.current || !listWrapperRef.current) return;
        containerRef.current.style.display = 'block';
        listWrapperRef.current.style[transform] = 'translate3d(0, 100%, 0)';
      }}
      onEntering={() => {
        if (!listWrapperRef.current) return;
        listWrapperRef.current.style[transition] = 'all 0.3s';
        listWrapperRef.current.style[transform] = 'translate3d(0, 0, 0)';
      }}
      onExit={() => {
        if (!listWrapperRef.current) return;
        listWrapperRef.current.style[transform] = `translate3d(0, ${distance}px, 0)`;
      }}
      onExiting={() => {
        if (!listWrapperRef.current) return;
        listWrapperRef.current.style[transition] = 'all 0.3s';
        listWrapperRef.current.style[transform] = `translate3d(0, 100%, 0)`;
      }}
      onExited={() => {
        if (!containerRef.current || !listWrapperRef.current) return;
        containerRef.current.style.display = 'none';
        listWrapperRef.current.style[transform] = 'translate3d(0, 100%, 0)';
      }}>
      <StyledPlayList
        ref={containerRef}
        onClick={(ev) => {
          ev.stopPropagation();
          onHideList && onHideList();
        }}>
        <ListWrapper
          ref={listWrapperRef}
          onClick={(ev) => ev.stopPropagation()}
          onTouchStart={handleListWrapperTouchStart}
          onTouchMove={handleListWrapperTouchMove}
          onTouchEnd={handleListWrapperTouchEnd}>
          <ListHeader>
            <Title>
              <div
                onClick={(ev) => {
                  ev.stopPropagation();
                  onChangePlayMode && onChangePlayMode();
                }}>
                <i className="iconfont" dangerouslySetInnerHTML={{ __html: getPlayModeIcon(mode) }}></i>
                <TitleText>{getPlayModeText(mode)}</TitleText>
              </div>
              <TitleClear className="iconfont" onClick={handleShowConfirm}>
                &#xe63d;
              </TitleClear>
            </Title>
          </ListHeader>

          <ScrollWrapper>
            <Scroll ref={scrollRef} bounceTop={false} onScroll={handleScroll}>
              <ListContent>
                {list.map((item, index) => {
                  return (
                    <ListItem
                      key={item.id}
                      onClick={(ev) => {
                        ev.stopPropagation();
                        onSelectItemSong && onSelectItemSong(item, index);
                      }}>
                      <ItemCurrent
                        className="iconfont"
                        dangerouslySetInnerHTML={{ __html: song?.id === item.id ? '&#xe6e3;' : '' }}
                      />
                      <ItemText>
                        {item.name} - {getSingerName(item.ar)}
                      </ItemText>
                      <ItemLike>
                        <i className="iconfont">&#xe601;</i>
                      </ItemLike>
                      <ItemDelete
                        onClick={(ev) => {
                          ev.stopPropagation();
                          onDeleteItemSong && onDeleteItemSong(item, index);
                        }}>
                        <i className="iconfont">&#xe63d;</i>
                      </ItemDelete>
                    </ListItem>
                  );
                })}
              </ListContent>
            </Scroll>
          </ScrollWrapper>
        </ListWrapper>

        <Confirm ref={confirmRef} onConfirm={handleCleanConfirm}>
          是否删除全部?
        </Confirm>
      </StyledPlayList>
    </CSSTransition>
  );
}

export default React.memo(PlayList);

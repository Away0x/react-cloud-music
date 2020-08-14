import React, { forwardRef, useState, useRef, useEffect, useImperativeHandle } from 'react';
import { useDebounceFn } from 'ahooks';
import BScroll from '@better-scroll/core';
import PullUp from '@better-scroll/pull-up';
import PullDown from '@better-scroll/pull-down';

import { Loading, LoadingV2 } from 'components/Loading';

import StyledScroll, { PullUploading, PullDownLoading } from './style';

BScroll.use(PullUp);
BScroll.use(PullDown);

interface ScrollProps {
  direction?: 'vertical' | 'horizontal'; // 滚动的方向
  click?: boolean; // 是否支持点击
  refresh?: boolean; // 是否刷新
  pullUpLoading?: boolean; // 是否显示上拉 loading 动画
  pullDownLoading?: boolean; // 是否显示下拉 loading 动画
  bounceTop?: boolean; // 是否支持向上吸顶
  bounceBottom?: boolean; // 是否支持向下吸底
  onScroll?: Function; // 滑动触发的回调函数
  pullUp?: Function; // 上拉加载逻辑
  pullDown?: Function; // 下拉加载逻辑
  children: React.ReactNode;
}

export interface ScrollerHandlers {
  refresh(): void;
  getBScroll(): BScroll | null;
}

const Scroll = forwardRef<ScrollerHandlers, ScrollProps>(
  (
    {
      children,
      direction = 'vertical',
      click = true,
      refresh = true,
      bounceTop = true,
      bounceBottom = true,
      pullUpLoading = false,
      pullDownLoading = false,
      onScroll,
      pullUp,
      pullDown,
    },
    ref,
  ) => {
    const scrollContaninerRef = useRef<HTMLDivElement>(null);
    const [bScroll, setBScroll] = useState<BScroll | null>(null);

    const { run: pullUpDebounce } = useDebounceFn(
      () => {
        pullUp && pullUp();
      },
      {
        wait: 500,
      },
    );

    const { run: pullDownDebounce } = useDebounceFn(
      () => {
        pullDown && pullDown();
      },
      {
        wait: 500,
      },
    );

    // 暴露给外部的方法
    useImperativeHandle(ref, () => {
      return {
        refresh() {
          if (bScroll) {
            bScroll.refresh();
            bScroll.scrollTo(0, 0);
          }
        },
        getBScroll() {
          return bScroll || null;
        },
      };
    });

    useEffect(() => {
      setBScroll(
        new BScroll(scrollContaninerRef.current!, {
          scrollX: direction === 'horizontal',
          scrollY: direction === 'vertical',
          probeType: 3,
          click: click,
          bounce: { top: bounceTop, bottom: bounceBottom },
        }),
      );

      return () => {
        setBScroll(null);
      };
      // eslint-disable-next-line
    }, []);

    // 绑定 scroll 事件
    useEffect(() => {
      if (!bScroll || !onScroll) return;

      bScroll.on('scroll', onScroll);
      return () => {
        bScroll.off('scroll', onScroll);
      };
    }, [onScroll, bScroll]);

    // 绑定 scrollEnd 事件 (上拉)
    useEffect(() => {
      if (!bScroll || !pullUp) return;

      const pullUpHandler = () => {
        // 判断是否滑动到了底部
        if (bScroll.y <= bScroll.maxScrollY + 100) {
          pullUpDebounce && pullUpDebounce();
        }
      };

      bScroll.on('scrollEnd', pullUpHandler);
      return () => {
        bScroll.off('scrollEnd', pullUpHandler);
      };
    }, [pullUpDebounce, pullUp, bScroll]);

    // 绑定 touchEnd 事件 (下拉)
    useEffect(() => {
      if (!bScroll || !pullDown) return;

      const pullDownHandler = (pos: any) => {
        //判断用户的下拉动作
        if (pos.y > 50) {
          pullDownDebounce && pullDownDebounce();
        }
      };

      bScroll.on('touchEnd', pullDownHandler);
      return () => {
        bScroll.off('touchEnd', pullDownHandler);
      };
    }, [pullDownDebounce, pullDown, bScroll]);

    // 每次重新渲染都要刷新实例，防止无法滑动
    useEffect(() => {
      if (refresh && bScroll) bScroll.refresh();
    });

    return (
      <StyledScroll ref={scrollContaninerRef}>
        {children}
        {/* 滑到底部加载动画 */}
        <PullUploading show={pullUpLoading}>
          <Loading />
        </PullUploading>
        {/* 顶部下拉刷新动画 */}
        <PullDownLoading show={pullDownLoading}>
          <LoadingV2 />
        </PullDownLoading>
      </StyledScroll>
    );
  },
);

export default React.memo(Scroll);

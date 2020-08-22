import React, { useEffect, useImperativeHandle, useRef, forwardRef } from 'react';

import { prefixStyle } from 'tools/utils';

import StyledMusicNote from './style';

// 容器中有 3 个音符，也就是同时只能有 3 个音符下落
const ICON_NUMBER = 3;
const transform = prefixStyle('transform');

function createNode(content: string) {
  const node = document.createElement('div');
  node.innerHTML = `<div class="icon_wrapper">${content}</div>`;
  return node.firstChild!;
}

export interface MusicNoteHandlers {
  startAnimation(pos: { x: number; y: number }): void;
}

const MusicNote = forwardRef<MusicNoteHandlers>((_, ref) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => {
    return {
      startAnimation({ x, y }) {
        if (!containerRef.current) return;

        for (let i = 0; i < ICON_NUMBER; i++) {
          const domArray: HTMLDivElement[] = [].slice.call(containerRef.current.children);
          const item = domArray[i];

          // 选择一个空闲的元素来开始动画
          const isRunning = item.getAttribute('running') === '1';
          if (!isRunning) {
            item.style.left = x + 'px';
            item.style.top = y + 'px';
            item.style.display = 'inline-block';
            setTimeout(() => {
              item.setAttribute('running', '1');
              item.style[transform] = 'translate3d(0, 750px, 0)';

              const icon = item.querySelector('div');
              if (!icon) return;
              icon.style[transform] = 'translate3d(-40px, 0, 0)';
            }, 20);
          }
        }
      },
    };
  });

  useEffect(() => {
    if (!containerRef.current) return;

    for (let i = 0; i < ICON_NUMBER; i++) {
      const node = createNode(`<div class="iconfont">&#xe642;</div>`);
      containerRef.current.appendChild(node);
    }

    const domArray: HTMLDivElement[] = [].slice.call(containerRef.current.children);
    domArray.forEach((item) => {
      item.setAttribute('running', '0');
      item.addEventListener('transitionend', function () {
        this.style.display = 'none';
        this.style[transform] = 'translate3d(0, 0, 0)';
        this.setAttribute('running', '0');

        const icon = this.querySelector('div');
        if (!icon) return;
        icon.style[transform] = 'translate3d(0, 0, 0)';
      });
    });
  }, []);

  return <StyledMusicNote ref={containerRef}></StyledMusicNote>;
});

export default React.memo(MusicNote);

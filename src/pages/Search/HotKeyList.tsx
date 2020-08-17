import React from 'react';

import Scroll from 'components/Scroll';

import { ShortcutWrapper, HotKey } from './style';

interface HotKeyListProps {
  show?: boolean;
  list?: Data.HotKeyWordItem[];
  onItemClick?: (q: string) => void;
}

function HotKeyList({ show = true, list, onItemClick }: HotKeyListProps) {
  if (!list) return null;

  return (
    <ShortcutWrapper show={show}>
      <Scroll>
        <HotKey>
          <h1>热门搜索</h1>
          <ul>
            {list.map((item) => {
              return (
                <li key={item.first} onClick={() => onItemClick && onItemClick(item.first)}>
                  <span>{item.first}</span>
                </li>
              );
            })}
          </ul>
        </HotKey>
      </Scroll>
    </ShortcutWrapper>
  );
}

export default React.memo(HotKeyList);

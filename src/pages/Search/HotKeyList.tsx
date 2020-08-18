import React, { useCallback } from 'react';

import Scroll from 'components/Scroll';

import {
  ShortcutWrapper,
  HotKey,
  HistoryWrapper,
  HistoryText,
  HistoryClear,
  HistoryItem,
  HistoryItemText,
  HistoryItemIcon,
} from './style';

interface HotKeyListProps {
  show?: boolean;
  list?: Data.HotKeyWordItem[];
  historyList?: string[];
  onDeleteHistory?: (q: string) => void;
  onCleanHistory?: () => void;
  onItemClick?: (q: string) => void;
}

function HotKeyList({ historyList, show = true, list, onItemClick, onDeleteHistory, onCleanHistory }: HotKeyListProps) {
  const SearchHistoryList = useCallback(() => {
    if (!historyList || !historyList.length) return null;

    return (
      <HistoryWrapper>
        <h1>
          <HistoryText>搜索历史</HistoryText>
          <HistoryClear onClick={() => onCleanHistory && onCleanHistory()}>
            <i className="iconfont">&#xe63d;</i>
          </HistoryClear>
        </h1>
        {historyList.map((item) => {
          return (
            <HistoryItem key={item} onClick={() => onItemClick && onItemClick(item)}>
              <HistoryItemText>{item}</HistoryItemText>
              <HistoryItemIcon
                onClick={(ev) => {
                  ev.stopPropagation();
                  onDeleteHistory && onDeleteHistory(item);
                }}>
                <i className="iconfont">&#xe600;</i>
              </HistoryItemIcon>
            </HistoryItem>
          );
        })}
      </HistoryWrapper>
    );
  }, [historyList, onCleanHistory, onDeleteHistory, onItemClick]);

  if (!list) return null;

  return (
    <ShortcutWrapper show={show}>
      <Scroll>
        <div>
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
          <SearchHistoryList />
        </div>
      </Scroll>
    </ShortcutWrapper>
  );
}

export default React.memo(HotKeyList);

import styled from 'styled-components';

import { extendClick } from 'styles/mixins';

const StyledSearch = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.backgroundColor};
`;

interface ShortcutWrapperProps {
  show?: boolean;
}

const ShortcutWrapper = styled.div<ShortcutWrapperProps>`
  position: absolute;
  top: 40px;
  bottom: 0;
  width: 100%;
  display: ${({ show = false }) => (show ? 'block' : 'none')};
`;

const HotKey = styled.div`
  margin: 0 20px 20px 20px;

  h1 {
    padding-top: 35px;
    margin-bottom: 20px;
    font-size: ${({ theme }) => theme.fontSizeM};
    color: ${({ theme }) => theme.fontColorDescV2};
  }

  li {
    display: inline-block;
    padding: 5px 10px;
    margin: 0 20px 10px 0;
    border-radius: 6px;
    background: ${({ theme }) => theme.backgroundColorHighlight};
    font-size: ${({ theme }) => theme.fontSizeM};
    color: ${({ theme }) => theme.fontColorDesc};
  }
`;

const HistoryWrapper = styled.div`
  position: relative;
  margin: 0 20px;

  h1 {
    display: flex;
    align-items: center;
    height: 40px;
    font-size: ${({ theme }) => theme.fontSizeM};
    color: ${({ theme }) => theme.fontColorDescV2};
  }
`;

const HistoryText = styled.span`
  flex: 1;
`;

const HistoryClear = styled.span`
  ${extendClick()}
  .iconfont {
    font-size: ${({ theme }) => theme.fontSizeM};
    color: ${({ theme }) => theme.fontColorDesc};
  }
`;

const HistoryItem = styled.li`
  display: flex;
  align-items: center;
  height: 40px;
  overflow: hidden;
  color: ${({ theme }) => theme.fontColorDescV2};
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
`;

const HistoryItemText = styled.span`
  flex: 1;
  font-size: ${({ theme }) => theme.fontSizeS};
  color: ${({ theme }) => theme.fontColorDesc};
`;

const HistoryItemIcon = styled.span`
  ${extendClick()}
  .iconfont {
    color: ${({ theme }) => theme.fontColorDesc};
  }
`;

export default StyledSearch;

export {
  ShortcutWrapper,
  HotKey,
  HistoryWrapper,
  HistoryText,
  HistoryClear,
  HistoryItem,
  HistoryItemText,
  HistoryItemIcon,
};

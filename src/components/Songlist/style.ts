import styled, { css } from 'styled-components';

import { noWrap } from 'styles/mixins';

interface StyledSonglistProps {
  showBackground?: boolean;
}

const StyledSonglist = styled.div<StyledSonglistProps>`
  border-radius: 10px;
  opacity: 0.98;
  ${({ showBackground = false }) =>
    showBackground &&
    css`
      background: ${({ theme }) => theme.backgroundColorHighlight};
    `}
`;

const FirstLine = styled.div`
  box-sizing: border-box;
  padding: 10px 0;
  margin-left: 10px;
  position: relative;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
`;

const PlayAll = styled.div`
  display: inline-block;
  line-height: 24px;
  color: ${({ theme }) => theme.fontColorDesc};
  .iconfont {
    font-size: 24px;
    margin-right: 10px;
    vertical-align: top;
  }
  > span {
    vertical-align: top;
  }
`;

const Sum = styled.span`
  vertical-align: middle;
  margin-left: 4px;
  font-size: ${({ theme }) => theme.fontSizeS};
  color: ${({ theme }) => theme.fontColorDescV2};
`;

interface AddCollectListProps {
  collected?: boolean;
}

const AddCollectList = styled.div<AddCollectListProps>`
  display: flex;
  align-items: center;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 130px;
  line-height: 34px;
  background: ${({ theme }) => theme.themeColor};
  color: ${({ theme }) => theme.fontColorLight};
  font-size: 0;
  border-radius: 3px;
  vertical-align: top;

  ${({ collected = false }) =>
    collected &&
    css`
      display: flex;
      background: ${({ theme }) => theme.backgroundColor};
      color: ${({ theme }) => theme.fontColorDesc};
    `}

  .iconfont {
    vertical-align: top;
    font-size: 10px;
    margin: 0 5px 0 10px;
  }

  span {
    font-size: 14px;
    line-height: 34px;
  }
`;

const SongListContent = styled.ul``;

const SongItem = styled.li`
  display: flex;
  height: 60px;
  align-items: center;
`;

const SongItemIndex = styled.span`
  flex-basis: 60px;
  width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
`;

const SongItemInfo = styled.div`
  box-sizing: border-box;
  flex: 1;
  display: flex;
  height: 100%;
  padding: 5px 0;
  flex-direction: column;
  justify-content: space-around;
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
  ${noWrap()}
  >span {
    ${noWrap()}
  }
  > span:first-child {
    color: ${({ theme }) => theme.fontColorDesc};
  }
  > span:last-child {
    font-size: ${({ theme }) => theme.fontSizeS};
    color: #bba8a8;
  }
`;

export default StyledSonglist;

export { FirstLine, PlayAll, Sum, AddCollectList, SongListContent, SongItem, SongItemIndex, SongItemInfo };

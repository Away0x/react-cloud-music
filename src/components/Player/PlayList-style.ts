import styled from 'styled-components';

import { extendClick, noWrap } from 'styles/mixins';

const StyledPlayList = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 1000;
  background-color: ${({ theme }) => theme.backgroundColorShadow};

  &.list-fade-enter {
    opacity: 0;
  }
  &.list-fade-enter-active {
    opacity: 1;
    transition: all 0.3s;
  }
  &.list-fade-exit {
    opacity: 1;
  }
  &.list-fade-exit-active {
    opacity: 0;
    transition: all 0.3s;
  }
`;

const ListWrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  opacity: 1;
  border-radius: 10px 10px 0 0;
  background-color: ${({ theme }) => theme.backgroundColorHighlight};
  transform: translate3d(0, 0, 0);
`;

const ListHeader = styled.div`
  position: relative;
  padding: 20px 30px 10px 20px;
`;

const Title = styled.h1`
  display: flex;
  align-items: center;
  > div {
    flex: 1;

    .iconfont {
      margin-right: 10px;
      font-size: ${({ theme }) => theme.fontSizeLL};
      color: ${({ theme }) => theme.themeColor};
    }
  }
`;

const TitleText = styled.span`
  flex: 1;
  font-size: ${({ theme }) => theme.fontSizeM};
  color: ${({ theme }) => theme.fontColorDesc};
`;

const TitleClear = styled.span`
  ${extendClick()}
  font-size: ${({ theme }) => theme.fontSizeL};
`;

const ScrollWrapper = styled.div`
  height: 400px;
  overflow: hidden;
`;

const ListContent = styled.ul``;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0 30px 0 20px;
  overflow: hidden;
  &.list-enter,
  &.list-exit-done {
    height: 0;
  }
  &.list-enter-active,
  &.list-leave-active {
    transition: all 0.1s;
  }
`;

const ItemText = styled.span`
  ${noWrap()}
  flex: 1;
  font-size: ${({ theme }) => theme.fontSizeM};
  color: ${({ theme }) => theme.fontColorDescV2};
`;

const ItemCurrent = styled.i`
  flex: 0 0 20px;
  width: 20px;
  font-size: ${({ theme }) => theme.fontSizeS};
  color: ${({ theme }) => theme.themeColor};
`;

const ItemLike = styled.span`
  ${extendClick()}
  margin-right: 15px;
  font-size: ${({ theme }) => theme.fontSizeM};
  color: ${({ theme }) => theme.themeColor};
`;

const ItemDelete = styled.span`
  ${extendClick()}
  font-size: ${({ theme }) => theme.fontSizeS};
  color: ${({ theme }) => theme.themeColor};
`;

export default StyledPlayList;

export {
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
};

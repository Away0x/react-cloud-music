import styled, { css } from 'styled-components';

const StyledHorizenList = styled.div``;

const List = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  overflow: hidden;
  > span:first-of-type {
    display: block;
    flex: 0 0 auto;
    padding: 5px 0;
    margin-right: 5px;
    color: grey;
    cursor: initial;
    font-size: ${({ theme }) => theme.fontSizeM};
  }
`;

const ListTitle = styled.span`
  display: block;
  flex: 0 0 auto;
  padding: 5px 0;
  margin-right: 5px;
  color: grey;
  font-size: ${({ theme }) => theme.fontSizeM};
`;

interface listItemProps {
  selected?: boolean;
}

const ListItem = styled.span<listItemProps>`
  flex: 0 0 auto;
  font-size: ${({ theme }) => theme.fontSizeM};
  padding: 5px 8px;
  border: 1px solid transparent;
  border-radius: 10px;
  cursor: pointer;

  ${({ theme, selected = false }) =>
    selected &&
    css`
      color: ${theme.themeColor};
      border-color: ${theme.themeColor};
      opacity: 0.8;
    `};
`;

export default StyledHorizenList;

export { List, ListTitle, ListItem };

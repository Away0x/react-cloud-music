import styled from 'styled-components';

const StyledSearchBox = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  padding: 0 6px;
  padding-right: 20px;
  height: 40px;
  background: ${({ theme }) => theme.themeColor};
`;

const IconBack = styled.i`
  font-size: 24px;
  color: ${({ theme }) => theme.fontColorLight};
  cursor: pointer;
`;

interface IconDeleteProps {
  hide?: boolean;
}

const IconDelete = styled.i<IconDeleteProps>`
  font-size: 16px;
  color: ${({ theme }) => theme.backgroundColor};
  display: ${({ hide = true }) => (hide ? 'none' : 'block')};
  cursor: pointer;
`;

const InputBox = styled.input`
  flex: 1;
  margin: 0 5px;
  line-height: 18px;
  background: ${({ theme }) => theme.themeColor};
  color: ${({ theme }) => theme.backgroundColorHighlight};
  font-size: ${({ theme }) => theme.fontSizeM};
  outline: none;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.themeColor};
  &::placeholder {
    color: ${({ theme }) => theme.themeColor};
  }
`;

export default StyledSearchBox;

export { IconBack, IconDelete, InputBox };

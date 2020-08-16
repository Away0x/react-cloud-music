import styled from 'styled-components';

const StyledHeader = styled.div`
  position: fixed;
  box-sizing: border-box;
  padding: 5px 10px;
  padding-top: 0;
  height: ${({ theme }) => theme.navBarHeight}px;
  width: 100%;
  z-index: 100;
  display: flex;
  line-height: 40px;
  color: ${({ theme }) => theme.fontColorLight};

  > h1 {
    font-size: ${({ theme }) => theme.fontSizeL};
    font-weight: 700;
    width: 100%;
  }
`;

const Back = styled.i`
  margin-right: 5px;
  font-size: 20px;
  width: 20px;
  cursor: pointer;
`;

export default StyledHeader;

export { Back };

import styled from 'styled-components';

const StyledSingers = styled.div``;

const NavContainer = styled.div`
  box-sizing: border-box;
  position: fixed;
  top: 95px;
  width: 100%;
  padding: 5px;
  overflow: hidden;
`;

const ListContainer = styled.div`
  position: fixed;
  top: 160px;
  left: 0;
  bottom: ${({ theme }) => theme.pageBottom + 'px'};
  overflow: hidden;
  width: 100%;
`;

export default StyledSingers;

export { NavContainer, ListContainer };

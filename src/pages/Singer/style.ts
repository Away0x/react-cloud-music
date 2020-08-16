import styled from 'styled-components';

const StyledSinger = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  z-index: 100;
  overflow: hidden;
  background: ${({ theme }) => theme.backgroundColor};
`;

export default StyledSinger;

import styled from 'styled-components';

const StyledRank = styled.div`
  position: fixed;
  top: 90px;
  bottom: ${({ theme }) => theme.pageBottom + 'px'};
  width: 100%;
`;

interface TitleProps {
  show?: boolean;
}

const Title = styled.h1<TitleProps>`
  margin: 10px 5px;
  padding-top: 15px;
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizeM};
  color: ${({ theme }) => theme.fontColorDesc};
  display: ${({ show = true }) => (show ? 'block' : 'none')};
`;

export default StyledRank;

export { Title };

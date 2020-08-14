import styled from 'styled-components';

const StyledSingerList = styled.div`
  display: flex;
  margin: auto;
  flex-direction: column;
  overflow: hidden;

  h1 {
    margin: 10px 0 10px 10px;
    color: ${({ theme }) => theme.fontColorDesc};
    font-size: ${({ theme }) => theme.fontSizeS};
  }
`;

const ListItem = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  margin: 0 5px;
  padding: 5px 0;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
`;

const ImgWrapper = styled.div`
  margin-right: 20px;

  img {
    border-radius: 3px;
    width: 50px;
    height: 50px;
  }
`;

const Name = styled.span`
  font-size: ${({ theme }) => theme.fontSizeM};
  color: ${({ theme }) => theme.fontColorDesc};
  font-weight: 500;
`;

export default StyledSingerList;

export { ListItem, ImgWrapper, Name };

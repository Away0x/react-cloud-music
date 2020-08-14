import styled from 'styled-components';

interface StyledRankListProps {
  global?: boolean;
}

const StyledRankList = styled.ul<StyledRankListProps>`
  margin-top: 10px;
  padding: 0 5px;
  display: ${({ global = false }) => (global ? 'flex' : 'block')};
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  background: ${({ theme }) => theme.backgroundColor};
  &::after {
    content: '';
    display: block;
    width: 32vw;
  }
`;

interface ListItemProps {
  hasTracks?: boolean;
}

const ListItem = styled.li<ListItemProps>`
  display: ${({ hasTracks = false }) => (hasTracks ? 'flex' : 'block')};
  padding: 3px 0;
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
`;

const ImgWrapper = styled.div<ListItemProps>`
  width: ${({ hasTracks = false }) => (hasTracks ? '27vw' : '32vw')};
  height: ${({ hasTracks = false }) => (hasTracks ? '27vw' : '32vw')};
  border-radius: 3px;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    border-radius: 3px;
  }
`;

const Decorate = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 35px;
  border-radius: 3px;
  background: linear-gradient(hsla(0, 0%, 100%, 0), hsla(0, 0%, 43%, 0.4));
`;

const UpdateFrequecy = styled.span`
  position: absolute;
  left: 7px;
  bottom: 7px;
  font-size: ${({ theme }) => theme.fontSizeSS};
  color: ${({ theme }) => theme.fontColorLight};
`;

const StyledSongList = styled.ul`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 10px 10px;
  > li {
    font-size: ${({ theme }) => theme.fontSizeS};
    color: grey;
  }
`;

export default StyledRankList;

export { ListItem, ImgWrapper, Decorate, UpdateFrequecy, StyledSongList };

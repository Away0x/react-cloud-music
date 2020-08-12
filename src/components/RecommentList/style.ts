import styled from 'styled-components';

const StyledRecommentList = styled.div`
  max-width: 100%;
  h1 {
    font-weight: 700;
    padding-left: 6px;
    font-size: 14px;
    line-height: 60px;
    color: ${({ theme }) => theme.fontColor};
  }
`;

const List = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const ListItem = styled.div`
  position: relative;
  width: 32%;
`;

const ImgWrapper = styled.div`
  position: relative;
  height: 0;
  padding-bottom: 100%;

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 3px;
  }
`;

/* 给图片上的图标和文字提供一个遮罩，因为在字体颜色是白色，在面对白色图片背景的时候，文字会看不清或者看不到，因此提供一个阴影来衬托出文字 */
const Decorate = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 35px;
  border-radius: 3px;
  background: linear-gradient (hsla (0, 0%, 43%, 0.4), hsla (0, 0%, 100%, 0));
`;

const PlayCount = styled.div`
  position: absolute;
  right: 2px;
  top: 2px;
  font-size: ${({ theme }) => theme.fontSizeS};
  line-height: 15px;
  color: ${({ theme }) => theme.fontColorLight};

  .play {
    vertical-align: top;
  }
`;

const Desc = styled.div`
  overflow: hidden;
  margin-top: 2px;
  padding: 0 2px;
  height: 50px;
  text-align: left;
  font-size: ${({ theme }) => theme.fontSizeS};
  line-height: 1.4;
  color: ${({ theme }) => theme.fontColorDesc};
`;

export default StyledRecommentList;

export { List, ListItem, ImgWrapper, Decorate, PlayCount, Desc };

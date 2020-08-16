import styled from 'styled-components';

const StyledAlbumDetailTopDesc = styled.div`
  background-size: 100%;
  padding: 5px 20px;
  padding-bottom: 50px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 275px;
  position: relative;
`;

interface BackgroundProps {
  background: string;
}

const Background = styled.div<BackgroundProps>`
  background: url(${({ background }) => background}) left top no-repeat;
  background-position: 0 0;
  background-size: 100% 100%;
  position: absolute;
  width: 100%;
  height: 100%;
  filter: blur(20px);
`;

const BackgroundFilter = styled.div`
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(7, 17, 27, 0.2);
`;

const ImgWrapper = styled.div`
  width: 120px;
  height: 120px;
  position: relative;

  img {
    width: 120px;
    height: 120px;
    border-radius: 3px;
  }
`;

const Decorate = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 35px;
  border-radius: 3px;
  background: linear-gradient(hsla(0, 0%, 43%, 0.4), hsla(0, 0%, 100%, 0));
`;

const PlayCount = styled.div`
  position: absolute;
  right: 2px;
  top: 2px;
  font-size: ${({ theme }) => theme.fontSizeS};
  line-height: 15px;
  color: ${({ theme }) => theme.fontColorLight};
`;

const PLay = styled.i`
  vertical-align: top;
`;

const DescWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 120px;
  padding: 0 10px;
  z-index: 1;
`;

const Title = styled.div`
  max-height: 70px;
  color: ${({ theme }) => theme.fontColorLight};
  font-weight: 700;
  line-height: 1.5;
  font-size: ${({ theme }) => theme.fontSizeL};
`;

const Person = styled.div`
  display: flex;
`;

const Avatar = styled.div`
  width: 20px;
  height: 20px;
  margin-right: 5px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;

const Name = styled.div`
  line-height: 20px;
  font-size: ${({ theme }) => theme.fontSizeM};
  color: ${({ theme }) => theme.fontColorDescV2};
`;

const StyledMenu = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 30px 20px 30px;
  margin: -100px 0 0 0;
  > div {
    display: flex;
    flex-direction: column;
    line-height: 20px;
    text-align: center;
    font-size: ${({ theme }) => theme.fontSizeS};
    color: #3b1f1f;
    color: ${({ theme }) => theme.fontColorLight};
    z-index: 1000;
    font-weight: 500;
    .iconfont {
      font-size: 20px;
    }
  }
`;

export {
  StyledAlbumDetailTopDesc,
  Background,
  BackgroundFilter,
  ImgWrapper,
  Decorate,
  PlayCount,
  PLay,
  DescWrapper,
  Title,
  Person,
  Avatar,
  Name,
  StyledMenu,
};

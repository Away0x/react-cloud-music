import styled from 'styled-components';

const StyledSinger = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.backgroundColor};
`;

interface ImgWrapperProps {
  bgUrl?: string;
}

const ImgWrapper = styled.div<ImgWrapperProps>`
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 75%;
  transform-origin: top;
  background: url(${(props) => props.bgUrl});
  background-size: cover;
  z-index: 50;
`;

const ImgWrapperFilter = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  filter: blur(20px);
  background: rgba(7, 17, 27, 0.3);
`;

const CollectButton = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  margin: auto;
  box-sizing: border-box;
  width: 120px;
  height: 40px;
  margin-top: -55px;
  z-index: 50;
  background: ${({ theme }) => theme.themeColor};
  color: ${({ theme }) => theme.fontColorLight};
  border-radius: 20px;
  text-align: center;
  font-size: 0;
  line-height: 40px;

  .iconfont {
    display: inline-block;
    margin-right: 10px;
    font-size: 12px;
    vertical-align: 1px;
  }
`;

const CollectButtonText = styled.span`
  display: inline-block;
  font-size: 14px;
  letter-spacing: 5px;
`;

const SongListWrapper = styled.div`
  position: absolute;
  z-index: 50;
  top: 0;
  left: 0;
  bottom: 0;
  /* bottom: (props) => (props.play ? '60px' : 0) */
  right: 0;

  > div {
    position: absolute;
    left: 0;
    width: 100%;
    overflow: visible;
  }
`;

const BgLayer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  background: white;
  border-radius: 10px;
  z-index: 50;
`;

export default StyledSinger;

export { ImgWrapper, ImgWrapperFilter, CollectButton, CollectButtonText, SongListWrapper, BgLayer };

import styled from 'styled-components';

const StyledLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #e82101;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 3;
  > div {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: #f13b30;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    &:after,
    &:before {
      content: '';
      position: absolute;
      width: 100px;
      height: 100px;
      border: 2px solid #f54060;
      display: block;
      border-radius: 50%;
      animation-name: 'ripple';
      animation-duration: 3s;
      animation-iteration-count: infinite;
      animation-direction: normal;
      animation-timing-function: linear;
    }
    &:after {
      animation-delay: 0s;
    }
    &:before {
      animation-delay: 1s;
    }

    @keyframes ripple {
      0% {
        width: 100px;
        height: 100px;
        border: 2px solid #f54060;
      }
      100% {
        border: 2px solid #f54060;
        width: 300px;
        height: 300px;
        opacity: 0.1;
      }
    }
  }
`;

const LogoImg = styled.img.attrs({
  src: require('assets/images/netease-logo-white.svg'),
})`
  width: 70px;
`;

export default StyledLogin;

export { LogoContainer, LogoImg };

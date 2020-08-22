import styled, { keyframes } from 'styled-components';

const shakeHorizontal = keyframes`
  2% {
    transform: translate(-5px, 0) rotate(0);
  }

  4% {
    transform: translate(8px, 0) rotate(0);
  }

  6% {
    transform: translate(8px, 0) rotate(0);
  }

  8% {
    transform: translate(9px, 0) rotate(0);
  }

  10% {
    transform: translate(-7px, 0) rotate(0);
  }

  12% {
    transform: translate(1px, 0) rotate(0);
  }

  14% {
    transform: translate(-4px, 0) rotate(0);
  }

  16% {
    transform: translate(7px, 0) rotate(0);
  }

  18% {
    transform: translate(8px, 0) rotate(0);
  }

  20% {
    transform: translate(-7px, 0) rotate(0);
  }

  22% {
    transform: translate(9px, 0) rotate(0);
  }

  24% {
    transform: translate(8px, 0) rotate(0);
  }

  26% {
    transform: translate(-2px, 0) rotate(0);
  }

  28% {
    transform: translate(5px, 0) rotate(0);
  }

  30% {
    transform: translate(6px, 0) rotate(0);
  }

  32% {
    transform: translate(4px, 0) rotate(0);
  }

  34% {
    transform: translate(3px, 0) rotate(0);
  }

  36% {
    transform: translate(7px, 0) rotate(0);
  }

  38% {
    transform: translate(-1px, 0) rotate(0);
  }

  40% {
    transform: translate(3px, 0) rotate(0);
  }

  42% {
    transform: translate(10px, 0) rotate(0);
  }

  44% {
    transform: translate(3px, 0) rotate(0);
  }

  46% {
    transform: translate(-9px, 0) rotate(0);
  }

  48% {
    transform: translate(6px, 0) rotate(0);
  }

  50% {
    transform: translate(-8px, 0) rotate(0);
  }

  52% {
    transform: translate(6px, 0) rotate(0);
  }

  54% {
    transform: translate(1px, 0) rotate(0);
  }

  56% {
    transform: translate(5px, 0) rotate(0);
  }

  58% {
    transform: translate(-4px, 0) rotate(0);
  }

  60% {
    transform: translate(3px, 0) rotate(0);
  }

  62% {
    transform: translate(-5px, 0) rotate(0);
  }

  64% {
    transform: translate(7px, 0) rotate(0);
  }

  66% {
    transform: translate(-8px, 0) rotate(0);
  }

  68% {
    transform: translate(-2px, 0) rotate(0);
  }

  70% {
    transform: translate(-5px, 0) rotate(0);
  }

  72% {
    transform: translate(1px, 0) rotate(0);
  }

  74% {
    transform: translate(1px, 0) rotate(0);
  }

  76% {
    transform: translate(-9px, 0) rotate(0);
  }

  78% {
    transform: translate(6px, 0) rotate(0);
  }

  80% {
    transform: translate(8px, 0) rotate(0);
  }

  82% {
    transform: translate(10px, 0) rotate(0);
  }

  84% {
    transform: translate(-6px, 0) rotate(0);
  }

  86% {
    transform: translate(-1px, 0) rotate(0);
  }

  88% {
    transform: translate(5px, 0) rotate(0);
  }

  90% {
    transform: translate(-1px, 0) rotate(0);
  }

  92% {
    transform: translate(7px, 0) rotate(0);
  }

  94% {
    transform: translate(-3px, 0) rotate(0);
  }

  96% {
    transform: translate(-7px, 0) rotate(0);
  }

  98% {
    transform: translate(-4px, 0) rotate(0);
  }

  0%,
  100% {
    transform: translate(0, 0) rotate(0);
  }
`;

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
  flex: 2;
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

const Button = styled.div`
  background: #fff;
  color: #e82101;
  height: 50px;
  line-height: 50px;
  font-size: 18px;
  width: 70%;
  display: flex;
  justify-content: center;
  border-radius: 27px;
  align-items: center;
  border: 1px solid #fff;
  margin-bottom: 20px;
  cursor: pointer;
`;

const FormWrapper = styled.div`
  display: flex;
  width: 100%;
  flex: 1;
  flex-direction: column;
  align-items: center;
  color: #fff;

  .shake-anim {
    animation-name: ${shakeHorizontal};
    animation-duration: 400ms;
    animation-timing-function: ease-in-out;
    animation-iteration-count: 5s;
    animation-play-state: running;
  }
`;

export default StyledLogin;

export { LogoContainer, LogoImg, Button, FormWrapper };

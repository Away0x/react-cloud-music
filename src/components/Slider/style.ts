import styled from 'styled-components';

const SWIPER_CONTAINER_CLASSNAME = 'swiper-container';

const StyledSlider = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  margin: auto;
  background: white;

  .${SWIPER_CONTAINER_CLASSNAME} {
    position: relative;
    width: 98%;
    height: 160px;
    overflow: hidden;
    margin: auto;
    border-radius: 6px;

    .swiper-pagination-bullet-active {
      background: ${({ theme }) => theme.themeColor};
    }
  }
`;

const SwiperNav = styled.div`
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
`;

const Before = styled.div`
  position: absolute;
  top: -300px;
  height: 400px;
  width: 100%;
  background: ${({ theme }) => theme.themeColor};
`;

export default StyledSlider;

export { SWIPER_CONTAINER_CLASSNAME, SwiperNav, Before };

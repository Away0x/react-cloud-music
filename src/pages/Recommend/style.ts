import styled from 'styled-components';

const StyledRecommend = styled.div`
  /**
  better-scroll 的原理: 在容器元素高度固定，当子元素高度超过容器元素高度时，
  通过 transfrom 动画产生滑动效果，因此它的使用原则就是外部容器必须是固定高度，不然没法滚动
  */
  position: fixed;
  top: 90px;
  bottom: ${({ theme }) => theme.pageBottom + 'px'};
  width: 100%;
`;

export default StyledRecommend;

import styled from 'styled-components';

const StyledProgressCircle = styled.div`
  position: relative;
`;

const ProgressBackground = styled.circle`
  stroke-width: 8px;
  transform-origin: center;
  transform: scale(0.9);
  stroke: ${({ theme }) => theme.themeColorShadow};
`;

const ProgressBar = styled.circle`
  stroke-width: 8px;
  transform-origin: center;
  transform: scale(0.9) rotate(-90deg);
  stroke: ${({ theme }) => theme.themeColor};
`;

export default StyledProgressCircle;

export { ProgressBackground, ProgressBar };

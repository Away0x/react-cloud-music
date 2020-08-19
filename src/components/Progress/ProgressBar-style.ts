import styled from 'styled-components';

const StyledProgressBar = styled.div`
  height: 30px;
`;

const BarInner = styled.div`
  position: relative;
  top: 13px;
  height: 4px;
  background: rgba(0, 0, 0, 0.3);
`;

const Progress = styled.div`
  position: absolute;
  height: 100%;
  background: ${({ theme }) => theme.themeColor};
`;

const ProgressBtnWrapper = styled.div`
  position: absolute;
  left: -8px;
  top: -13px;
  width: 30px;
  height: 30px;
`;

const ProgressBtn = styled.div`
  position: relative;
  top: 7px;
  left: 7px;
  box-sizing: border-box;
  width: 16px;
  height: 16px;
  border: 3px solid ${({ theme }) => theme.borderColor};
  border-radius: 50%;
  background: ${({ theme }) => theme.themeColor};
`;

export default StyledProgressBar;

export { BarInner, Progress, ProgressBtnWrapper, ProgressBtn };

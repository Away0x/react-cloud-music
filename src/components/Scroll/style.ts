import styled from 'styled-components';

const StyledScroll = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

interface PullProps {
  show?: boolean;
}

const PullUploading = styled.div<PullProps>`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 5px;
  width: 60px;
  height: 60px;
  margin: auto;
  z-index: 100;
  display: ${({ show = false }) => (show ? 'block' : 'none')};
`;

const PullDownLoading = styled.div<PullProps>`
  position: absolute;
  left: 0;
  right: 0;
  top: 0px;
  height: 30px;
  margin: auto;
  z-index: 100;
  display: ${({ show = false }) => (show ? 'block' : 'none')};
`;

export default StyledScroll;

export { PullUploading, PullDownLoading };

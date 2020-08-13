import styled from 'styled-components';

const StyledScroll = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const PullUploading = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 5px;
  width: 60px;
  height: 60px;
  margin: auto;
  z-index: 100;
`;

const PullDownLoading = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0px;
  height: 30px;
  margin: auto;
  z-index: 100;
`;

export default StyledScroll;

export { PullUploading, PullDownLoading };

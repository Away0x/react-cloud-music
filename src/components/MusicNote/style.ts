import styled from 'styled-components';

const StyledMusicNote = styled.div`
  .icon_wrapper {
    position: fixed;
    z-index: 30000;
    margin-top: -10px;
    margin-left: -10px;
    color: ${({ theme }) => theme.themeColor};
    font-size: 14px;
    display: none;
    transition: transform 1s cubic-bezier(0.62, -0.1, 0.86, 0.57);
    transform: translate3d(0, 0, 0);
    > div {
      transition: transform 1s;
    }
  }
`;

export default StyledMusicNote;

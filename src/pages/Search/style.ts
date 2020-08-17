import styled from 'styled-components';

const StyledSearch = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.backgroundColor};
`;

interface ShortcutWrapperProps {
  show?: boolean;
}

const ShortcutWrapper = styled.div<ShortcutWrapperProps>`
  position: absolute;
  top: 40px;
  bottom: 0;
  width: 100%;
  display: ${({ show = false }) => (show ? 'block' : 'none')};
`;

const HotKey = styled.div`
  margin: 0 20px 20px 20px;

  h1 {
    padding-top: 35px;
    margin-bottom: 20px;
    font-size: ${({ theme }) => theme.fontSizeM};
    color: ${({ theme }) => theme.fontColorDescV2};
  }

  li {
    display: inline-block;
    padding: 5px 10px;
    margin: 0 20px 10px 0;
    border-radius: 6px;
    background: ${({ theme }) => theme.backgroundColorHighlight};
    font-size: ${({ theme }) => theme.fontSizeM};
    color: ${({ theme }) => theme.fontColorDesc};
  }
`;

export default StyledSearch;

export { ShortcutWrapper, HotKey };

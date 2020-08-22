import styled from 'styled-components';

const StyledCheckBox = styled.div`
  display: inline-block;
  /* color: ${({ theme }) => theme.themeColor}; */
  font-size: 12px;
  input:checked + label {
    background-color: #fff;
  }
  label {
    display: inline-block;
    vertical-align: middle;
    margin-right: 5px;
    padding: 2px;
    border: 1px solid #fff;
    border-radius: 100%;
    width: 10px;
    height: 10px;
    background-clip: content-box;
    cursor: pointer;
    transition: all 300ms;
  }
  span {
    vertical-align: middle;
  }
`;

export default StyledCheckBox;

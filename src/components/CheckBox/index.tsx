import React from 'react';

import StyledCheckBox from './style';

interface CheckBoxProps {
  name: string;
  onChange?: (status: boolean) => void;
  children?: React.ReactNode;
}

function CheckBox({ children, onChange, name }: CheckBoxProps) {
  return (
    <StyledCheckBox>
      <input id={name} type="checkbox" hidden onChange={(ev) => onChange && onChange(ev.target.checked)} />
      <label htmlFor={name}></label>
      <span>{children}</span>
    </StyledCheckBox>
  );
}

export default React.memo(CheckBox);

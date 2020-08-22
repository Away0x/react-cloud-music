import React, { forwardRef } from 'react';

import StyledCheckBox from './style';

interface CheckBoxProps {
  checked?: boolean;
  name: string;
  onChange?: (status: boolean) => void;
  className?: string;
  children?: React.ReactNode;
}

const CheckBox = forwardRef<HTMLDivElement, CheckBoxProps>(
  ({ children, className, checked = false, onChange, name }, ref) => {
    return (
      <StyledCheckBox className={className} ref={ref}>
        <input
          id={name}
          type="checkbox"
          checked={checked}
          hidden
          onChange={(ev) => onChange && onChange(ev.target.checked)}
        />
        <label htmlFor={name}></label>
        <span>{children}</span>
      </StyledCheckBox>
    );
  },
);

export default React.memo(CheckBox);

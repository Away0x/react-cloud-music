import React from 'react';

import CheckBox from '.';

export default {
  title: 'Components/CheckBox',
  component: CheckBox,
};

export const Default = () => {
  return (
    <div style={{ background: '#e82101', height: '100px', lineHeight: '100px', padding: '20px' }}>
      <CheckBox name="demo" onChange={console.log}>
        <span style={{ color: '#fff' }}>CheckBox component</span>
      </CheckBox>
    </div>
  );
};

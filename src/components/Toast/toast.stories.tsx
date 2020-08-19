import React from 'react';

import Toast from '.';
import useToast from './useToast';

export default {
  title: 'Components/Toast',
  component: Toast,
};

export const Default = () => {
  const { showToast, toastRef } = useToast();

  return (
    <div>
      <button type="button" onClick={() => showToast()}>
        打开 toast
      </button>
      <Toast ref={toastRef}>
        <p style={{ color: 'red' }}>我是一个 toast</p>
      </Toast>
    </div>
  );
};

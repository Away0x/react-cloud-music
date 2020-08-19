import React from 'react';

import Toast, { useToast } from '.';

export default {
  title: 'Components/Toast',
  component: Toast,
};

export const Default = () => {
  const { showToast, toastRef } = useToast();

  return (
    <div>
      <button type="button" onClick={() => showToast(<p>我是一个 toast</p>)}>
        打开 toast
      </button>
      <Toast ref={toastRef} />
    </div>
  );
};

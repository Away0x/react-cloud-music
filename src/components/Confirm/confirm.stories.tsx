import React from 'react';

import Confirm, { useConfirm } from '.';

export default {
  title: 'Components/Confirm',
  component: Confirm,
};

export const Default = () => {
  const { showConfirm, confirmRef } = useConfirm();

  return (
    <div>
      <button type="button" onClick={() => showConfirm()}>
        打开 confirm
      </button>
      <Confirm ref={confirmRef} onConfirm={() => alert('confirm')}>
        我是一个 confirm
      </Confirm>
    </div>
  );
};

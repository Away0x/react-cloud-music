import React, { useState } from 'react';

import Drawer from '.';

export default {
  title: 'Components/Drawer',
  component: Drawer,
};

export const Default = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <button style={{ marginLeft: '20%', zIndex: 1111111 }} type="button" onClick={() => setShow(true)}>
        打开 Drawer
      </button>
      <Drawer show={show} onClose={() => setShow(false)}>
        Drawer component
      </Drawer>
    </>
  );
};

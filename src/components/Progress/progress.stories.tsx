import React, { useState } from 'react';

import { ProgressBar, ProgressCircle } from '.';

export default {
  title: 'Components/Progress',
  component: ProgressBar,
};

export const DefaultProgressBar = () => {
  const [precent, setPrecent] = useState(0);

  return (
    <div>
      <p>请在移动端查看: precent {precent * 100}</p>
      <ProgressBar percent={100} onChangePercent={(p) => setPrecent(p)} />
    </div>
  );
};

export const DefaultProgressCircle = () => {
  return (
    <div>
      <ProgressCircle width={50} percent={50} />
    </div>
  );
};

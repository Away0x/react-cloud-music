import React, { useState, useCallback } from 'react';

import { rangeArr } from 'tools/utils';

import Scroll from '.';

export default {
  title: 'Components/Scroll',
  component: Scroll,
};

function timeOut() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 3000);
  });
}

function ListItem({ i }: { i: number }) {
  return (
    <p
      style={{
        height: '100px',
        lineHeight: '100px',
        marginBottom: '10px',
        textAlign: 'center',
        background: 'rgb(228 222 222)',
      }}>
      {i}
    </p>
  );
}

function List({ count = 20 }: { count?: number }) {
  return (
    <div>
      {rangeArr(0, count).map((i) => (
        <ListItem key={i} i={i} />
      ))}
    </div>
  );
}

export const Default = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '500px',
      }}>
      <Scroll>
        <List />
      </Scroll>
    </div>
  );
};

export const PullUpPullDown = () => {
  const [count, setCount] = useState(5);
  const [pullUpLoading, setPullUpLoading] = useState(false);
  const [pullDownLoading, setPullDownLoading] = useState(false);

  const pullUp = useCallback(async () => {
    setPullUpLoading(true);
    await timeOut();
    setCount((c) => c + 5);
    setPullUpLoading(false);
  }, []);

  const pullDown = useCallback(async () => {
    setPullDownLoading(true);
    await timeOut();
    setCount(5);
    setPullDownLoading(false);
  }, []);

  return (
    <div
      style={{
        width: '100%',
        height: '500px',
      }}>
      <Scroll pullUpLoading={pullUpLoading} pullDownLoading={pullDownLoading} pullUp={pullUp} pullDown={pullDown}>
        <List count={count} />
      </Scroll>
    </div>
  );
};

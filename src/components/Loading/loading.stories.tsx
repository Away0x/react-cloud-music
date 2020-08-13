import React from 'react';

import Loading from './Loading';
import LoadingV2 from './LoadingV2';

export default {
  title: 'Components/Loading',
  component: Loading,
};

export const DefaultLoading = () => {
  return (
    <div>
      <Loading />
    </div>
  );
};

export const DefaultLoadingV2 = () => {
  return (
    <div>
      <LoadingV2 />
    </div>
  );
};

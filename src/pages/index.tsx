import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { SpecialRoutePath } from 'constants/router';
import NotFound from './Errors/NotFound';

function RootRoutes() {
  return (
    <Switch>
      {/* not found */}
      <Route path={SpecialRoutePath.Any}>
        <NotFound />
      </Route>
    </Switch>
  );
}

export default React.memo(RootRoutes);

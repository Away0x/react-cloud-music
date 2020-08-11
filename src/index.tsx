import React from 'react';
import ReactDOM from 'react-dom';

import App from 'App';
import * as serviceWorker from 'serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

(window as any).__project__ = (() => {
  return {
    version: process.env.version,
    branche: process.env.branche,
    buildtime: process.env.buildtime,
    desc: process.env.desc,
  };
})();

serviceWorker.unregister();

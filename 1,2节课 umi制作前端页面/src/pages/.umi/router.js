import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/_renderRoutes';


let Router = require('dva/router').routerRedux.ConnectedRouter;

let routes = [
  {
    "path": "/",
    "component": require('../../layouts/index.js').default,
    "routes": [
      {
        "path": "/",
        "exact": true,
        "component": require('../index/index.js').default,
        "_title": "umi_demo1",
        "_title_default": "umi_demo1"
      },
      {
        "path": "/user",
        "exact": true,
        "component": require('../user/index.js').default,
        "_title": "umi_demo1",
        "_title_default": "umi_demo1"
      },
      {
        "component": () => React.createElement(require('F:/demo/umi_demo1/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: false }),
        "_title": "umi_demo1",
        "_title_default": "umi_demo1"
      }
    ],
    "_title": "umi_demo1",
    "_title_default": "umi_demo1"
  },
  {
    "component": () => React.createElement(require('F:/demo/umi_demo1/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: false }),
    "_title": "umi_demo1",
    "_title_default": "umi_demo1"
  }
];
window.g_routes = routes;
window.g_plugins.applyForEach('patchRoutes', { initialValue: routes });

// route change handler
function routeChangeHandler(location, action) {
  window.g_plugins.applyForEach('onRouteChange', {
    initialValue: {
      routes,
      location,
      action,
    },
  });
}
window.g_history.listen(routeChangeHandler);
routeChangeHandler(window.g_history.location);

export default function RouterWrapper() {
  return (
<Router history={window.g_history}>
      { renderRoutes(routes, {}) }
    </Router>
  );
}

import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import App from './components/App';
import FriendListApp from './containers/FriendListApp/FriendListApp';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={FriendListApp} />
  </Route>
);

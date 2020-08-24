import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';

import createStore from '../src/state/store';
import history from '../src/lib/history';
import Home from '../src/components/Home';
import '../src/styles/index.scss';
import * as serviceWorker from './serviceWorker';

const store = createStore();

ReactDOM.render(
  <Provider store={store}>
      <Router history={history}>
          <Switch>
              <Route component={Home} />
          </Switch>
      </Router>
  </Provider>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

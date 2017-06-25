import React, { Component } from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux'

import BundleReducer from './reducer/BundleReducer'

import Routing from './Routing'

import './App.css';

const history = createHistory()
const middleware = routerMiddleware(history)

const reducers = {
  title: (state = { value: 'BundleDungeon!' }) => state
}

const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer,
    bundles: BundleReducer
  }),
  applyMiddleware(middleware)
)

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Routing />
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;

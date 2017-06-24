import React from 'react';
import { AppRegistry } from 'react-vr'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createHistory from 'history/createMemoryHistory'
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux'
import { Switch, Route } from 'react-router-dom'

import { composeWithDevTools } from 'redux-devtools-extension'

import { bundleReducer } from './src/reducer/BundleReducer'

import { Main } from './src/Main'

const history = createHistory()

const middleware = routerMiddleware(history)

const reducers = {
  title: (state = { value: 'BundleDungeon!' }) => state,
  bundles: bundleReducer
}

const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  composeWithDevTools(applyMiddleware(middleware))
)

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Main />
      </Switch>
    </ConnectedRouter>
  </Provider>
)

AppRegistry.registerComponent('BundleDungeon', () => App);

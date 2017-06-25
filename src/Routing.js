import React from 'react'
import { Switch, Route } from 'react-router'

import MainVR from './MainVR'
import MainOverlay from './MainOverlay'

class Routing extends React.Component {

  render() {
    return (
      <Switch>
        <Route exact path='/' render={props => (
          <div>
            <MainVR />
            <MainOverlay />
          </div>
        )} />
      </Switch>
    )
  }

}

export default Routing

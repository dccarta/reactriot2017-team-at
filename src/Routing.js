import React from 'react'
import { Route } from 'react-router'

import MainVR from './MainVR'
import MainOverlay from './MainOverlay'

class Routing extends React.Component {

  render() {
    return (
      <div>
        <Route path='/' component={MainVR} />
        <Route path='/stats-overlay' component={MainOverlay} />
      </div>
    )
  }

}

export default Routing

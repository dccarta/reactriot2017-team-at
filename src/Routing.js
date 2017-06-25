import React from 'react'
import { Route } from 'react-router'

import MainVR from './component/vr/MainVR'
import MainOverlay from './component/overlay/MainOverlay'

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

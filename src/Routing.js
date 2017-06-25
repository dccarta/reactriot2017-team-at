import React from 'react'

import MainVR from './component/vr/MainVR'
import MainOverlay from './component/overlay/MainOverlay'
import OpenStatsFile from './component/open/OpenStatsFile'

class Routing extends React.Component {

  render() {
    return (
      <div>
        <OpenStatsFile />
        <MainOverlay />
        <MainVR />
      </div>
    )
  }

}

export default Routing

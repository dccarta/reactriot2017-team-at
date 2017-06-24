import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { View } from 'react-vr'

import BundleDungeon from './component/BundleDungeon'

export class Main extends React.Component {

  render() {
    return (
      <View>
        <Switch>
          <Route exact path='/' component={BundleDungeon} />
        </Switch>
      </View>
    )
  }

}

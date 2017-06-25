import React from 'react'
import 'aframe'
import { Entity } from 'aframe-react'

export default class BackgroundSwitcher extends React.Component {

  render() {
    const {selectedBackground} = this.props
    return getSkyEntity(selectedBackground)
  }
}

const getSkyEntity = (selectedBackground) => {
    if(selectedBackground === 'dungeon'){
        return <Entity primitive='a-sky' src='url(bundle-dungeon.png)' />
    }
    if(selectedBackground === 'jungle'){
        return <Entity primitive='a-sky' src='url(bundle-in-the-jungle.png)' />
    }
    return <Entity primitive='a-sky' src='url(cyber-bundle.png)' />
}

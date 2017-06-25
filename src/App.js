import React, { Component } from 'react';
import 'aframe';
import 'aframe-particle-system-component';
import { Entity, Scene } from 'aframe-react';

import './App.css';

class App extends React.Component {
  render () {
    return (
      <Scene>
        <Entity geometry={{ primitive: 'box' }} material={{ color: 'red' }} position={{ x: 0, y: 0, z: -5 }}/>
        <Entity particle-system={{ preset: 'snow' }}/>
        <Entity light={{ type: 'point' }}/>
        <Entity gltf-model={{ src: 'virtualcity.gltf' }}/>
        <Entity text={{ value: 'Hello, WebVR!' }}/>
      </Scene>
    );
  }
}

class Overlay extends React.Component {
  render () {
    return (
      <div>
        <App />
        <div>
          STATUS REPORT
        </div>
      </div>
    )
  }
}

export default Overlay;

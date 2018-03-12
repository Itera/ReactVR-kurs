import React from 'react'
import {View, NativeModules, DirectionalLight, AmbientLight} from 'react-vr'

import Intro3DModel from '../introduction/Intro3DModel.vr.js';
import ComponentGenerator from '../../helpers/ComponentGenerator';


export default class Game extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View>
        <Intro3DModel/>
      </View>
    );
  }
}

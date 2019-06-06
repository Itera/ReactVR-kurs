import React from 'react';
import {AppRegistry, asset, Pano, View} from 'react-vr';

import Intro3DModel from './components/introduction/Intro3DModel';
import Game from './components/game/Game';
import IntroText from './components/introduction/IntroText';
import IntroBox from './components/introduction/IntroBox';



export default class IteraGame extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('space.jpg')}/>
        <Intro3DModel/>
      </View>
    );
  }
};

AppRegistry.registerComponent('IteraGame', () => IteraGame);

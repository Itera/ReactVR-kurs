import React from 'react';
import {AppRegistry, asset, Pano, View} from 'react-vr';

import Intro3DModel from './components/introduction/Intro3DModel';
import Game from './components/game/Game';

export default class IteraGame extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('chess-world.jpg')}/>
      </View>
    );
  }
};

AppRegistry.registerComponent('IteraGame', () => IteraGame);

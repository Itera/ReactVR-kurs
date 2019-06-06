import React from 'react';
import {
    asset,
    Animated,
    Model
} from 'react-vr';

import { Easing } from 'react-native';
import { getRandomCoordinates } from '../../helpers/ComponentGenerator';

export default class Intro3DModel extends React.Component {
  constructor() {
    super();
    this.state = {
      spin: new Animated.Value(0)
    }};
    componentDidMount() {
      this.spinfunksjonen();
    }
    spinfunksjonen(){
      this.state.spin.setValue(0);
      Animated.timing(
        this.state.spin,
        {
         toValue: 1,
         duration: 100,
         easing: Easing.linear
        }
      ).start( () => this.spinfunksjonen());
    }
  render() {
    const AnimatedModel = Animated.createAnimatedComponent(Model);
    return (
      <AnimatedModel source = {{obj: asset('death-star.obj')}}
      texture = {asset('death-star.png')}
      wireframe = {false}
      style={{
        transform: [
            {translate: [2, 1.2, -1]}, {rotateY: this.state.spin.interpolate({
              inputRange: [0, 1],
              outputRange: ['0deg', '360deg']
          })}
            ]
        }} 
      />
    );
  }
};

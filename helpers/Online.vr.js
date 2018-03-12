import React from 'react';
import {
    asset,
    Model,
    Animated,
    VrButton
} from 'react-vr';

import AnimatedMath from 'react-native-animated-math';

import { Easing } from 'react-native';

import { getRandomCoordinates, getRandomNumber } from './ComponentGenerator';


export default class Online extends React.Component {

  constructor() {
    super();
    this.state = {
        spin: new Animated.Value(0),
        rotation: new Animated.Value(0),
        inclination: getRandomNumber(-10, 10),
        coordinates: getRandomCoordinates(-10, 10)
    };
  }

  onClick() {
    this.setState({
      coordinates: getRandomCoordinates(-10, 10)
    })
  }

  spinAnimation() {
    this.state.spin.setValue(0);
    Animated.loop(
      Animated.timing(
          this.state.spin,
          {
          toValue: 360,
          duration: 10000,
          easing: Easing.linear
        })
      ).start();
  }

  rotateAnimation() {
    toValues = [-2, 2];
    this.state.rotation.setValue(this.state.coordinates[0])
    Animated.loop(
      Animated.timing(
        this.state.rotation,
        {
        toValue: toValues[getRandomNumber(0, 1)] * Math.PI,
        easing: Easing.linear,
        duration: getRandomNumber(10000, 50000),
      })
    ).start();
  }

  componentDidMount() {
      this.spinAnimation();
      this.rotateAnimation();
  }

  render() {
    const AnimatedModel = Animated.createAnimatedComponent(Model);
    const { spin, rotation, inclination, coordinates } = this.state;
    return (
      <VrButton onClick={() => this.onClick()}>
        <AnimatedModel
          lit={false}
          source={{
            obj: asset('online.obj'),
            mtl: asset('online.mtl')
          }}
          style={{
            transform: [
              {translateX: Animated.multiply(AnimatedMath.sinus(rotation), coordinates[2])},
              {translateZ: Animated.multiply(AnimatedMath.cosinus(rotation), coordinates[2])},
              {translateY: Animated.multiply(AnimatedMath.sinus(rotation),
                  coordinates[2] * Math.sin(inclination)
                ),
              },
              {scale: 0.1},
              {rotateY: spin}
            ]
          }}
        />
      </VrButton>
    );
  }
};

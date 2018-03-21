import React from 'react';
import {
    asset,
    Sphere,
    Animated,
    VrButton
} from 'react-vr';

import AnimatedMath from 'react-native-animated-math';

import { Easing } from 'react-native';

import { getRandomCoordinates, getRandomNumber } from './ComponentGenerator';


export default class IteraDotOverI extends React.Component {

  constructor() {
    super();
    const dir = [-1, 1];
    this.state = {
        rotation: new Animated.Value(0),
        inclination: getRandomNumber(-10, 10),
        coordinates: getRandomCoordinates(-10, 10),
        direction: dir[getRandomNumber(0, 1)]
    };
  }

  rotateAnimation() {
    this.state.rotation.setValue(0)
      Animated.timing(
        this.state.rotation,
        {
        toValue: this.state.direction * 2 * Math.PI,
        easing: Easing.linear,
        duration: getRandomNumber(10000, 50000),
      }
    ).start(() => this.rotateAnimation());
  }

  componentDidMount() {
      this.rotateAnimation();
  }

  render() {
    const AnimatedSphere = Animated.createAnimatedComponent(Sphere);
    const { rotation, inclination, coordinates } = this.state;
    return (
      <VrButton>
        <AnimatedSphere
          lit={false}
          radius={0.1}
          heightSegments={20}
          widthSegments={20}
          style={{
            color: '#c32e29',
            transform: [
              {translateX: Animated.multiply(AnimatedMath.sinus(rotation), -1 * coordinates[2])},
              {translateZ: Animated.multiply(AnimatedMath.cosinus(rotation), coordinates[2])},
              {translateY: Animated.multiply(AnimatedMath.sinus(rotation),
                  coordinates[2] * Math.sin(inclination)
                ),
              }
            ]
          }}
        />
      </VrButton>
    );
  }
};

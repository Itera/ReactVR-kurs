import React from 'react';
import { View } from 'react-vr';
import IteraDotOverI from './IteraDotOverI';

export function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomCoordinate(min, max) {
  let randomCoordinate = 0
  // we want to avoid objects being placed too close to ourselves
  while (Math.abs(randomCoordinate) <= 3) {
    randomCoordinate = Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return randomCoordinate;
}

export function getRandomCoordinates(min, max) {
  const randomCoordinates = [0,0,0];
  randomCoordinates.forEach( (coor, i) => {
    randomCoordinates[i] = getRandomCoordinate(min, max);
  })
  return randomCoordinates;
}


export default class ComponentGenerator extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      components: this.generateComponents(this.props.numberOfComponents)
    }
  }

  generateComponents(num) {
    const components = [];
    for (var i = 0; i < num; i++) {
      const component = i%2 === 0 ? <IteraDotOverI/> : <IteraDotOverI/> // Could add your own object here
      components.push(component);
    }
    return components;
  }


  render() {
    return (
      <View>
        {this.state.components}
      </View>
    );
  }
}

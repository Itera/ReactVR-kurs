import React from 'react';
import {
  Box,
} from 'react-vr';

export default class IntroBox extends React.Component {
  render() {
    return (
      <Box
      dimWidth={4}
      dimHeight={3}
      dimDepth={2}
      wireframe = {true}
      style={{
        transform: [
            {translate: [2, 5, 10]}, {rotateZ: 45}
            ]
        }}

      >
        
      </Box>
    );
  }
};
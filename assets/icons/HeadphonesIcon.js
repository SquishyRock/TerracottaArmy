import React from 'react';
import { Image } from 'react-native';

export default class HeadphonesIcon extends React.Component {
  render() {
    return (
      <Image
        source={require('../images/headphones.png')}
        fadeDuration={0}
        style={{width: 20, height: 20}}
      />
    );
  }
}
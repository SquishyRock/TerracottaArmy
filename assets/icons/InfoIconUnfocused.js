import React from 'react';
import { Image } from 'react-native';

export default class InfoIconUnfocused extends React.Component {
  render() {
    return (
      <Image
        source={require('../images/info-icon-unfocused.png')}
        fadeDuration={0}
        style={{width: 20, height: 20}}
      />
    );
  }
}
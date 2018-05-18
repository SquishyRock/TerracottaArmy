import React from 'react';
import { Image } from 'react-native';

export default class SearchPaneIcon extends React.Component {
  render() {
    return (
      <Image
        source={require('../images/search-panel.png')}
        fadeDuration={0}
        style={{width: 20, height: 20}}
      />
    );
  }
}
import React from 'react';
import { Image } from 'react-native';

export default class SearchPanelIconUnfocused extends React.Component {
  render() {
    return (
      <Image
        source={require('../images/search-panel-unfocused.png')}
        fadeDuration={0}
        style={{width: 20, height: 20}}
      />
    );
  }
}
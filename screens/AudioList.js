import React from 'react';
import { Platform, StyleSheet, Text, View, TextInput, AppRegistry, FlatList } from 'react-native';

import AudioItem from './AudioItem';
import PropTypes from 'prop-types'

// FOR AUDIO ONLY

export default class AudioList extends React.Component {
  static propTypes = {
    objects : PropTypes.array.isRequired,
    findId: PropTypes.func.isRequired,
  }
  _keyExtractor = (item, index) => item.id;
  //Filter the full list into a filtered list for the FlatList to use as a data set
 
  render() {
    // Will render the whole list to start and will cut it down based on what user inputs into text field
    return (
      <View style={styles.main}>
        <FlatList
          data={this.props.objects} 
          keyExtractor={this._keyExtractor}
          renderItem={({item}) => <AudioItem object={item} findId={this.props.findId}/>} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  }
});
import React from 'react';
import { Platform, StyleSheet, Text, View, TextInput, AppRegistry, FlatList } from 'react-native';
import AudioItem from './AudioItem';
import PropTypes from 'prop-types'

// FOR AUDIO ONLY

export default class AudioList extends React.Component {
  static propTypes = {
    objects : PropTypes.array.isRequired,
    findId: PropTypes.func.isRequired,
    songIndex: PropTypes.number.isRequired,
  }
  _keyExtractor = (item, index) => item.id;

  render() {
    return (
      <View style={styles.main}>
        <FlatList
          data={this.props.objects} 
          keyExtractor={this._keyExtractor}
          renderItem={({item, index}) => <AudioItem object={item} findId={this.props.findId} listIndex={index} songIndex={this.props.songIndex}/>} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  }
});
import React from 'react';
import { Platform, StyleSheet, Text, View, TextInput, FlatList } from 'react-native';
import ObjectItem from './ObjectItem';
import PropTypes from 'prop-types'

// FOR PANEL DISPLAY ONLY

export default class ObjectList extends React.Component {
  static propTypes = {
    objects: PropTypes.array.isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
      }).isRequired,
  }
  _keyExtractor = (item, index) => item.id;

  render() {
    return (
      <View style={styles.main}>
        <FlatList
          data={this.props.objects}
          keyExtractor={this._keyExtractor}
          renderItem={({ item }) => <ObjectItem object={item} navigation={this.props.navigation} />} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});
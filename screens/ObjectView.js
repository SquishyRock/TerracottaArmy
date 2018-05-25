import React from 'react';
import { Platform, TouchableOpacity, StyleSheet, Text, View, BackHandler } from 'react-native';
import { NavigationActions } from 'react-navigation'
import PictureView from './PictureView';
import PropTypes from 'prop-types';

export default class ObjectView extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    const { params } = this.props.navigation.state;
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <PictureView object={params.singleItem} navigation={this.props.navigation}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? '5%' : 10,
   
    margin: 10,
    marginBottom: 0,
   
  },
  content: {
    flex: 1,
    flexGrow: 19
  },
  back: {
    flex: 1,
    flexGrow: 1
  },
});
import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';


export default class ObjectItem extends React.Component {
  static propTypes = {
    object : PropTypes.object.isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
      }).isRequired,
  }
  handlePress = () => {
    this.props.navigation.navigate('Item', {
      singleItem: this.props.object
    })
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <TouchableOpacity 
      onPress={this.handlePress}>
        <View style={styles.info}>
        <View style={styles.objectTitles}>
          <Text style={styles.title}>{this.props.object.id.toUpperCase()}</Text>
          <Text style={styles.class}>{(this.props.object.id.charAt(0) == 'o') ? 'Object Panel' : 'Gallery Panel'} </Text>
          </View>
          <View style={styles.footer}>
            <Text style={styles.cause}>{this.props.object.name.toUpperCase()}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  deal: {
  },
  info: {
    backgroundColor: '#e2ddc5',
    borderColor: 'black',
    borderWidth: .5,
    
    flex: 1,
    marginLeft: '8%',
    marginRight: '8%',
    marginTop: '2%',
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 4,
    paddingBottom: 4,
  
  },
  title: {
    fontSize: 30,
  },
  footer: {
    flexDirection: 'row',
  },
  cause: {
    flex: 2,
   
  },
  objectTitles: {
    overflow: 'hidden',
    flexDirection: 'row',
    justifyContent: 'space-between'

  },
  class: {
    fontSize: 11,
    marginTop: 3,
  }
});
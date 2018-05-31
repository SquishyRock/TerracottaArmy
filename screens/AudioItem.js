import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';


export default class AudioItem extends React.Component {
  static propTypes = {
    object : PropTypes.object.isRequired,
    findId: PropTypes.func.isRequired,
    songIndex: PropTypes.number.isRequired,
  }
  
  handlePress = () => {
    this.props.findId(this.props.object.id) 
  }

  render() {
    return (
      <TouchableOpacity 
      onPress={this.handlePress}>
        <View style={(this.props.listIndex == this.props.songIndex) ? styles.info : styles.info1}>
        <View style={styles.objectTitles}>
        <Image
              style={{
                width: '60%',
                height: '60%',
                flex: 1,
                marginTop: '4.5%',
               

              }}
              resizeMode="contain"
              source={require("../assets/images/audio-play.png")}
            />
            <View  style={{
             flex: 3,
             marginLeft:"-3%",
            
            }}>
          <Text  style={(this.props.listIndex == this.props.songIndex) ? styles.id : styles.id1}>
          {this.props.object.id.toUpperCase()} </Text>
          <Text   style={(this.props.listIndex == this.props.songIndex) ? styles.name : styles.name1}>
         {this.props.object.name.toUpperCase()}</Text>
          </View>
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
    backgroundColor: 'black',
    borderColor: 'black',
    borderWidth: .5,
    flex: 1,
    marginLeft: '8%',
    marginRight: '8%',
    marginTop: '2%', 
    paddingBottom: 4,
  },
  info1: {
    backgroundColor: '#e2ddc5',
    borderColor: 'black',
    borderWidth: .5,
    flex: 1,
    marginLeft: '8%',
    marginRight: '8%',
    marginTop: '2%', 
    paddingBottom: 4,
  },
  id: {
    fontSize: 30,
    marginBottom: 4,
    flex: 5, 
    color: 'white',
  },
  id1: {
    fontSize: 30,
    marginBottom: 4,
    flex: 5, 
   
  },
  footer: {
    flexDirection: 'row',
  },
  name: {
    flex: 1,
    paddingBottom: 2,
    color: 'white',
  },
  name1: {
    flex: 1,
    paddingBottom: 2,
  
  },
  price: {
    flex: 1,
    textAlign: 'right',
  },
  objectTitles: {
    overflow: 'hidden',
    flexDirection: 'row',
  },
});
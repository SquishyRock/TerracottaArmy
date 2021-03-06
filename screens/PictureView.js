import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Platform } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation'
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import { contentEn, contentIl } from '../assets/content';

@translate(['pictureView', 'panels'], { wait: true })
export default class PictureView extends React.Component {
  static propTypes = {
    object: PropTypes.object.isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  }
  constructor(props) {
    super(props)
    this.state = {
      content: contentEn
    }
    this.getLocale = this.getLocale.bind(this);
    this.findId = this.findId.bind(this);
    this._advanceIndex = this._advanceIndex.bind(this);
  }


  componentWillMount() {
    this.getLocale()
  }
  getLocale = () => {
    const locale = this.props.i18n.language
    const localeStr = locale.substring(0, 2);
    if (localeStr == 'il') {
      this.setState({
        content: contentIl
      })
    }
    else {
      this.setState({
        content: contentEn
      })
    }
  }

  findId(id) {
    const newIndex = this.state.content.findIndex(
      (object) => object.id == id
    );
    return newIndex;
  }

  _advanceIndex(up, id) {
    let index = this.findId(id)
    index =
      (index + (up ? 1 : this.state.content.length - 1)) %
      this.state.content.length;
    const resetAction = StackActions.reset({
      index: 1,  // it means change state to C which can goBack to previousView A
      actions: [
        NavigationActions.navigate({ routeName: 'SearchP' }),
        NavigationActions.navigate({ routeName: 'Item', params: { singleItem: this.state.content[index] } }),
      ]
    })
    this.props.navigation.dispatch(resetAction);
  }

  render() {
    const { params } = this.props.navigation.state;
    return (
      <View style={styles.mainContainer}>
        <View style={styles.backgroundColor}>
          <View style={styles.headerContainer}>
            <TouchableOpacity
            style={styles.backButton}
              onPress={() => this.props.navigation.goBack()}>
              <Image
              style={styles.backButtonImage}
                resizeMode="contain"
                source={require("../assets/images/arrow-left.png")}
              />
            </TouchableOpacity>
            <Text style={styles.objectNumber}>{this.props.object.id.toUpperCase()}</Text>
          </View>
          <View style={styles.objectNameContainer}>
            <Text style={styles.objectName}>{this.props.object.name}</Text>
          </View>
        </View>
        <View 
        style={styles.navContainer}>
          <TouchableOpacity style={styles.navLeft} onPress={() => this._advanceIndex(false, params.singleItem.id)}>
            <Text style={styles.leftText}> Previous </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navRight} onPress={() => this._advanceIndex(true, params.singleItem.id)}>
            <Text style={styles.rightText}> Next </Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.container} >
          <Text style={styles.containerText}>
            {this.props.object.text}
          </Text>
          {this.props.object.id.charAt(0) === 'o' ? <Image style={styles.image} source={this.props.object.media} /> : <Text> </Text>}
          <View style={styles.links}>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  image: {
    flex: 1,
    width: null,
    height: 220,
    resizeMode: 'contain',
    marginBottom: 15,
  },
  objectName: {
    fontSize: Platform.OS === 'ios' ? 25 : 30,
  
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  objectNameContainer: {
     width: '90%',
    marginLeft: '5%',
     marginBottom: 36, 
  },
  container: {
    marginTop: 0,
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 0
  },
  navRight: {
    backgroundColor: '#3e3f3f',
    width: 100,
    height: 50,
    borderBottomRightRadius: 30,
    borderTopRightRadius: 30,
  },
  navLeft: {
    backgroundColor: '#252627',
    width: 100,
    height: 50,
    borderBottomLeftRadius: 30,
    borderTopLeftRadius: 30,
  },
  rightText: {
    color: 'white',
    marginTop: 15,
    marginLeft: 15,
  },
  leftText: {
    color: 'white',
    textAlign: 'right',
    marginRight: 15,
    marginTop: 15,
  },
  containerText: {
    fontSize: 19,
    marginBottom: '5%',
  },
  objectNumber: {
    flex: 1,
    textAlign: 'right',
    fontSize: 22,
    letterSpacing: 1,
    marginRight: '10%',
    zIndex: 400,
  },
  backgroundColor:{
    backgroundColor: '#e2ddc5',
  },
  headerContainer:{
    marginTop: Platform.OS === 'ios' ? 5 : 11,
    marginBottom: Platform.OS === 'ios' ? '4%' : '6%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  backButton:{
    zIndex: 400,
    width: '70%',
    height: 30,
    marginLeft: 10,
    flex: 1,
  },
  backButtonImage:{
    width: '50%',
    height: '100%',
  },
  navContainer:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 0,
    top: '-7%',
  },

});
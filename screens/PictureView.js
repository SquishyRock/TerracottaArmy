import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
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
      <View style={{ flex: 1, }}>
        <View style={{ backgroundColor: '#e2ddc5', }}>

          <View
            style={{
              flex: 1,
              marginBottom: '15%',
              marginTop: 20,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start'
            }}>
            <TouchableOpacity
              style={{
                zIndex: 400,
                width: '70%',
                height: 30,
                marginLeft: 10,
                flex: 1,
              }}
              onPress={() => this.props.navigation.goBack()}>
              <Image
                style={{
                  width: '50%',
                  height: '100%',
                }}
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
        <View style={{
          // flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 0,
          top: '-7%',
        }}>
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
  container: {
    flex: 1
  },
  image: {
    flex: 1,
    width: null,
    height: 220,
    resizeMode: 'contain'
  },
  // title: {
  //   fontSize: 16,
  //   padding: 10,
  //   fontWeight: 'bold',
  //   backgroundColor: 'rgba(237, 149, 45, 0.4)',
  // },
  // links: {
  //   flex: 1,
  //   flexDirection: 'row'
  // },
  // facebookButton: {
  //   marginTop: 0,
  //   backgroundColor:'white',
  //   padding:6,
  //   width: 200,
  //   flex: 1,
  //   marginBottom: 20,
  //  },
  objectName: {
    fontSize: 33,
  },
  objectNameContainer: {
    width: '80%',
    marginLeft: '5%',
    marginTop: '4%',
    marginBottom: '12%',
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
    flex: 2,
    textAlign: 'right',
    fontSize: 17,
    letterSpacing: 1,
    marginRight: 10,
  }
});
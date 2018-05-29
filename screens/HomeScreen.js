import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  Icon,
  Picker
} from 'react-native';
import { translate } from 'react-i18next';
import { MonoText } from '../components/StyledText';

// Enable fallbacks if you want `en-US` and `en-GB` to fallback to `en`
@translate(['homeScreen', 'home'], { wait: true })
export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
    tabBarVisible: false,
  };
  constructor(props) {
    super(props)
    this.state = {
      lang: ''
    }
    this.getLocale = this.getLocale.bind(this)
    this._changeLang = this._changeLang.bind(this)
  }


  componentWillMount() {
    this.getLocale()
  }

  componentWillReceiveProps() {
    this.getLocale()
  }
  
  getLocale = () => {
    const locale = this.props.i18n.language
    const localeStr = locale.substring(0, 2);
    this.setState({
      lang: localeStr
    })
  }

  _changeLang(item) {
    this.props.i18n.changeLanguage(item)
    this.getLocale()
  }

  render() {
    const { t, i18n } = this.props;
    return (
      <View style={styles.container}>
        <Image
          style={{
            alignSelf: 'center',
            height: '30%',
            width: '90%'
          }}
          resizeMode="contain"
          source={require("../assets/images/terracotta-title.png")}
        />
       <View style={styles.flags} >
        <TouchableOpacity
          style={this.state.lang === 'en' ? styles.activeFlag : styles.inactiveFlag}
          onPress={() => { this._changeLang('en') }}
        >
          <Text> English
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={this.state.lang === 'il' ? styles.activeFlag : styles.inactiveFlag}
          onPress={() => { this._changeLang('il') }}
        >
          <Text> Italian
          </Text>
        </TouchableOpacity>
        </View>
        <Image
          style={{

            height: '50%',
            width: '100%',
            position: 'absolute',
            bottom: 0,
            left: '-12%',
            zIndex: -100,

          }}
          resizeMode="contain"
          source={require("../assets/images/homeScreen-artwork.png")}
        />
        <TouchableOpacity onPress={() => this.props.navigation.navigate('AudioStack')}
          style={{
            alignSelf: 'center',
            backgroundColor: 'white',
            padding: 10,
            position: 'absolute',
            top: '40%',
            marginRight: 40,
            marginLeft: 40,
            marginTop: 10,
            paddingTop: 20,
            paddingBottom: 20,
            borderRadius: 10,
            borderWidth: 1,
            overflow: 'hidden',
            borderColor: 'white',
            width: Platform.OS === 'ios' ? '68%' : '60%',
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start'
          }}>
          <Image
            style={{
              width: '100%',
              height: '100%',
              flex: 1,
              paddingRight: '5%',

            }}
            resizeMode="contain"
            source={require("../assets/images/headphones.png")}
          />
          <Text
            style={{
              flex: 3,
              fontSize: 15,

            }}>{t('home:audioButton')}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('PanelStack')}
          style={{
            alignSelf: 'center',
            backgroundColor: 'white',
            padding: 10,
            position: 'absolute',
            zIndex: 4,
            top: '52.5%',
            marginRight: 40,
            marginLeft: 40,
            marginTop: 10,
            paddingTop: 20,
            paddingBottom: 20,

            borderRadius: 10,
            borderWidth: 1,
            overflow: 'hidden',
            borderColor: 'white',
            width: Platform.OS === 'ios' ? '68%' : '60%',
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around'

          }}>
          <Image
            style={{
              width: '100%',
              height: '100%',
              flex: 1,
              paddingRight: '5%',

            }}
            resizeMode="contain"
            source={require("../assets/images/search-panel.png")}
          />
          <Text
            style={{
              flex: 3,
              fontSize: 13,
              alignItems: 'center',

            }}>{t('home:panelsButton')}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('InfoStack')}
          style={{
            alignSelf: 'center',
            backgroundColor: 'white',
            padding: 10,
            position: 'absolute',
            zIndex: 4,
            top: '65%',
            marginRight: 40,
            marginLeft: 40,
            marginTop: 10,
            paddingTop: 20,
            paddingBottom: 20,

            borderRadius: 10,
            borderWidth: 1,
            overflow: 'hidden',
            borderColor: 'white',
            width: Platform.OS === 'ios' ? '68%' : '60%',
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start'


          }}>
          <Image
            style={{
              width: '100%',
              height: '100%',
              flex: 1,
              paddingRight: '5%',

            }}
            resizeMode="contain"
            source={require("../assets/images/info-icon.png")}
          />
          <Text
            style={{
              flex: 3,
              fontSize: 13,


            }}>{t('home:infoButton')}</Text>
        </TouchableOpacity>


      </View>
    );
  }
}
// const styles = StyleSheet.create({
//   height: Platform.OS === 'ios' ? 200 : 100,
// });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: '#e2ddc5',
    margin: 10,
    marginTop: Platform.OS === 'ios' ? '5%' : 10,
  },
  activeFlag: {


    padding: 3,
    backgroundColor: 'white',
    
  },
  inactiveFlag: {
    padding: 3,
 
 
  },
  flags: {
            flexDirection: 'row',
            alignItems: 'center',
          
  }
});

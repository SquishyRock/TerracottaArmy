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

} from 'react-native';
import { WebBrowser } from 'expo';
import { translate } from 'react-i18next';
import { MonoText } from '../components/StyledText';

// Enable fallbacks if you want `en-US` and `en-GB` to fallback to `en`
@translate(['homeScreen', 'common'], { wait: true })
export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
    tabBarVisible: false,
  };

  render() {
    const { t, i18n } = this.props;

    return (
      <View style={styles.container}>
            <Button
          onPress={() => { i18n.changeLanguage('en') }}
          title={'To English'}
        />
        <Button
          onPress={() => { i18n.changeLanguage('il') }}
          title={'To Italian'}
        />
            <Image
              style={{
                alignSelf: 'center',
                height: '30%',
                width: '90%'
              }}
              resizeMode="contain"
              source={require("../assets/images/terracotta-title.png")}
            />
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



      <TouchableOpacity onPress={()=> this.props.navigation.navigate('AudioStack')}
        style={{
          alignSelf: 'center',
          backgroundColor: 'white',
          padding: 10,
          position: 'absolute',
          top: '30%',
          marginRight:40,
          marginLeft:40,
          marginTop:10,
          paddingTop:20,
          paddingBottom:20,
          borderRadius:10,
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
       
        }}>{t('home:title')}</Text>
      </TouchableOpacity>  
      <TouchableOpacity onPress={()=>this.props.navigation.navigate('PanelStack')}
      style={{
        alignSelf: 'center',
        backgroundColor: 'white',
        padding: 10,
        position: 'absolute',
        zIndex: 4,
        top: '42.5%',
        marginRight:40,
        marginLeft:40,
        marginTop:10,
        paddingTop:20,
        paddingBottom:20,
     
        borderRadius:10,
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
       
        }}>DESCRIPTION PANELS</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> this.props.navigation.navigate('InfoStack')}
      style={{
        alignSelf: 'center',
        backgroundColor: 'white',
        padding: 10,
        position: 'absolute',
        zIndex: 4,
        top: '55%',
        marginRight:40,
        marginLeft:40,
        marginTop:10,
        paddingTop:20,
        paddingBottom:20,
     
        borderRadius:10,
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
        
       
        }}>EXHIBIT INFORMATION</Text>
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
});

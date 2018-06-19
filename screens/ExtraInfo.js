import React from 'react';
import { Platform, StyleSheet, Text, View, Linking, Image, ScrollView, TouchableOpacity } from 'react-native';
import { translate } from 'react-i18next';

@translate(['extraInfo', 'info'], { wait: true })
export default class ExtraInfo extends React.Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);
    this.openWebpage = this.openWebpage.bind(this);
    this.openFacebook = this.openFacebook.bind(this);
    this.openMaps = this.openMaps.bind(this);
  }
  openWebpage = () => {
    Linking.openURL('https://www.esercitoditerracotta.it/') // Italian Website
    // Linking.openURL('http://www.expo-terracotta.be/exhibition/') // Website basic 
  }

  openFacebook = () => {
    Linking.openURL('https://www.facebook.com/esercitoditerracottamostra/')

  }
  openMaps = () => {
    Linking.openURL('https://www.google.com/maps/dir/?api=1&destination=Napoli+Italy&destination_place_id=ChIJb1xbE1sIOxMR57HUCHFGx2A') // id = ChIJgUyX7dOo3EcRWrCm4t_jSP0
    // Linking.openURL('https://www.google.com/maps/dir/?api=1&destination=Oostende+Belgium&destination_place_id=ChIJgUyX7dOo3EcRWrCm4t_jSP0') // - Oostend Belgium
    // Linking.openURL('http://maps.google.com/maps?daddr=51.231598,2.912937') // https://developers.google.com/maps/documentation/urls/guide
  }

  render() {
    const { t, i18n } = this.props;
    return (
      <ScrollView style={styles.info}>
        <View style={styles.titleSpacing}>

          <Text style={styles.title}>{t('info:title1')}</Text>
          <Text style={styles.titleItalian}>{t('info:title2')}</Text>
          {/* <Text style={styles.title}>INFO</Text> */}


          <Image style={styles.faceImage}
            resizeMode="contain"
            source={require("../assets/images/face.png")}
          />
               <TouchableOpacity
            onPress={this.openWebpage}
            style={styles.websiteButton}>
              <Text style={styles.website}>{t('info:website')}</Text>
          </TouchableOpacity>

          <Image style={styles.titleImage}
            resizeMode="contain"
            source={t('info:file')} 
          />

          <View style={styles.aboutText}>

            <Text style={styles.paragraphSpace}>{t('info:info1')}</Text>
            <Text>{t('info:info2')}</Text>
          </View>
        </View>
        <View style={styles.mapContainer} >
          <Text style={styles.location}>{t('info:location')}</Text>
          <Image style={styles.mapImage}
            resizeMode="contain"
            source={require("../assets/images/map.png")}
          />
          <TouchableOpacity onPress={this.openMaps} style={styles.directions}>
            <Text style={styles.directionsText}>
            {t('info:direction')}
            </Text>
          </TouchableOpacity >
        </View>
        <View style={styles.facebookContainer}>
          <TouchableOpacity
            onPress={this.openFacebook} style={styles.facebookButton}>
            <Text style={styles.facebookButtonText}>{t('info:facebook')}</Text>
          </TouchableOpacity>
     
        </View>
      </ScrollView >
    );
  }
}

const styles = StyleSheet.create({
  info: {
    flex: 1,
    backgroundColor: '#e2ddc5',

    marginLeft: 10,
    marginRight: 10,
    paddingBottom: 20,
    marginTop: Platform.OS === 'ios' ? '5%' : 10,
  },
  mapPin: {
    backgroundColor: "rgba(196, 154, 56, 0.5)"
  },
  titleSpacing: {
    flex: 1,
    margin: '5%',
  },
  button: {
    flex: 1,
  },
  map: {
    flexGrow: 2,
    flex: 1,
  },
  title: {
    fontSize: 30,
    letterSpacing: 2,
    margin: 0,
    padding: 0,
    
  },
  titleItalian: {
    fontSize: 30,
    letterSpacing: 2,
    marginBottom: 20,
    padding: 0,
 
  },
  customView: {
    width: 140,
    height: 100,
  },
  paragraphSpace: {
    marginBottom: 10,
  },
  website: {
    
    flex: 1,
    fontSize: 13,
    marginRight: 3,
    letterSpacing: 3,
    color: 'white',
    backgroundColor: 'black',
    padding: 13,
  },
  location: {
    fontSize: 15,
    letterSpacing: 2,
    marginBottom: 4,
    marginTop: 16,

  },
  directions: {
    marginTop: 0,
    backgroundColor: 'black',
    padding: 6,
    width: '90%',
    flex: 1,
    marginBottom: 20,
  
    

  },
  directionsText: {
    color: 'white',
    fontSize: 16,
    letterSpacing: 1,
    textAlign: 'center',

  },

  facebookButton: {
    marginTop: 0,
    backgroundColor: 'white',
    padding: 6,
    width: 200,
    flex: 1,
    marginBottom: 20,
   
 

  },
  facebookButtonText: {
    fontSize: 14,
    letterSpacing: 1,
    textAlign: 'center',

  },
  faceImage: {
    alignSelf: 'center',
    width: '90%',
     height: Platform.OS === 'ios' ? 120 : 145, 
     marginBottom: 12,
  },
  websiteButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  titleImage:{
    alignSelf: 'center',
    height: '25%',
    width: '70%',
    marginBottom: 0,
  },
  mapContainer:{
      flex: 1,
       alignItems: 'center',
      justifyContent: 'center',
       marginTop: 120
  },
  mapImage:{
    width: '90%',
     height: Platform.OS === 'ios' ? 250 : 275, 
     flex: 1,
  },
  facebookContainer:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },




});
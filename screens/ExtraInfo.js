import React from 'react';
import { Platform, StyleSheet, Text, View, Button, Linking, Dimensions, Image, ScrollView, TouchableHighlight, TouchableOpacity } from 'react-native';
import { MapView } from 'expo';
import DirectionsCallout from './DirectionsCallout'

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 51.231598;
const LONGITUDE = 2.912937;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const SPACE = 0.01;

const mapTitle = <TouchableOpacity onPress={this.openMaps}>
  <Text>
    Directions
  </Text>
</TouchableOpacity >;

export default class ExtraInfo extends React.Component {
  static navigationOptions = {
    header: null,
  };
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
    return (
      <ScrollView style={styles.info}>
        <View style={styles.titleSpacing}>

          <Text style={styles.title}>EXHIBIT</Text>
          <Text style={styles.title}>INFO</Text>
          {/* <Text style={styles.title}>INFO</Text> */}


          <Image
            style={{
          
              // width: Platform.OS === 'ios' ? '80%' : '100%',
                
             
              top: Platform.OS === 'ios' ? '-10%' : '-15%',
              right: Platform.OS === 'ios' ? '-35%' : '-25%',
              // zIndex: -100,
              // marginBottom: 0,
              // paddingBottom:0,
              width: '90%',
               height: Platform.OS === 'ios' ? 200 : 225,
                 flex: 1,



            }}
            resizeMode="contain"
            source={require("../assets/images/face.png")}
          />
               <TouchableOpacity
            onPress={this.openWebpage}
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              top:  '-10%',
            }}>
          
              <Text style={styles.website}>VISIT THE WEBSITE</Text>
             
          </TouchableOpacity>
          <Image
            style={{
              alignSelf: 'center',
              height: '20%',
              width: '70%',
              marginTop: '10%',
              marginBottom: '2%',
              top:  '-15%',
            }}
            resizeMode="contain"
            source={require("../assets/images/terracotta-title.png")}
          />

          <View style={styles.aboutText}>

            <Text style={styles.paragraphSpace}>The Terracotta Army and The First Emperor of China;
              The Exhibition is an extraordinary voyage in Ancient China of
              2,200 years ago. It is the most complete exhibition ever created
              on the Terracotta Army, the necropolis and life of the First Emperor.
              In an incredible staging, this exhibition brings together more than
              300 life size reproductions of statues, chariots, weapons and objects
              from the daily life of the Emperor Qin Shi Huangdi, such as they were
              discovered in the pits.</Text>
            <Text>This immersion in the heart of the necropolis is intended for a
              broad audience. Over more than 1,800 m², the exhibition addresses
              numerous topics such as the history of the First Emperor, his army
              and military conquests, his empire and the creation process of the
              Terracotta Army soldiers.</Text>
          </View>
        </View>
        <View style={{
          flex: 1, alignItems: 'center',
          justifyContent: 'center', marginTop: 120
        }} >
          <Text style={styles.location}>WE ARE LOCATED:</Text>
          <Image
            style={{ width: '90%', height: Platform.OS === 'ios' ? 250 : 275,  flex: 1, top: '-15%' }}
            resizeMode="contain"
            source={require("../assets/images/map.png")}
          />
          <TouchableOpacity onPress={this.openMaps} style={styles.directions}>
            <Text style={styles.directionsText}>
              Directions
            </Text>
          </TouchableOpacity >
        </View>
        <View
          style={{
            flex: 1, alignItems: 'center',
            justifyContent: 'center',
            top: '-3%',
          }}>
          <TouchableOpacity
            onPress={this.openFacebook} style={styles.facebookButton}>
            <Text style={styles.facebookButtonText}>Visit us on Facebook</Text>
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
  customView: {
    width: 140,
    height: 100,
  },
  paragraphSpace: {
    marginBottom: 10,
  },
  aboutText: {
    top: "-17%",
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
    top: '-15%'

  },
  directions: {
    marginTop: 0,
    backgroundColor: 'black',
    padding: 6,
    width: '90%',
    flex: 1,
    marginBottom: 20,
    top: '-15%',
    

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

});
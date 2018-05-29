import React from 'react';
import { Platform, Text } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

//Screens
// import AudioPlayer from '../screens/AudioPlayer';
import AudioPlayerRebuild from '../screens/AudioPlayerRebuild';
import ExtraInfo from '../screens/ExtraInfo';
import HomeScreen from '../screens/HomeScreen';
import ObjectView from '../screens/ObjectView';
import PanelSearch from '../screens/PanelSearch';

//Icons
import HomeIcon from '../assets/icons/HomeIcon';
import InfoIcon from '../assets/icons/InfoIcon';
import SearchPanelIcon from '../assets/icons/SearchPanelIcon';
import HeadphonesIcon from '../assets/icons/HeadphonesIcon';

import { translate } from 'react-i18next';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});


const AudioStack = createStackNavigator({
  SearchA: AudioPlayerRebuild,
});


const PanelStack = createStackNavigator({
  SearchP: PanelSearch,
  Item: ObjectView
});


const InfoStack = createStackNavigator({
  Info: ExtraInfo,
});


export default createBottomTabNavigator({
  Home: HomeStack,
  Audio: AudioStack,
  Panel: PanelStack,
  Info: InfoStack,
},
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-home${focused ? '' : '-outline'}`;
        } else if (routeName === 'Audio') {
          iconName = `ios-headset${focused ? '' : '-outline'}`;
        } else if (routeName === 'Panel') {
          iconName = `ios-search${focused ? '' : '-outline'}`;
        } else if (routeName === 'Info') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        }
        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      showLabel: false,
      showIcon: true,
      activeTintColor: 'grey',
      inactiveTintColor: 'black',
    },
    style: {
      backgroundColor: 'blue',
    },
  }
);

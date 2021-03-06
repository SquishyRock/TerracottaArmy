import React from 'react';
import { Platform, Text } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon';

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
import InfoIconUnfocused from '../assets/icons/InfoIconUnfocused';
import SearchPanelIconUnfocused from '../assets/icons/SearchPanelIconUnfocused';
import HeadphonesIconUnfocused from '../assets/icons/HeadphonesIconUnfocused';

import { translate } from 'react-i18next';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarVisible: false,
}


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
        if (routeName === 'Home') {
          return <HomeIcon />
        } else if (routeName === 'Audio') {
          return (focused) ? <HeadphonesIcon /> : <HeadphonesIconUnfocused />
        } else if (routeName === 'Panel') {
          return (focused) ? <SearchPanelIcon /> : <SearchPanelIconUnfocused />
        } else if (routeName === 'Info') {
          return (focused) ? <InfoIcon /> : <InfoIconUnfocused />
        }
      },
    }),
    tabBarOptions: {
      showLabel: false,
      showIcon: true,
    },
    style: {
      backgroundColor: 'blue',
    },
  }
);

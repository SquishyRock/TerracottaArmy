import React from 'react';
import { Platform, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';

import Colors from '../constants/Colors';

//Screens
import AudioPlayer from '../screens/AudioPlayer';
import ExtraInfo from '../screens/ExtraInfo';
import HomeScreen from '../screens/HomeScreen';
import ObjectView from '../screens/ObjectView';
import PanelSearch from '../screens/PanelSearch';

//Icons
import HomeIcon from '../assets/icons/HomeIcon';
import InfoIcon from '../assets/icons/InfoIcon';
import SearchPanelIcon from '../assets/icons/SearchPanelIcon';
import HeadphonesIcon from '../assets/icons/HeadphonesIcon';

const TabBarLabel = ({ tintColor, focused, label }) => (
  <Text
    style={{
      color: (focused) ? 'black' : 'gray',
      fontWeight: (focused) ? 'bold' : 'normal',
      fontSize: 11,
      paddingTop: 2,
      textAlign: 'center',
    }}
  >
    {label}
  </Text>
);

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: (props) => <TabBarLabel label='Home' {...props} />,
  tabBarIcon: ({ tintColor }) => <HomeIcon />
};

const AudioStack = createStackNavigator({
  SearchA: AudioPlayer,
});

AudioStack.navigationOptions = {
  tabBarLabel: (props) => <TabBarLabel label='Audio' {...props} />,
  tabBarIcon: ({ tintColor }) => <HeadphonesIcon />
};

const PanelStack = createStackNavigator({
  SearchP: PanelSearch,
  Item: ObjectView
});

PanelStack.navigationOptions = {
  tabBarLabel: (props) => <TabBarLabel label='Panels' {...props} />,
  tabBarIcon: ({ tintColor }) => <SearchPanelIcon />
};

const InfoStack = createStackNavigator({
  Info: ExtraInfo,
});

InfoStack.navigationOptions = {
  tabBarLabel: (props) => <TabBarLabel label='Info' {...props} />,
  tabBarIcon: ({ tintColor }) => <InfoIcon />
};

export default createBottomTabNavigator({
  HomeStack,
  AudioStack,
  PanelStack,
  InfoStack,
});

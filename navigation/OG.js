import React from 'react';
import { Platform, Text } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon';
import Colors from '../constants/Colors';

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
  tabBarVisible: false,
  tabBarLabel: (props) => <TabBarLabel label='Home' {...props} />,
  tabBarIcon: ({ focused, tintColor }) => <HomeIcon />
};

const AudioStack = createStackNavigator({
  SearchA: AudioPlayerRebuild,
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

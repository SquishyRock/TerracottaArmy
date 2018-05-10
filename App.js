import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { I18nextProvider, translate } from 'react-i18next';
import i18n from './assets/i18n';
import RootNavigation from './navigation/RootNavigation';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

//  


// Wrapping a stack with translation hoc asserts we trigger new render on language change
// the hoc is set to only trigger rerender on languageChanged
const WrappedStack = () => {
  return <RootNavigation screenProps={{ t: i18n.getFixedT() }} />;
}
const ReloadAppOnLanguageChange = translate('translation', {
  bindI18n: 'languageChanged',
  bindStore: false
})(WrappedStack);

// The entry point using a react navigation stack navigation
// gets wrapped by the I18nextProvider enabling using translations
// https://github.com/i18next/react-i18next#i18nextprovider
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <I18nextProvider i18n={i18n}>
          <ReloadAppOnLanguageChange />
        </I18nextProvider>
      </View>
    );
  }
}
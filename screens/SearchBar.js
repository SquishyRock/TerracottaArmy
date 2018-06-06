import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, AppRegistry } from 'react-native';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';


@translate(['searchBar', 'audio'], { wait: true })
export default class SearchBar extends React.Component {
  static propTypes = {
    handleTextInput: PropTypes.func.isRequired
  }
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    }
  }

  handleChange = (searchTerm) => {
    this.setState({
      text: searchTerm
    }, () => {
      this.props.handleTextInput(this.state.text);
    });
  };

  render() {
    const { t, i18n } = this.props;
    return (
      <TextInput style={styles.searchBar}
        underlineColorAndroid='rgba(0,0,0,0)'
        placeholder={t('audio:searchFill')}
        onChangeText={this.handleChange}
      />
    );
  }
}

const styles = StyleSheet.create({
  searchBar: {
    fontSize: 20,
    padding: 10,
   
  },
});


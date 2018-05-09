import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, AppRegistry } from 'react-native';
import PropTypes from 'prop-types';

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
    return (
      <TextInput style={styles.searchBar}
        underlineColorAndroid='rgba(0,0,0,0)'
        placeholder='Enter Number'
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


AppRegistry.registerComponent('SearchBar', () => SearchBar);
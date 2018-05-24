import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform
} from 'react-native';

import SearchBar from './SearchBar';
import AudioList from './AudioList';
import PropTypes from 'prop-types';
import { WebBrowser } from 'expo';
import { translate } from 'react-i18next';

import { MonoText } from '../components/StyledText';

@translate(['fullAudioPlayer', 'audio'], { wait: true })
export default class FullAudioPlayer extends React.Component {
  static propTypes = {
    objectList: PropTypes.array.isRequired,
    findId: PropTypes.func.isRequired,
  }

  static navigationOptions = {
    title: 'Audio Search',
    header: null,
  };
  constructor(props) {
    super(props);
    this.state = {
      objectList: [],
      filteredList: [],
      searchTerm: '',
    };
  }

  componentWillMount = () => {
    this.setState({
      objectList: this.props.objectList
    })
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.objectList !== this.props.objectList) {
      console.log('New Props')
      this.setState({
        objectList: this.props.objectList
      })
    }
  }

  handleTextInput = (enteredText) => {
    this.setState({
      searchTerm: enteredText
    }), () => { this.filterList(); }
  }

  render() {
    let _filteredList = [];
    let searchFilt = this.state.searchTerm;
    for (let i = 0; i < this.state.objectList.length; i++) {
      if (this.state.objectList[i].id.toLowerCase().indexOf(searchFilt.toLowerCase()) > -1 || this.state.objectList[i].name.toLowerCase().indexOf(searchFilt.toLowerCase()) > -1) {
        _filteredList.push(this.state.objectList[i]);
      }
    }
    const { t, i18n } = this.props;
    return (
      <View style={styles.main}>
        <View style={styles.titleSpacing}>
          <Text style={styles.title}>{t('audio:title')}</Text>
          {/* <Text style={styles.title}>GUIDE</Text> */}
        </View>
        <View style={styles.search}>
          <SearchBar handleTextInput={this.handleTextInput} />
        </View>
        <AudioList objects={_filteredList} findId={this.props.findId} songIndex={this.props.songIndex} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: '#e2ddc5',
    margin: 10,
    marginBottom: 0,
    marginTop: Platform.OS === 'ios' ? '5%' : 10,

  },
  title: {
    fontSize: 30,
    letterSpacing: 2,
    margin: 0,
    padding: 0,
  },
  titleSpacing: {
    margin: '5%',
  },
  search: {
    backgroundColor: 'white',
    marginLeft: '5%',
    marginRight: '5%',
    marginBottom: '3%',
    borderBottomColor: '#47315a',
    borderBottomWidth: 2,

  },
});


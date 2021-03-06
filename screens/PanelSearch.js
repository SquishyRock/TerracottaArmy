import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableOpacity
} from 'react-native';
import SearchBar from './SearchBar';
import ObjectList from './ObjectList';
import { MonoText } from '../components/StyledText';
import { translate } from 'react-i18next';
import { contentEn, contentIl } from '../assets/content';

@translate(['panelSearch', 'panels'], { wait: true })
export default class PanelSearch extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    objectList: [],
    filteredList: [],
    searchTerm: '',
  };

  componentWillMount() {
    this.getLocale()
  }

  componentWillReceiveProps() {
    this.getLocale()
  }

  getLocale = () => {
    let map = []
    if (this.props.i18n.language == 'il') {
      map = contentIl
    }
    else {
      map = contentEn
    }
    this.setState({
      objectList: map
    })
  }

  handleTextInput = (enteredText) => {
    this.setState({
      searchTerm: enteredText
    }), () => { this.filterList(); }
  }

  // will need to be called to cause a re-render
  currentObject = () => {
    return this.state.objectList.find(
      (object) => object.id === this.state.currentId
    );
  };

  findId = id => {
    const newIndex = content.findIndex(
      (object) => object.id == id
    );
    return newIndex;
  }

  _advanceIndex(up, id) {
    let index = this.findId(id)
    index =
      (index + (up ? 1 : content.length - 1)) %
      content.length;
    this.props.navigation.navigate('Item', {
      singleItem: content[index]
    })
  }

  _changeLang(item) {
    this.props.i18n.changeLanguage(item)
    this.getLocale()
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
       
          <Text style={styles.title}>{t('panels:title')}</Text>
      
        <View style={styles.search}>
          <SearchBar handleTextInput={this.handleTextInput} />
        </View>
        <ObjectList objects={_filteredList} navigation={this.props.navigation} style={styles.body} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
     
    
    backgroundColor: '#e2ddc5',
    margin: 10,
    marginBottom: 0,
    marginTop: Platform.OS === 'ios' ? '5%' : 10,
  },
  body: {
    
    backgroundColor: '#e2ddc5',
    margin: 10,
  },

  title: {
    fontSize: 30,
    letterSpacing: 2,
    margin: 0,
    padding: 0,
    margin: '5%',
    paddingTop: 10,
   
  },
 
  search: {
    backgroundColor: 'white',
		marginLeft: '5%',
		marginRight: '5%',
	
		borderBottomColor: '#47315a',
		borderBottomWidth: 2,
    marginBottom: 10,
  },


});

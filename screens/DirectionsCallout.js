import React from 'react';
import PropTypes from 'prop-types';

import {
  StyleSheet,
  View,
} from 'react-native';

const propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
};

class DirectionsCallout extends React.Component {
  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <View style={styles.bubble}>
          <View style={styles.amount}>
            {this.props.children}
          </View>
        </View>
        <View style={styles.arrowBorder} />
        <View style={styles.arrow} />
      </View>
    );
  }
}

DirectionsCallout.propTypes = propTypes;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignSelf: 'flex-start',
  },
  bubble: {
    width: 140,
    flexDirection: 'row',
    alignSelf: 'flex-start',
    backgroundColor: 'white',
    paddingHorizontal: 4,
    paddingVertical: 12,
    borderRadius: 6,
   
  },
  amount: {
    flex: 1,
  },
  arrow: {
    backgroundColor: 'transparent',
    borderWidth: 16,
    borderColor: 'transparent',
    borderTopColor: 'white',
    alignSelf: 'center',
    marginTop: -32,
  },
  arrowBorder: {
    backgroundColor: 'transparent',
    borderWidth: 16,
    borderColor: 'transparent',
    borderTopColor: 'black',
    alignSelf: 'center',
    marginTop: -0.5,
  },
});

export default DirectionsCallout;
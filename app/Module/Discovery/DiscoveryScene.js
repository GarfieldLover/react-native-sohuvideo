/*
 * @Author: ZK 
 * @Date: 2017-10-31 17:40:28 
 * @Last Modified by: ZK
 * @Last Modified time: 2017-11-22 16:35:13
 */

import React, { PureComponent, PropTypes } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

class DiscoveryScene extends PureComponent {
  static propTypes = {
    onPress: PropTypes.func,
    disabled: PropTypes.bool,
    style: Text.propTypes.style,
    containerStyle: View.propTypes.style,
    channelItem: PropTypes.object,
    activeOpacity: PropTypes.number
  }

  static defaultProps = {
    onPress: () => { },
    disabled: false,
    activeOpacity: 0.8
  }

  constructor(props) {
    super(props);
    this.state = {
      refreshing: true,
      loadedData: false,
      channelArray: []
    };
  }

  render() {
    return (
      <Text>{this.props.channelItem.name}</Text>
    );
  }
}

export default DiscoveryScene;
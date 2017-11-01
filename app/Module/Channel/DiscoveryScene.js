/*
 * @Author: ZK 
 * @Date: 2017-10-31 17:40:28 
 * @Last Modified by: ZK
 * @Last Modified time: 2017-10-31 19:58:14
 */

import React, { PureComponent } from 'react'
import { Text } from 'react-native';

class DiscoveryScene extends PureComponent {
    render() {
      return (
        <Text>{this.props.types}</Text>
      );
    }
  }
  
  export default DiscoveryScene;
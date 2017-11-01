/*
 * @Author: ZK 
 * @Date: 2017-10-27 18:38:10 
 * @Last Modified by: ZK
 * @Last Modified time: 2017-11-01 12:57:18
 */


import React, { PureComponent } from 'react'
import { AppRegistry } from 'react-native'

import Root from './app/Module/Navigation/Root'

export default class SOHU extends PureComponent {
    render() {
        return (
            <Root/>            
        );
    }
}

AppRegistry.registerComponent('SOHU', () => SOHU)

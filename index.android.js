/**
 * Copyright (c) 2017-present, ZK
 * All rights reserved.
 */


import React, { PureComponent } from 'react'
import { AppRegistry } from 'react-native'

import RootScene from './src/RootScene';

export default class MeiTuan extends PureComponent {
    render() {
        return (
            <RootScene />
        );
    }
}

AppRegistry.registerComponent('MeiTuan', () => MeiTuan);

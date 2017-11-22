/*
 * @Author: ZK 
 * @Date: 2017-10-27 18:24:09 
 * @Last Modified by: ZK
 * @Last Modified time: 2017-11-22 17:56:41
 */

import React, { PureComponent } from 'react'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { StatusBar, Image } from 'react-native'

import HomeScene from '../Channel/HomeScene'
import DiscoveryScene from '../Discovery/DiscoveryScene'
import MeScene from '../PersonalSpace/MeScene'
import Detail from '../VideoDetail/Detail'

const HomeIcon = require('../../Resources/images/Navigation/Tabbar-Btn-Home-Normal@3x.png')
const HomeSelectedIcon = require('../../Resources/images/Navigation/Tabbar-Btn-Home-Selected@3x.png')
const PGCIcon = require('../../Resources/images/Navigation/Tabbar-Btn-PGC-Normal@3x.png')
const PGCSelectedIcon = require('../../Resources/images/Navigation/Tabbar-Btn-PGC-Selected@3x.png')
const HotIcon = require('../../Resources/images/Navigation/Tabbar-Btn-Hot-Normal@3x.png')
const HotSelectedIcon = require('../../Resources/images/Navigation/Tabbar-Btn-Hot-Selected@3x.png')
const DiscoveryIcon = require('../../Resources/images/Navigation/Tabbar-Btn-Discovery-Normal@3x.png')
const DiscoverySelectedIcon = require('../../Resources/images/Navigation/Tabbar-Btn-Discovery-Selected@3x.png')
const MeIcon = require('../../Resources/images/Navigation/Tabbar-Btn-Me-Normal@3x.png')
const MeSelectedIcon = require('../../Resources/images/Navigation/Tabbar-Btn-Me-Selected@3x.png')

class Root extends PureComponent {
    render() {
        return (
            <RootNavigator />
        )
    }
}

const HomeSceneStack = StackNavigator({
    HomeScene: {
        screen: HomeScene,
        navigationOptions: () => TabOptions('首页', HomeIcon, HomeSelectedIcon, '首页'),
    }
})

const PGCSceneStack = StackNavigator({
    PGCScene: {
        screen: HomeScene,
        navigationOptions: () => TabOptions('自媒体', PGCIcon, PGCSelectedIcon, '自媒体'),
    }
})

const HotSceneStack = StackNavigator({
    HotScene: {
        screen: HomeScene,
        navigationOptions: () => TabOptions('热点', HotIcon, HotSelectedIcon, '热点'),
    }
})

const DiscoverySceneStack = StackNavigator({
    DiscoveryScene: {
        screen: DiscoveryScene,
        navigationOptions: () => TabOptions('发现', DiscoveryIcon, DiscoverySelectedIcon, '发现'),
    }
})

const MeSceneStack = StackNavigator({
    MeScene: {
        screen: MeScene,
        navigationOptions: () => TabOptions('我', MeIcon, MeSelectedIcon, '我'),
    }
})


const SOHUTabNavigator = TabNavigator(
    {
        HomeSceneStack: {
            screen: HomeSceneStack
        },
        PGCSceneStack: {
            screen: PGCSceneStack
        },
        HotSceneStack: {
            screen: HotSceneStack
        },
        DiscoverySceneStack: {
            screen: DiscoverySceneStack
        },
        MeSceneStack: {
            screen: MeSceneStack
        },
    },
    {
        animationEnabled: false,
        lazy: true,
        tabBarOptions: {
            activeTintColor: 'red',
            inactiveTintColor: '#666666',
            style: {
                backgroundColor: 'white',
            },
            labelStyle: {
                fontSize: 12,
                lineHeight: 16,
            }
        },
    }
)

export const RootNavigator = StackNavigator({
    RootNavigator: {
        screen: SOHUTabNavigator,
    },
    Detail: {
        screen: Detail,
        navigationOptions: () => TabOptions('详情', HomeIcon, HomeSelectedIcon, '详情'),        
    },
})

const TabOptions = (tabBarTitle, normalImage, selectedImage, navTitle) => {
    // console.log(navigation);
    const tabBarLabel = tabBarTitle;
    const tabBarIcon = (({ tintColor, focused }) => {
        return (
            <Image
                source={!focused ? normalImage : selectedImage}
                style={[{ height: 20, width: 20 }, { tintColor: tintColor }]}
            />
        )
    });
    // header的style
    const headerTitle = navTitle;
    const headerTitleStyle = {
        fontSize: 20,
        color: 'white',
        alignSelf: 'center',
        paddingTop: null,
    };
    const headerStyle = { backgroundColor: '#4ECBFC' };
    const tabBarVisible = true;  
    const header = null;
    return { tabBarLabel, tabBarIcon, headerTitle, headerTitleStyle, headerStyle, tabBarVisible, header};
}

const StackOptions = ({ navigation }) => {
    // console.log(navigation);
    let { state, goBack } = navigation;
    // if (!state.params.isVisible){
    //     return;
    // }
    // alert(state.routeName)
    const headerStyle = { backgroundColor: '#4ECBFC' };

    const headerTitle = state.params ? state.params.title : state.routeName;

    const headerTitleStyle = {
        fontSize: iOS ? FONT_SIZE(20) : FONT_SIZE(23),
        color: 'white', fontWeight: '500', alignSelf: 'center', paddingTop: Android ? 17 : null,
    }
    const headerBackTitle = false;
    const headerLeft = (
        <Button
            isCustom={true}
            customView={
                <Icon
                    name='ios-arrow-back'
                    size={30}
                    color='white'
                    style={{ marginLeft: 12, paddingTop: Android ? 17 : null }}
                />
            }
            onPress={() => { goBack() }}
        />
    );
    let headerRight;
    if (state.params ? state.params.headerRight : null) {
        headerRight = state.params.headerRight;
    }
    let header;
    if (state.params ? state.params.isVisible === true : null) {
        header = null;
    }
    return { headerStyle, headerTitle, headerTitleStyle, headerBackTitle, header, headerLeft, headerRight }
};


export default Root;

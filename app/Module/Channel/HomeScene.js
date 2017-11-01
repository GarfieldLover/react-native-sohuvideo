/*
 * @Author: ZK 
 * @Date: 2017-10-31 17:40:18 
 * @Last Modified by: ZK
 * @Last Modified time: 2017-11-01 19:22:20
 */

import React, { PureComponent } from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ListView, Image, StatusBar, FlatList } from 'react-native'
import ScrollableTabView from 'react-native-scrollable-tab-view';
import CustomTabBar from '../../Common/CustomTabBar';

import DiscoveryScene from './DiscoveryScene'

class HomeScene extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      tabNames: ['首页', 'Android111111', 'iOS22', 'iOS33', 'iO34S', 'iO56S', 'iOS33']
    };
    this._handleTabNames = this._handleTabNames.bind(this);
  }

  render() {
    return (
      // <Text>sfsf</Text>
      <View style={styles.container}>
        <ScrollableTabView
          renderTabBar={() => <CustomTabBar pullDownOnPress={this._pullDownCallback.bind(this)} />}
          tabBarBackgroundColor="rgb(22,131,251)"
          tabBarActiveTextColor="white"
          tabBarInactiveTextColor="rgba(255,255,255,0.5)"
          tabBarTextStyle={{ fontSize: styles.scrollView.fontSize }}
          tabBarUnderlineStyle={styles.scrollView.backgroundColor}>
          {this.state.tabNames.map((item, i) => {
            return (
              <DiscoveryScene tabLabel={item} key={i} tabTag={item} />
            );
          })}
        </ScrollableTabView>
      </View>
    );
  }

  _pullDownCallback() {
    console.log(this.props.navigation);
    this.props.navigation.navigate('Detail', { name: 'Jane' })
    
    // this.props.navigation.navigator({
    //   component: TabItemSwitcherPage,
    //   args: { tabNames: this.state.tabNames }
    // });
  }
  _handleTabNames(tabNames) {
    this.setState({ tabNames: tabNames });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  text: {
    color: '#000000',
    fontSize: 23
  },
  scrollView: {
    fontSize: 15,
    backgroundColor: 'white'
  }
});

export default HomeScene;

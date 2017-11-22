/*
 * @Author: ZK 
 * @Date: 2017-10-31 17:40:18 
 * @Last Modified by: ZK
 * @Last Modified time: 2017-11-22 18:07:17
 */

import React, { PureComponent } from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ListView, Image, StatusBar, FlatList } from 'react-native'
import ScrollableTabView from 'react-native-scrollable-tab-view';
import CustomTabBar from '../../Common/CustomTabBar';
import ChannelPage from './ChannelPage'

class HomeScene extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      channelArray: []
    };
  }

  componentDidMount() {
    this.fetchChannelData();
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollableTabView renderTabBar={() =>
          <CustomTabBar leftButtonOnPress={this.leftButtonOnPress.bind(this)}
            rightButtonOnPress={this.rightButtonOnPress.bind(this)} />}
          tabBarBackgroundColor="#ffffff"
          tabBarActiveTextColor="red"
          tabBarInactiveTextColor="black"
          tabBarTextStyle={{ fontSize: styles.scrollView.fontSize }}
          tabBarUnderlineStyle={styles.scrollView.backgroundColor}>
          {this.state.channelArray.map((channelItem, i) => {
            return (
              <ChannelPage tabLabel={channelItem.name} key={i} channelItem={channelItem}/>
            );
          })}
        </ScrollableTabView>
      </View>
    );
  }

  leftButtonOnPress() {

  }

  rightButtonOnPress() {
    this.props.navigation.navigate('Detail', { name: 'Jane' })
  }

  fetchChannelData() {
    var url = 'http://s1.api.tv.itc.cn/v6/mobile/channel/list.json?api_key=695fe827ffeb7d74260a813025970bd5&build=6.8.6.0.1&channel_list_type=0&partner=6932&plat=3&poid=1&sver=6.8.6&sysver=11.0';
    console.log(url);
    fetch(url)
      .then((response) => response.json())
      .then((responseData) => {
        let data = responseData.data;
        let cateCodes = data.cateCodes;
        var channelArray = [];

        for (let i in cateCodes) {
          let channelItem = {
            name: cateCodes[i].name,
            icon: cateCodes[i].icon,
            channel_id: cateCodes[i].channel_id,
          }
          channelArray.push(channelItem);
        }
        console.log(channelArray);

        if (channelArray.length) {
          this.setState({
            channelArray: channelArray,
          });
        }
      }
    ).done();
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

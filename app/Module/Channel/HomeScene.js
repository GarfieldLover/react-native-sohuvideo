/*
 * @Author: ZK 
 * @Date: 2017-10-31 17:40:18 
 * @Last Modified by: ZK
 * @Last Modified time: 2017-11-04 16:52:51
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
      refreshing: true,
      loadedData: false,
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
          {this.state.channelArray.map((item, i) => {
            return (
              <DiscoveryScene tabLabel={item.name} key={i} tabTag={item.channeled}>
                title = item
              </DiscoveryScene>
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

  fetchColumnsData() {
    var url = 'http://testapi.hd.sohu.com/v6/mobile/channelPageData/list.json?api_key=88a12cee7016fe81ac2ab686d918bc7c&area_code=3901&build=6.8.8.0.1&channel_id=88880001&cursor=0&isNeedCache=0&page_size=10&partner=6933&plat=3&poid=1&sver=6.8.9&sysver=10.3.3&uid=BB32EB6A-5685-4230-9845-B04FB3BA390F';
    console.log(url);
    fetch(url)
      .then((response) => response.json())
      .then((responseData) => {
        let data = responseData.data;
        let columns = data.columns;
        var columnArray = [];

        for (let i in columns) {
          let info = {
            column_id: columns[i].column_id,
            template: columns[i].template,
            data_list: columns[i].data_list,
          }
          columnArray.push(info);
        }
        console.log(columnArray);

        if (columnArray.length) {
          this.setState({
            columnArray: columnArray,
            loadedData: true,
            refreshing: false
          });
        }
      }
    ).done();
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
          let info = {
            name: cateCodes[i].name,
            icon: cateCodes[i].icon,
            channeled: cateCodes[i].channeled,
          }
          channelArray.push(info);
        }
        console.log(channelArray);

        if (channelArray.length) {
          this.setState({
            channelArray: channelArray,
            // loadedData: true,
            // refreshing: false
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

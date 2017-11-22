/*
 * @Author: ZK 
 * @Date: 2017-11-22 17:13:12 
 * @Last Modified by: ZK
 * @Last Modified time: 2017-11-22 19:18:43
 */

import React, { PureComponent, PropTypes } from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ListView, Image, StatusBar, FlatList } from 'react-native'
import api, { columnsURLWithChannel } from '../../NetWork/api'

const HomeIcon = require('../../Resources/images/Navigation/Tabbar-Btn-Home-Normal@3x.png')

class ChannelPage extends PureComponent {

  static propTypes = {
    channelItem: PropTypes.object,
  }

  static defaultProps = {
    channelItem: {
      name: '推荐',
      icon: HomeIcon,
      channel_id: '10000000',
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      refreshing: true,
      loadedData: false,
      columnArray: []
    };
  }

  componentDidMount() {
    this.fetchColumnsData();
  }

  render() {
    return (
      <View style={styles.container}>
      <Text>{this.props.channelItem.channel_id}</Text>
        {/* <FlatList
          data={this.state.columnArray}
          keyExtractor={this.keyExtractor}
          onRefresh={this.fetchColumnsData}
          refreshing={this.state.refreshing}
          renderItem={this.renderCell}
        /> */}
      </View>
    );
  }

  renderCell(column: Object) {
    return (
      <Heading1>{column.column_id}</Heading1>
    )
  }

  fetchColumnsData() {        
    var url = columnsURLWithChannel(this.props.channelItem);
    console.log(url);
    fetch(url)
      .then((response) => response.json())
      .then((responseData) => {
        let data = responseData.data;
        if (!data) {
          return;
        }
        let columns = data.columns;
        var columnArray = [];

        for (let i in columns) {
          let columnItem = {
            column_id: columns[i].column_id,
            template: columns[i].template,
            data_list: columns[i].data_list,
          }
          columnArray.push(columnItem);
        }
        console.log(columnArray);

        if (columnArray.length) {
          this.setState({
            refreshing: false,
            loadedData: true,
            columnArray: columnArray,
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
  });

  export default ChannelPage;

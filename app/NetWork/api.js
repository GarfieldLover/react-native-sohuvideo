/**
 * Copyright (c) 2017-present, Liu Jinyong
 * All rights reserved.
 *
 * https://github.com/huanxsd/MeiTuan  
 * @flow
 */


// export default {
//     recommend: 'http://api.meituan.com/group/v1/recommend/homepage/city/1?__skck=40aaaf01c2fc4801b9c059efcd7aa146&__skcy=mrUZYo7999nH8WgTicdfzaGjaSQ=&__skno=51156DC4-B59A-4108-8812-AD05BF227A47&__skts=1434530933.303717&__skua=bd6b6e8eadfad15571a15c3b9ef9199a&__vhost=api.mobile.meituan.com&ci=1&client=iphone&limit=40&movieBundleVersion=100&msid=48E2B810-805D-4821-9CDD-D5C9E01BC98A2015-06-17-14-50363&offset=0&position=39.983497,116.318042&userId=10086&userid=10086&utm_campaign=AgroupBgroupD100Fab_chunceshishuju__a__a___b1junglehomepagecatesort__b__leftflow___ab_gxhceshi__nostrategy__leftflow___ab_gxhceshi0202__b__a___ab_pindaochangsha__a__leftflow___ab_xinkeceshi__b__leftflow___ab_gxtest__gd__leftflow___ab_gxh_82__nostrategy__leftflow___ab_pindaoshenyang__a__leftflow___i_group_5_2_deallist_poitype__d__d___ab_b_food_57_purepoilist_extinfo__a__a___ab_trip_yidizhoubianyou__b__leftflow___ab_i_group_5_3_poidetaildeallist__a__b___ab_waimaizhanshi__b__b1___a20141120nanning__m1__leftflow___ab_pind',
//     discount: 'http://api.meituan.com/group/v1/deal/topic/discount/city/1?ci=1&client=iphone&movieBundleVersion=100&msid=48E2B810-805D-4821-9CDD-D5C9E01BC98A2015-06-17-14-50363&userid=10086&utm_campaign=AgroupBgroupD100Fab_chunceshishuju__a__a___b1junglehomepagecatesort__b__leftflow___ab_gxhceshi__nostrategy__leftflow___ab_gxhceshi0202__b__a___ab_pindaochangsha__a__leftflow___ab_xinkeceshi__b__leftflow___ab_gxtest__gd__leftflow___ab_gxh_82__nostrategy__leftflow___ab_pindaoshenyang__a__leftflow___i_group_5_2_deallist_poitype__d__d___ab_b_food_57_purepoilist_extinfo__a__a___ab_trip_yidizhoubianyou__b__leftflow___ab_i_group_5_3_poidetaildeallist__a__b___ab_waimaizhanshi__b__b1___a20141120nanning__m1__leftflow___ab_pindaoquxincelue__a__leftflow___ab_i_group_5_5_onsite__b__b___ab_i_group_5_6_searchkuang__a__leftflow&utm_content=4B8C0B46F5B0527D55EA292904FD7E12E48FB7BEA8DF50BFE7828AF7F20BB08D&utm_medium=iphone&utm_source=AppStore&utm_term=5.7&uuid=4B8C0B46F5B0527D55EA292904FD7E12E48FB7BEA8DF50BFE7828AF7F20BB08D&version_name=5.7',
    
//     menuInfo: [
//             { title: '美食', icon: require('../Resources/images/Channel/search_icon.png') },
//             { title: '电影', icon: require('../Resources/images/Channel/search_icon.png') },
//             { title: '酒店', icon: require('../Resources/images/Channel/search_icon.png') },
//             { title: 'KTV', icon: require('../Resources/images/Channel/search_icon.png') },
//             { title: '优惠买单', icon: require('../Resources/images/Channel/search_icon.png') },
//             { title: '周边游', icon: require('../Resources/images/Channel/search_icon.png') },
//             { title: '生活服务', icon: require('../Resources/images/Channel/search_icon.png') },
//             { title: '休闲娱乐', icon: require('../Resources/images/Channel/search_icon.png') },
//             { title: '丽人/美发', icon: require('../Resources/images/Channel/search_icon.png') },
//             { title: '购物', icon: require('../Resources/images/Channel/search_icon.png') },

//             { title: '丽人/美发', icon: require('../Resources/images/Channel/search_icon.png') },
//             { title: '电影', icon: require('../Resources/images/Channel/search_icon.png') },
//             { title: '周边游', icon: require('../Resources/images/Channel/search_icon.png') },
//             { title: '酒店', icon: require('../Resources/images/Channel/search_icon.png') },
//             { title: '优惠买单', icon: require('../Resources/images/Channel/search_icon.png') },
//             { title: '休闲娱乐', icon: require('../Resources/images/Channel/search_icon.png') },
//             { title: 'KTV', icon: require('../Resources/images/Channel/search_icon.png') },
//         ]
// }

export function columnsURLWithChannel(channelItem) {
    return 'http://testapi.hd.sohu.com/v6/mobile/channelPageData/list.json?api_key=88a12cee7016fe81ac2ab686d918bc7c&area_code=3901&build=6.8.9.0.1&channel_id=' +channelItem.channel_id+ '&cursor=0&isNeedCache=0&page_size=10&partner=6933&plat=3&poid=1&sver=6.8.9&sysver=10.3.3&uid=BB32EB6A-5685-4230-9845-B04FB3BA390F'
}
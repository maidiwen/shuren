import React,{useEffect} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Icon, ListItem } from 'react-native-elements';
import {RoomAvatar} from '../components/DicebearAvatar';
export default function HomeScreen({navigation}) {

  return (
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={styles.searchContainer}>
          <TouchableOpacity onPress={()=> navigation.navigate('SearchRoom')} style={styles.searchLink}>
            <Icon name="ios-search" type='ionicon' color='#6e6e6e' />
            <Text style={styles.searchLinkText}>搜索加群</Text>
          </TouchableOpacity>
        </View>

        <ListItem
            title='官方每日通知'
            leftElement={<Icon name="ios-notifications-outline" type='ionicon' color='#673AB7' size={26} style={{width:28}}/>}
            bottomDivider={true}
            rightIcon={{name: 'ios-arrow-forward',type:'ionicon',color:'#eee'}}
            onPress={()=> navigation.navigate('MyTeam')}
          />
          
          <ListItem
            title='申请加群通知'
            leftElement={<Icon name="ios-notifications-outline" type='ionicon' color='#8BC34A' size={26} style={{width:28}}/>}
            bottomDivider={true}
            rightIcon={{name: 'ios-arrow-forward',type:'ionicon',color:'#eee'}}
            onPress={()=> navigation.navigate('MyClub')}
            style={{marginBottom:5}}
          />
          <ListItem
            title='咿呀群 50～300 1.62'
            containerStyle={{paddingVertical:10}}
            leftElement={<RoomAvatar seed="8923" />}
            bottomDivider={true}
            badge={{status:"error"}}
            onPress={()=> navigation.navigate('Chat')}
          />
          <ListItem
            title='随便一个群名称'
            containerStyle={{paddingVertical:10}}
            leftElement={<RoomAvatar sprites="identicon" seed="8923" />}
            bottomDivider={true}
            badge={{status:"error"}}
            onPress={()=> navigation.navigate('Chat')}
          />
      </ScrollView>
  );
}

HomeScreen.navigationOptions = {
  title: '群聊',
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  contentContainer: {
    paddingTop: 5,
  },
  searchContainer: {
    alignItems: 'center',
    marginBottom:5,
    backgroundColor:'#FFF'
  },
  searchLink: {
    paddingVertical: 5,
    flexDirection: 'row',
    alignItems:'center'
  },
  searchLinkText: {
    fontSize: 16,
    color: '#6e6e6e',
    marginLeft:5
  },
});

import * as WebBrowser from 'expo-web-browser';
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
        <View style={styles.helpContainer}>
          <TouchableOpacity onPress={()=> navigation.navigate('SearchRoom')} style={styles.helpLink}>
            <Icon name="ios-search" type='ionicon' color='#6e6e6e' />
            <Text style={styles.helpLinkText}>搜索加群</Text>
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
            title='咿呀群'
            containerStyle={{paddingVertical:10}}
            leftElement={<RoomAvatar seed="8923" />}
            bottomDivider={true}
            badge={{status:"error"}}
            onPress={()=> navigation.navigate('Chat')}
          />
          <ListItem
            title='咿呀群'
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

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes'
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
  contentContainer: {
    paddingTop: 5,
  },
  helpContainer: {
    alignItems: 'center',
    marginBottom:5,
    backgroundColor:'#FFF'
  },
  helpLink: {
    paddingVertical: 5,
    flexDirection: 'row',
    alignItems:'center'
  },
  helpLinkText: {
    fontSize: 16,
    color: '#6e6e6e',
    marginLeft:5
  },
});

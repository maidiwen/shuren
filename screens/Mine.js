import React from 'react';
import { StyleSheet,Image,View,ScrollView,Clipboard } from 'react-native';
import { ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import Toast from 'react-native-root-toast';
import Avatar from '../components/DicebearAvatar'
_setContent=(content) =>{
  Clipboard.setString(content);
  Toast.show('复制成功',{position:Toast.positions.CENTER,});
}
export default function Mine(){
  const {nickname,uid,avatar}={nickname:'咿呀',uid:'54237',avatar:'http://p3.music.126.net/C8950M-wl-s1gjQqXvXmDg==/109951164091880958.jpg?param=50y50'};
  return (
    <View style={styles.container}>
      <ScrollView>
        <ListItem
            title={`${nickname}`}
            titleStyle={{fontSize: 20,fontWeight: 'bold'}}
            subtitle={'用户：'+uid}
            subtitleStyle={{color:'#6e6e6e',marginTop:10}}
            leftElement={<Avatar uri="human" seed={uid} />}
            onPress={()=>this.props.navigation.navigate('MineDetail')}
            rightIcon={{name: 'ios-arrow-forward',type:'ionicon',color:'#6e6e6e'}}
            bottomDivider={true}
          />
        
          <ListItem
            title={'邀请码:'+uid}
            leftElement={<Icon name="ios-cube" color='#00BCD4' size={26} style={{width:28}}/>}
            rightTitle='长按复制'
            rightIcon={{name: 'ios-arrow-forward',type:'ionicon',color:'#6e6e6e'}}
            bottomDivider={true}
            onLongPress={()=>_setContent(uid)}
            style={{marginTop:10}}
          />
          
          <ListItem
            title='我的玩家'
            leftElement={<Icon name="ios-filing" color='#673AB7' size={26} style={{width:28}}/>}
            bottomDivider={true}
            rightIcon={{name: 'ios-arrow-forward',type:'ionicon',color:'#6e6e6e'}}
            onPress={()=>this.props.navigation.navigate('MyTeam')}
          />
          
          <ListItem
            title='我的俱乐部'
            leftElement={<Icon name="ios-contacts" color='#8BC34A' size={26} style={{width:28}}/>}
            bottomDivider={true}
            rightIcon={{name: 'ios-arrow-forward',type:'ionicon',color:'#6e6e6e'}}
            onPress={()=>this.props.navigation.navigate('MyClub')}
          />

        <ListItem
            title='设置'
            leftElement={<Icon name="ios-settings" color='#3F51B5' size={26} style={{width:28}}/>}
            rightIcon={{name: 'ios-arrow-forward',type:'ionicon',color:'#6e6e6e'}}
            bottomDivider={true}
            style={{marginTop:20}}
            onPress={()=>this.props.navigation.navigate('Setting') }
          />
    </ScrollView>
    </View>
  );
}
Mine.navigationOptions = {
  title: '我的',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#eee'
  },
  welcomeImage: {
    width: 64,
    height:64,
    borderRadius:5,
    resizeMode: 'contain',
  },
});

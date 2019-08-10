import React from 'react';
import {View,Platform,KeyboardAvoidingView} from 'react-native';
import { Icon} from 'react-native-elements';
import Avatar from '../components/DicebearAvatar';
import { GiftedChat,Bubble } from 'react-native-gifted-chat';
import HongBaoItem from '../components/HongBaoItem';

const wrapperStyle = {
  left:{
      borderRadius: 15,
      backgroundColor: '#FFF',
      marginRight: 60,
      minHeight: 20,
      justifyContent: 'flex-end',
  },
};


const renderAvatar =({currentMessage})=>{
  return (<Avatar width={36} uri={currentMessage.user.avatar} seed={`${currentMessage.user._id}`}/>);
}
const renderBubble = (props)=>{
  const { currentMessage } = props;
  if(currentMessage.gid && currentMessage.gid>0){
      return <HongBaoItem {...props} pressHongBao={()=>this._pressHongBao(currentMessage)}/>;
  }
  return <Bubble {...props} wrapperStyle={wrapperStyle} />;
}
const renderActions = (onPress)=>{
  return(
    <View style={{height:26,width:26,marginLeft: 10,marginBottom:10}} >
      <Icon
      name="ios-add-circle-outline"
      type='ionicon'
      color='#6e6e6e'
      size={26}
      onPress={onPress}
      />
    </View>);
}
const AvoidingView = (props)=>{
  if(Platform.OS === 'android'){
    return (
      <KeyboardAvoidingView style={{flex:1}} behavior="padding"
        keyboardVerticalOffset={84}
      >
        {props.children}
      </KeyboardAvoidingView>);
  }
  return props.children;
}
export default function HomeScreen(props) {
  const messages = [
    {
      _id: 1,
      text: '100.00 # 1',
      createdAt: new Date(),
      gid:123,
      user: {
        _id: 1,
        name: 'React Native',
        avatar: 'https://placeimg.com/140/140/any',
      },
    },
    {
      _id: 2,
      text: 'Hello developer',
      createdAt: new Date(),
      user: {
        _id: 2,
        name: 'React Native',
        avatar: 'human',
      },
    },
    {
      _id: 3,
      text: '发个红包呗',
      createdAt: new Date(),
      user: {
        _id: 1,
        name: 'React Native',
        avatar: '',
      },
    },
    {
      _id: 4,
      text: '群主福利红包',
      createdAt: new Date(),
      gid:345,
      opened:true,
      user: {
        _id: 3,
        name: '小明',
        avatar: 'female',
      },
    },
  ];

  return (
    <View
      style={{flex:1,backgroundColor:'#eee'}}
    >
      <AvoidingView behavior="padding">
        <GiftedChat
          showUserAvatar={true}
          renderUsernameOnMessage ={true}
          renderAvatarOnTop={false}
          renderAvatar={renderAvatar}
          renderActions={()=>renderActions(()=>{props.navigation.navigate('SendHongBao')})}
          renderBubble={renderBubble}
          maxInputLength={40}
          placeholder="请输入"
          label="发送"
          dateFormat='MM-DD'
          timeFormat='HH:mm'
          messages={messages}
          user={{
            _id: 2,
          }}
        />
      </AvoidingView>
    </View>
    
  );
}

HomeScreen.navigationOptions = ({ navigation }) => {
  const goDetail = ()=>{
      const rid = navigation.getParam('rid');
      console.log(rid);
      navigation.navigate('RoomDetail',{rid});
  }
  return {
    title: navigation.getParam('title', '交友群'),
    headerRight:(<Icon name="torsos-all" type='foundation' color='#6e6e6e' onPress={goDetail} size={30} containerStyle={{marginRight:15}}/>)
  };
};
import React,{useState} from 'react';
import {View,Platform,KeyboardAvoidingView} from 'react-native';
import { Icon, ListItem,Input,Button } from 'react-native-elements';
import Avatar from '../components/DicebearAvatar';
import { GiftedChat } from 'react-native-gifted-chat';

const renderAvatar =({currentMessage})=>{
  //console.log(currentMessage);
  return (<Avatar width={36} uri={currentMessage.user.avatar} seed={`${currentMessage.user._id}`}/>);
}
const renderActions = ()=>{
  return(
    <View
      style={{height:26,width:26,marginLeft: 10,marginBottom:10}}
    ><Icon name="ios-add-circle-outline" type='ionicon' color='#6e6e6e' size={26}/>
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
export default function HomeScreen() {
  const messages = [
    {
      _id: 1,
      text: 'Hello developer',
      createdAt: new Date(),
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
        avatar: 'human',
      },
    },
    {
      _id: 4,
      text: 'Hello developer',
      createdAt: new Date(),
      user: {
        _id: 3,
        name: '小明',
        avatar: 'female',
      },
    },
  ];

  return (
      <AvoidingView behavior="padding">
        <GiftedChat
          showUserAvatar={true}
          renderUsernameOnMessage ={true}
          renderAvatarOnTop={false}
          renderAvatar={renderAvatar}
          renderActions={renderActions}
          //onPressActionButton={()=>{}}
          maxInputLength={40}
          placeholder="请输入"
          label="发送"
          dateFormat='MM-DD HH:mm'
          timeFormat='HH:mm'
          messages={messages}
          user={{
            _id: 2,
          }}
        />
      </AvoidingView>
    
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
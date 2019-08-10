import React from 'react';
import { ScrollView, StyleSheet,View,Text } from 'react-native';
import { Input,Button } from 'react-native-elements';

export default function LinksScreen({navigation}) {
  return (
    <ScrollView style={styles.container}>
      <Input
        placeholder='请输入手机号'
        containerStyle={{backgroundColor:'#FFF',paddingHorizontal:20,paddingVertical:5,borderBottomWidth:2,borderBottomColor:'#eee'}}
        inputContainerStyle={{borderBottomWidth:0}}
        rightIcon={<Button title="获取验证码" type="clear"/>}
      />
      <Input
        placeholder='请输入验证码'
        containerStyle={{backgroundColor:'#FFF',paddingHorizontal:20,paddingVertical:5,borderBottomWidth:2,borderBottomColor:'#eee'}}
        inputContainerStyle={{borderBottomWidth:0}}
      />
      <Input
        placeholder='设置密码'
        containerStyle={{backgroundColor:'#FFF',paddingHorizontal:20,paddingVertical:5}}
        inputContainerStyle={{borderBottomWidth:0}}
      />
      <Input
        placeholder='设置密码'
        containerStyle={{backgroundColor:'#FFF',paddingHorizontal:20,paddingVertical:5}}
        inputContainerStyle={{borderBottomWidth:0}}
      />
      <Button containerStyle={{marginTop:30,marginBottom:20, marginHorizontal:20,padding:5}} title="立即注册"/>
      <View style={{justifyContent:'center',flexDirection:'row',alignItems:'center'}}>
        <Text>已账号？</Text>
        <Button title="去登陆" type="clear" onPress={()=>navigation.goBack()}/>
      </View>
    </ScrollView>
  );
}

LinksScreen.navigationOptions = {
  title: '注册',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#F7F7F7',
  },
});

import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Input,Button } from 'react-native-elements';

export default function LinksScreen() {
  return (
    <ScrollView style={styles.container}>
      <Input
        placeholder='请输入手机号'
        containerStyle={{backgroundColor:'#FFF',paddingHorizontal:20,paddingVertical:5,borderBottomWidth:2,borderBottomColor:'#eee'}}
        inputContainerStyle={{borderBottomWidth:0}}
      />
      <Input
        placeholder='请输入密码'
        containerStyle={{backgroundColor:'#FFF',paddingHorizontal:20,paddingVertical:5}}
        inputContainerStyle={{borderBottomWidth:0}}
        rightIcon={<Button title="忘记密码" type="clear"/>}
      />
      <Button containerStyle={{marginTop:40,marginHorizontal:20,padding:5}} title="登录"/>
    </ScrollView>
  );
}

LinksScreen.navigationOptions = {
  title: '登录',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#F7F7F7',
  },
});

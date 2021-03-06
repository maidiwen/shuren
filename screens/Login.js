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
      />
      <Input
        placeholder='请输入密码'
        containerStyle={{backgroundColor:'#FFF',paddingHorizontal:20,paddingVertical:5}}
        inputContainerStyle={{borderBottomWidth:0}}
        rightIcon={<Button title="忘记密码" type="clear"/>}
      />
      <Button containerStyle={{marginTop:40,marginBottom:30, marginHorizontal:20,padding:5}} title="登录"/>
      <View style={{justifyContent:'center',flexDirection:'row',alignItems:'center'}}>
        <Text>还没有账号？</Text>
        <Button title="注册" type="clear" onPress={()=>navigation.navigate('Register')}/>
      </View>
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

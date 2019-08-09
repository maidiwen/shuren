import React,{useState} from 'react';
import {
  ScrollView,
  StyleSheet,
} from 'react-native';
import { Icon, ListItem,Input,Button } from 'react-native-elements';
import {RoomAvatar} from '../components/DicebearAvatar';
export default function HomeScreen() {
  const [isSuccess,setSuccess] = useState(false);
  return (
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        {isSuccess===false?<Input
          placeholder='请输入群号'
          keyboardType="decimal-pad"
          containerStyle={{backgroundColor:'#FFF'}}
          rightIcon={<Button title="搜索" type="clear" onPress={()=>setSuccess(true)}/>}
        />:<>
        <ListItem
          title='咿呀群 1.6'
          subtitle="群号:89231"
          containerStyle={{paddingVertical:10,marginBottom:5}}
          leftElement={<RoomAvatar seed="8923" />}
          bottomDivider={true}
        />
        <Input
          placeholder='请输入邀请码'
          keyboardType="decimal-pad"
          containerStyle={{backgroundColor:'#FFF',marginBottom:5}}
          inputContainerStyle={{marginVertical:5}}
          rightIcon={<Button title="申请加入" type="clear" onPress={()=>setSuccess(false)}/>}
        />
        </>}
        
        
      </ScrollView>
  );
}

HomeScreen.navigationOptions = {
  title: '搜索群',
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
  contentContainer: {
    paddingTop: 5,
  },
});

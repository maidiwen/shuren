import React,{useState} from 'react';
import { ScrollView,StyleSheet,Text } from 'react-native';
import { ListItem,Button } from 'react-native-elements';
const InputItem = ({title,unit,onChangeText,value,style})=>{
  return (<ListItem
    title={title}
    rightElement={<Text>{unit}</Text>}
    bottomDivider={true}
    containerStyle={{paddingVertical:5}}
    style={style}
    input={{
      maxLength:6,
      placeholder:'0',
      keyboardType:'decimal-pad',
      selectTextOnFocus:true,
      value,
      onChangeText
    }}
  />);
}
const DoublePressButton = ({onPress,title,loading})=>{
  const [confirm,setConfirm] = useState(false);
  if(confirm){
    return(
      <Button
        title="确认"
        type="outline"
        onPress={onPress}
        raised={true}
        loading={loading}
      />
    );
  }
  return(
    <Button
      title={title}
      type="outline"
      onPress={()=>setConfirm(true)}
    />
  );
}
export default function LinksScreen() {
  const [money,setMoney] = useState('');
  const [lei,setLei] = useState('0');
  const [count,setCount] = useState('7');
  return (
    <ScrollView style={styles.container}>
      <InputItem value={money} onChangeText={(value)=>setMoney(value)} title="红包金额" unit="元"/>
      <Text style={{color:'#6e6e6e',marginBottom:10,textAlign:'right'}}>当前可用:1923.82</Text>

      <InputItem style={{marginBottom:10}} value={count} onChangeText={(value)=>setCount(value)} title="红包个数" unit="个"/>
      <InputItem style={{marginBottom:30}} value={lei} onChangeText={(value)=>setLei(value)} title="尾数雷" unit="尾"/>
      <DoublePressButton title="塞钱进红包" loading={false} onPress={()=>{}}/>
      
    </ScrollView>
  );
}

LinksScreen.navigationOptions = {
  title: '发红包',
  headerStyle: {
    backgroundColor: '#f7f7f7',
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f7f7f7',
  },
});

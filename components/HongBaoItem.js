import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
  View,
} from 'react-native';
const moment = require('moment');

const { width } = Dimensions.get('window');

export default function HongBaoItem({currentMessage,pressHongBao}){
  const hongbao_image=currentMessage.opened?require('../assets/images/hb-open.jpg'):require('../assets/images/hb.jpg');
  return(
    <View style={styles.container}>
      <TouchableOpacity onPress={pressHongBao}>
        <ImageBackground source={hongbao_image} style={styles.bgImage}
            imageStyle={{
                resizeMode:'stretch'
            }}>
            <Text style={{fontSize:20,color:'#FFF',marginLeft:10}}>{currentMessage.text}</Text>
        </ImageBackground>
        </TouchableOpacity>
        <View style={{height:18,backgroundColor:'#FFF',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
          <Text style={{fontSize:12,color:'#6e6e6e',marginLeft:8}}>红包</Text>
          <Text style={{fontSize:12,color:'#6e6e6e',marginRight:8}}>{moment(currentMessage.createdAt).format('HH:mm:ss')}</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ff9933',
    width:width/2,
    height:width/6,
    marginVertical:10
  },
  bgImage:{
      width: width/2,
      height: width/6-18,
      alignItems: 'center',
      justifyContent: 'center',
  }
})

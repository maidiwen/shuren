import React from 'react';
import { Image } from 'react-native';
import SvgUri from 'react-native-svg-uri';
import Colors from '../constants/Colors';

//sprites: male female human identicon initials bottts avataaars jdenticon gridy
//https://avatars.dicebear.com/
export default function Avatar({width,uri,sprites,seed}) {
  const size = width?width:64;
  if(!sprites){
    return <Image
    source={ {uri} }
    style={{width:size,height:size,resizeMode:'contain',borderRadius:size/2}}
    />
  }
  return (
    <SvgUri
      style={{backgroundColor:Colors.avatar,width:size,height:size,alignItems:'center',justifyContent:'center',borderRadius:size/2}}
      width={size*0.8}
      height={size*0.8}
      source={{uri:`https://avatars.dicebear.com/v2/${sprites}/${seed}.svg`}}
    />
  );
}

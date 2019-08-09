import React from 'react';
import { Image,View } from 'react-native';
import SvgUri from 'react-native-svg-uri';
import Colors from '../constants/Colors';
import Avatars from '@dicebear/avatars';

import MaleSprites from '@dicebear/avatars-male-sprites';
import FemaleSprites from '@dicebear/avatars-female-sprites';
import HumanSprites from '@dicebear/avatars-human-sprites';

import IdenticonSprites from '@dicebear/avatars-identicon-sprites';
import JdenticonSprites from '@dicebear/avatars-jdenticon-sprites';

//uri: male female human identicon initials bottts avataaars jdenticon gridy
//https://avatars.dicebear.com/
export default function Avatar({width,uri,seed}) {
  const size = width?width:64;
  if(uri && uri.indexOf('http')==0){
    return <Image
    source={ {uri} }
    style={{width:size,height:size,borderRadius:size/2}}
    />
  }
  let Sprites = MaleSprites;
  switch(uri){
    case 'female':
        Sprites = FemaleSprites;
        break;
    case 'human':
        Sprites = HumanSprites;
        break;
    default:
        break;
  }
  let avatars = new Avatars(Sprites({}));
  let svgXmlData = avatars.create(seed);
  return (
    <View style={{width:size,height:size}}>
    <SvgUri
      style={{backgroundColor:Colors.avatar,width:size,height:size,alignItems:'center',justifyContent:'center',borderRadius:size/2}}
      width={size*0.8}
      height={size*0.8}
      svgXmlData={svgXmlData}
      //source={{uri:`https://avatars.dicebear.com/v2/${sprites}/${seed}.svg`}}
    /></View>
  );
}

export function RoomAvatar({sprites,seed}) {
  const size = 40;
  let Sprites = JdenticonSprites;
  switch(sprites){
    case 'identicon':
        Sprites = IdenticonSprites;
        break;
    default:
        break;
  }
  let avatars = new Avatars(Sprites({}));
  let svgXmlData = avatars.create(seed);
  return (
    <View style={{width:size,height:size}}>
    <SvgUri width={size} height={size}
      svgXmlData={svgXmlData}
      //source={{uri:`https://avatars.dicebear.com/v2/${sprites}/${seed}.svg`}}
    /></View>
  );
}

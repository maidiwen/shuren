import React from 'react';
import { StyleSheet,Image,View,ScrollView } from 'react-native';
import { ListItem ,Icon,Button  } from 'react-native-elements';
import { connect } from 'react-redux'
class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: '个人信息',
    headerBackTitle: null
  };
  render() {
    let { nickname,uid,avatar}=this.props.user;
    return (
      <ScrollView>
        <ListItem
            title='头像'
            rightElement={<Image
              source={ {uri:avatar} }
              style={styles.userHead}
            />}
            onPress={()=>this.props.navigation.navigate('SaveHead')}
            bottomDivider={true}
          />

        <ListItem
            title='名字'
            rightTitle={`${nickname}`}
            rightIcon={{name: 'ios-arrow-forward',type:'ionicon',color:'#6e6e6e'}}
            bottomDivider={true}
            onPress={()=>this.props.navigation.navigate('SaveNickname')}
          />
        <ListItem
            title='用户ID'
            rightTitle={`${uid}`}
            bottomDivider={true}
          />
        <ListItem
            title='我的二维码'
            rightIcon={{name: 'ios-arrow-forward',type:'ionicon',color:'#6e6e6e'}}
            bottomDivider={true}
            onPress={()=>this.props.navigation.navigate('MineQR')}
          />
        <ListItem
            title='我的地址'
            rightIcon={{name: 'ios-arrow-forward',type:'ionicon',color:'#6e6e6e'}}
            bottomDivider={true}
          />

    </ScrollView>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  userHead: {
    width: 64,
    height:64,
    resizeMode: 'contain',
    alignItems:'flex-end',
    borderRadius:5
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    shadowColor: 'black',
    shadowOffset: { height: -3 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
export default connect(({ user }) => ({user}))(SettingsScreen);
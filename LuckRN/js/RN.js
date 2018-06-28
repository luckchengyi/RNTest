
import React,{ Component } from 'react';
import {AppRegistry,StyleSheet,Text,View } from 'react-native';


export default class RNHighScores extends React.Component {
  render() {
    console.log(this.props["scores"]);
    var contents = this.props["scores"].map(
      score => <Text key={score.name}>{score.name}:{score.value}{"\n"}</Text>
    );
    return (
      <View style={styles.container}>
        <Text style={styles.highScoresTitle}>
          2048 High Scores!
        </Text>
        <Text style={styles.scores}>
          {contents}
        </Text>
        {/* <Image source={{uri:'http://f.hiphotos.baidu.com/zhidao/pic/item/f9dcd100baa1cd114753d728b912c8fcc2ce2dd4.jpg'}} style={styles.happy}></Image> */}
        {/* <Image source={require('image!icon')} style={styles.happy}></Image> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  highScoresTitle: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  scores: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  happy: {
     // 设置背景颜色
     backgroundColor:'green',
     // 设置宽度
     width:100,
     // 设置高度
     height:150,
     // 设置图片填充模
     resizeMode:'cover'
  },

});
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  NativeModules
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class Blink extends Component{
  constructor(props) {
    super(props);
    this.state = {showText: true};
    setInterval(()=> {
      this.setState({showText: !this.state.showText});
    }, 1000);
  }
  render() {
    let display = this.state.showText ? this.props.text : '';
    return(
      <Text>{display}</Text>
    );
  }
}

class Greeting extends Component {
  render() {
    return(
      <Text>Hello {this.props.name}</Text>
    );
  }
}

type Props = {};
export default class App extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }
    onPress(){
        alert('你可拉倒吧')
        let CalendarManager = NativeModules.bridgeModel;
        CalendarManager.addEvent('Birthday Party', '4 Privet Drive, Surrey');
    };
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
      return (
        <ScrollView>
            <View style={styles.container}>
                <Image source={pic} style={{width: 193, height: 110}} />
                <Text style={styles.welcome} onPress={this.onPress}>
                    onPress事件
                    Welcome to React Native!
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit App.js
                </Text>
                <Text style={styles.instructions}>
                    {instructions}
                </Text>
                <Greeting name = '张三'/>
                <Blink text='I love to blink' />
                <Blink text='Yes blinking is so great' />
                <Blink text='Why did they ever take this out of HTML' />
                <Blink text='Look at me look at me look at me' />
                <TextInput
                    style={{height: 40}}
                    placeholder="Type here to translate!"
                    onChangeText={(text) => this.setState({text})}
                />
                <Text style={{padding: 10, fontSize: 42}}>
                    {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
                </Text>
                <Image source={require('./img/iconIaa.jpg')} />
            </View>
        </ScrollView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
import React, { Component } from 'react';
import {SafeAreaView, Image, StyleSheet, TouchableHighlight, Text } from 'react-native'
import * as Font from 'expo-font';
import color from '../styles/color'
class Welcome extends Component{
    constructor(props){
        super(props);
        this.state={}
    }
 async loadFonts(){
        await Font.loadAsync({
          'Precious': {
            uri: require('../assets/fonts/Precious.ttf'),
            display: Font.FontDisplay.FALLBACK,
          },
        });
        this.setState({ fontsLoaded: true });
      }
    
      componentDidMount() {
        this.loadFonts();
      }
    render(){
    return (
      
 <SafeAreaView style={styles.Body}>
    <TouchableHighlight style={styles.Touchable} onPress={()=>{this.props.navigation.navigate("Home")}}><Text style={styles.Txt}>RCB</Text></TouchableHighlight>
    <Image style={{width:400, height:400}}source={require('../assets/icon.png')}/>
</SafeAreaView>
    );
  };
}
const styles=StyleSheet.create({
    Body:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:color.background
    },
    Touchable:{
        marginBottom:70
    },
    Txt:{
        fontSize:80,
        fontFamily:"Precious",
        color:color.secondary
    }
})
export default Welcome;
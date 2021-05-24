import React, { Component } from 'react';
import { View, SafeAreaView , Text, Button, TextInput, StyleSheet, TouchableHighlight} from 'react-native';
import color from '../styles/color';
import * as Font from 'expo-font';
class Signup extends Component {
    state = {
        username:"",
        password:""
    }
    SignInWithGoogle=()=>{
        const provider=new GoogleAuthProvider();
    }
    async loadFonts(){
        await Font.loadAsync({
          'Heading': {
            uri: require('../assets/fonts/SourceCodePro-Medium.ttf'),
            display: Font.FontDisplay.FALLBACK,
          },
          'Normal':{
            uri: require('../assets/fonts/Montserrat-Medium.ttf'),
            display: Font.FontDisplay.FALLBACK,
          }
        });
        this.setState({ fontsLoaded: true });
      }
    
      componentDidMount() {
        this.loadFonts();
      }
    render() { 
        return (<SafeAreaView style={styles.B}><Text style={styles.H}>Sign Up to RCB application</Text><TouchableHighlight style={styles.Button}><Text style={styles.Text}>Sign Up With Google</Text></TouchableHighlight>
        <View><Text style={styles.Text}>Or Sign Up with email</Text>
        <TextInput style={styles.Input}placeholder="Email" onChangeText={(u)=>{this.setState({username:u, password:this.state.password})}}/>
        <TextInput style={styles.Input}placeholder="Password" onChangeText={(t)=>{this.setState({username:this.state.username, password:t})}}/></View>
        <TouchableHighlight style={styles.Button}><Text style={styles.Text}>Sign Up</Text></TouchableHighlight>
    </SafeAreaView>);
    }
}
const styles=StyleSheet.create({
    Button:{
        marginTop:50,
        backgroundColor:"red",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        alignContent:"center",
    },
    Text:{
        fontSize:30,
        marginTop:20,
        fontFamily:"Normal"
    },
    H:{
      fontSize:40,
      marginTop:20,
      fontFamily:"Heading",
      color:color.secondary
    },
    Input:{
        fontSize:30,
        marginTop:50
    },
    B:{
        backgroundColor:color.background,
        width:"100%",
        height:"100%",
        display:"flex",
        justifyContent:"center",
        alignContent:"space-around"
    }
})
export default Signup;
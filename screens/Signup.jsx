import React, { Component } from 'react';
import { View, SafeAreaView , Text, Button, TextInput, StyleSheet, TouchableHighlight} from 'react-native';
import color from '../styles/color';
import * as Font from 'expo-font';
import firebase from 'firebase';
import { getAuth, getRedirectResult, GoogleAuthProvider , signInWithRedirect} from "firebase/firebase-auth";
import { Prompt_600SemiBold } from '@expo-google-fonts/dev';
const firebaseConfig = {
  apiKey: "AIzaSyDsFkH0tSiIHaU5P4YLCsX9wS5C0h8ufME",
  authDomain: "club-app-52c8c.firebaseapp.com",
  databaseURL: "https://club-app-52c8c-default-rtdb.firebaseio.com",
  projectId: "club-app-52c8c",
  storageBucket: "club-app-52c8c.appspot.com",
  messagingSenderId: "728775782661",
  appId: "1:728775782661:web:580ee3f458f7f18e0c076c",
  measurementId: "G-MD4XLD9YS2"
};
if(firebase.apps.length==0){
firebase.initializeApp(firebaseConfig);
}
export default class Signup extends Component {
  constructor(props){
    super(props);
    this.state= {
      username:"",
      password:""
  };
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
        return (<SafeAreaView style={styles.B}><Text style={styles.H}>Sign Up to RCB application</Text>
        <TouchableHighlight onPress={()=>{const auth=firebase.auth();
        const provider=new firebase.auth.GoogleAuthProvider();
       firebase.auth().signInWithPopup(provider).then(
        (result) => {
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          const user = result.user;
          console.log(user);
        })
        .catch(err=>console.error(err))}} style={styles.Button}><Text style={styles.Text}>Sign Up With Google</Text></TouchableHighlight>
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
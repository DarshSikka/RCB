import React, { Component } from 'react';
import { View, SafeAreaView, StyleSheet, Text, SectionList} from 'react-native';
import color from '../styles/color';
import * as Font from 'expo-font';
import firebase from 'firebase';
class Schedule extends Component {
    state = {  }
    constructor(props){
        super(props);
        this.state={list:[]};
        this.handleData=this.handleData.bind(this);
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
    handleData(){
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
        var myArray=new Array();
      firebase.database().ref("/schdule").on('value', (snapshot)=>{
          console.log(snapshot.val());
          this.setState({list:snapshot.val()});
      });
    }
    componentDidMount(){
        this.handleData();
    }
    render() { 
        return (
            <SafeAreaView style={styles.back}>
            <Text style={styles.heading}>Schedule</Text>
            <SectionList sections={[{
                title:"Schedule",
                data:this.state.list
                }]} renderItem={({item})=><Text style={styles.item}>{item}</Text>}/>
            </SafeAreaView>
            );
    }
}
const styles=StyleSheet.create({
heading:{
    color:color.secondary,
    fontSize:40,
    fontFamily:"Heading",
},
item:{
    color:color.text,
    fontSize:30,
    marginTop:30,
    fontFamily:"Normal"
},
back:{
backgroundColor:color.background,
width:"100%",
height:"100%",
textAlign:"Center"
}
})
export default Schedule;
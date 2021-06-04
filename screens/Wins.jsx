import React,{Component} from 'react';
import { SafeAreaView, FlatList, StyleSheet, Text, View} from 'react-native'
import color from '../styles/color';
import * as Font from 'expo-font';
import firebase from 'firebase';
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
class Wins extends Component {


    state = {mainD:[]};
    get(){
      firebase.database().ref("/wins").on('value', (snapshot)=>{
      const maind=snapshot.val();
      console.log(maind);
      this.setState({mainD:maind});
      let setter=this.state.mainD;
    }
    )
    ;
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
        this.get();
      }
    render() { 
      {console.log(this.state.mainD)}
        return (<SafeAreaView style={styles.back}><Text style={styles.Heading}>Important Wins By RCB</Text>
         <View>{this.state.mainD.map(ele=><Text style={{fontSize:30}}>{ele}</Text>)}</View>
        </SafeAreaView>);
    }
    }
const styles=StyleSheet.create({
 Heading:{
     fontSize:40,
     fontFamily:"Heading"
 },
 back:{
    backgroundColor:color.background,
    height:"100%",
    textAlign:"Center"
 },
 TXT:{
     color:color.text,
     fontSize:30,
     marginTop:50,
     fontFamily:"Normal",
 }
})
export default Wins;
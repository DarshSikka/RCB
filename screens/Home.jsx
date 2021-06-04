import React, {Component} from 'react'
import { SafeAreaView, StyleSheet, Text, Button, ImageBackground, View, TouchableOpacity} from 'react-native'
import firebase from 'firebase';
import color from '../styles/color'
import * as Font from 'expo-font';
import * as Linking from 'expo-linking';
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

var arr=[];
if(firebase.apps.length==0){
firebase.initializeApp(firebaseConfig);
}
class Home extends Component {
    async loadFonts(){
        await Font.loadAsync({
          'Heading': {
            uri: require('../assets/fonts/Precious.ttf'),
            display: Font.FontDisplay.FALLBACK,
          },
          'Normal':{
            uri: require('../assets/fonts/Montserrat-Medium.ttf'),
            display: Font.FontDisplay.FALLBACK,
          },
          'Precious': {
            uri: require('../assets/fonts/Precious.ttf'),
            display: Font.FontDisplay.FALLBACK,
          }
        });
        this.setState({ fontsLoaded: true });
      }
    
      componentDidMount() {
        this.loadFonts();
      }
    constructor(props) {
        super(props);
        this.state = { val: 0 };
        this.getWins = this.getWins.bind(this);
      }
    getWins=()=>{
        var value;
        firebase.database().ref("/latestwin").on('value', (snapshot)=>{
            value=snapshot.val();
            this.setState({val:value});
            console.log(this.state.val)
        }
    )
    }
    componentDidMount=()=>{
        this.getWins();
        console.log(this.props)
    }  

    render() { 
        return(
            <SafeAreaView style={styles.Body} >
                <View style={styles.buttons}><Button color={color.secondary}onPress={()=>{this.props.navigation.navigate("Members")}} style={styles.Button}title="Members"/>
                <Button color={color.secondary}onPress={()=>{this.props.navigation.navigate("Schedule")}}title="Schedule"/>
    <Button color={color.secondary}onPress={()=>{this.props.navigation.navigate("Signup")}} style={styles.Button}title="Sign Up/In"/><Button color={color.secondary}onPress={()=>{this.props.navigation.navigate("Wins")}} style={styles.Wins}title="Wins"/></View>
             <Text style={styles.heading}>RCB</Text>
             <View style={styles.viewer}>
             <Text style={styles.item}>We Beat: {this.state.val.team}</Text>
             <Text style={styles.item}>Man of the Match:{this.state.val.motm}</Text>
             <TouchableOpacity onPress={()=>Linking.openURL(this.state.val.link)}><ImageBackground style={styles.bg} source={{uri:this.state.val.scoreboard}}><Text style={styles.thanks}>Thanks to Our team to make this possible</Text></ImageBackground></TouchableOpacity>
             <Text style={styles.n}>Breaking: {this.state.val.news}</Text>
             </View>
            </SafeAreaView>
        )
    }
}
const styles=StyleSheet.create({
    Body:{
        backgroundColor:color.background,
        width:"100%",
        height:"100%",
        display:'flex',
        flexDirection:"column",
        flex:1,
        justifyContent:"center",
        alignContent:"space-around",
        marginBottom:"50px"
    },
    viewer:{
    marginBottom:200
    },
    buttons:{
        display:'flex',
        flexDirection:"row",
        justifyContent:'space-around',
        fontFamily:"normal",
        marginBottom:80,
        marginTop:50
    },
    item:{
        marginLeft:"10%",
        marginTop:0,
        fontSize:20,
        color:"brown",
        fontFamily:"Normal"
    },
    n:{
        marginLeft:"10%",
        marginTop:20,
        fontSize:20,
        color:"brown",
        fontFamily:"Normal"
    },
    heading:{
        fontSize:80,
        fontFamily:'Precious',
        marginLeft:"25%",
        marginBottom:100,
        width:"80%",
        color:color.secondary
    },
    bg:{
        width:350,
        height:150,
        marginLeft:"4%",
        marginTop:50
    },
    thanks:{
        marginTop:20,
        marginLeft:50
    },
})
export default Home;
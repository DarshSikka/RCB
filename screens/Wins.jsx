import React,{Component} from 'react';
import { SafeAreaView, FlatList, StyleSheet, Text} from 'react-native'
import color from '../styles/color';
import * as Font from 'expo-font'
class Wins extends Component {
    state = {  }
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
        return (<SafeAreaView style={styles.back}><Text style={styles.Heading}>Important Wins By RCB</Text>
        <FlatList data={[
            {win:"IPL 2017 Runner Up"},
            {win:"IPL 2011 Runner Up"},
            {win:"IPL 2009 Runner Up"},
            {win:"abc"},
            {win:"Lorem Ipsum"},
            {win:"Cricket Contest"}

        ]
            }
            renderItem={({item})=><Text style={styles.TXT}>{item.win}</Text>}/>
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
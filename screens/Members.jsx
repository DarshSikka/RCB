import React, { Component } from 'react';
import { SafeAreaView, FlatList, Text, StyleSheet } from 'react-native'
import color from '../styles/color';
import firebase from 'firebase';
import * as Font from 'expo-font';
/*function myFunction(){

}
*/
class Members extends Component {
    state = {everything:[]}
    getEverything(){
        firebase.database().ref("/members").on('value', snapshot=>{
          this.setState({everything:snapshot.val()});
        })
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
        this.getEverything();
      }
    render() {
        return (<SafeAreaView style={styles.body}>
            <Text style={styles.heading}>Our Members</Text>
            {this.state.everything.map(ele=><Text style={{fontSize:30, marginTop:"20px"}}>{`${ele.name}:${ele.role}`}</Text>)}
        </SafeAreaView>
        );


    }
}
const styles = StyleSheet.create({
    body: {
        backgroundColor:color.background,
        height: "100%",
        display: "flex",
        flexDirection: "column"
    },
    item: {
        fontSize: 14,
        marginTop: 30,
        marginLeft: 30,
        fontFamily:"Normal",
        color:color.text
    },
    heading: {
        fontSize: 32,
        marginTop: 40,
        marginLeft: 30,
        fontFamily:"Heading",
        color:color.secondary
    }
})
export default Members;
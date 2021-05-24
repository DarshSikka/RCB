import React, { Component } from 'react';
import { SafeAreaView, FlatList, Text, StyleSheet } from 'react-native'
import color from '../styles/color'
import * as Font from 'expo-font';
class Members extends Component {
    state = {}
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
        return (<SafeAreaView style={styles.body}>
            <Text style={styles.heading}>Our Members</Text><FlatList
                data={
                    [{ name: "Virat Kohli", role: "Batsman" },
                    { name: "A.B.DeVilliers", role: "Batsman+Keeper" }
                        , { name: "Devdutt Paddikal", role: "Batsman" },
                    { name: "Yuzvendra Chahal", role: "Bowler" }, {
                        name: "Navdeep Saini", role: "Bowler"
                    },
                    {

                        name: "Washington Sundar",
                        role: "All-Rounder"
                    },
                    { name: "Mohammad Siraj", role: "Bowler" },
                    { name: "Glenn Maxwell", role: "All-Rounder" },
                    { name: "Shahbaz Ahmed", role: "Batsman" },
                {name:"Simon Katic", role: "Coach"},
                {name:"Rajesh V.Menon", role: "Manager"}]
                } renderItem={({ item }) => <Text style={styles.item}>{item.name}:{item.role}</Text>} />
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
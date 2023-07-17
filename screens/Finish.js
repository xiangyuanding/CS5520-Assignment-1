import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import colors from "../Color.js"

export default function Finish( {reset, phone, componentNum} ) {

  if (componentNum==2){
    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.text}>Thank you for signing up, here's a picture for you (based on the last digit of your phone number).</Text>
          <Image source={{uri: `https://picsum.photos/id/${phone[phone.length-1]}/100/100`}} style={{width: 100, height: 100}}/>
        </View>
        <PressButton handlePress={reset} text={"Start again"} textColor={styles.blueText} /> 
      </View>
    )
  } 
  else if (componentNum==3){
    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.text}>Sorry to see you go.</Text>
          <Image source={require("../res/Sad-Face-Emoji.png")} style={{width: 100, height: 100}}/>
        </View>
        <PressButton handlePress={reset} text={"Start again"} textColor={styles.blueText} /> 
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.transparent,
    alignItems: 'center',
    fontSize: 20,
  },
  topContainer: {
    marginTop: 50,
    backgroundColor: colors.containerBackGround,
    justifyContent: 'center',
    width: 325,
    height: 275,
    shadowColor: colors.shadowColor,
    elevation: 10,
    borderRadius: 15,
    alignItems: "center",
  },
  text: {
    fontSize: 17,
  },
  blueText: {
    fontSize: 17,
    color: "blue",
  },
  button: {
    alignItems: "center",

    padding: 10,
  },

})
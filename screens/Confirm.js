import { Pressable, StyleSheet, View, Text, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import colors from "../Color.js"
import PressButton from '../components/PressButton.js'

export default function Confirm({setCurrStatus, email, phone}) {
  return (
    <View style={styles.topContainer} >
      <Text style={styles.text}>You have entered:</Text>
      <Text style={styles.text}>{email}</Text>
      <Text style={styles.text}>{phone}</Text>
      <Text style={styles.text}>Please confirm they are correct</Text>
      <PressButton handlePress={()=>setCurrStatus(0)} text={"Go back"} textColor={styles.redText} /> 
      <PressButton handlePress={()=>setCurrStatus(2)} text={"Confirm"} textColor={styles.blueText} />     
      <PressButton handlePress={()=>setCurrStatus(3)} text={"Finish later"} textColor={styles.blueText} />  

    </View>
  )
}

const styles = StyleSheet.create({
  topContainer: {
    backgroundColor: colors.containerBackGround,
    justifyContent: 'center',
    width: 275,
    height: 400,
    shadowColor: colors.shadowColor,
    elevation: 10,
    borderRadius: 15,
  },
  text: {
    fontSize: 17,
  },
  redText: {
    fontSize: 17,
    color: "red"
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
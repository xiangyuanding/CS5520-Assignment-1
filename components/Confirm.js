import { Pressable, StyleSheet, View, Text, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import colors from "./Color.js"

export default function Confirm({setCurrStatus, email, phone}) {
  return (
    <View style={styles.topContainer} >
      <Text style={styles.text}>You have entered:</Text>
      <Text style={styles.text}>{email}</Text>
      <Text style={styles.text}>{phone}</Text>
      <Text style={styles.text}>Please confirm they are correct</Text>
      <Pressable style={({pressed}) => [
          {
            backgroundColor: pressed ? colors.pressedColor : colors.transparent,
          },
          styles.button,
        ]} onPress={()=>setCurrStatus(0)}>
        <Text style={styles.redText}>Go back</Text>
      </Pressable>
      <Pressable style={({pressed}) => [
          {
            backgroundColor: pressed ? colors.pressedColor : colors.transparent,
          },
          styles.button,
        ]} onPress={()=>setCurrStatus(2)}>
        <Text style={styles.blueText}>Confirm</Text>
      </Pressable>      
      <Pressable style={({pressed}) => [
          {
            backgroundColor: pressed ? colors.pressedColor : colors.transparent,
          },
          styles.button,
        ]} onPress={()=>setCurrStatus(3)}>
        <Text style={styles.blueText}>Finish later</Text>
      </Pressable>
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
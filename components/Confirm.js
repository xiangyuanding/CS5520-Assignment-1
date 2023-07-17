import { Pressable, StyleSheet, View, Text, TextInput, Button } from 'react-native'
import React, { useState } from 'react'

export default function Confirm({setCurrStatus, email, phone}) {
  return (
    <View style={styles.topContainer} >
      <Text style={styles.text}>You have entered:</Text>
      <Text style={styles.text}>{email}</Text>
      <Text style={styles.text}>{phone}</Text>
      <Text style={styles.text}>Please confirm they are correct</Text>
      <Pressable style={({pressed}) => [
          {
            backgroundColor: pressed ? 'rgba(146, 146, 146, 0.979)' : '#ffffff00',
          },
          styles.button,
        ]} onPress={()=>setCurrStatus(0)}>
        <Text style={styles.redText}>Go back</Text>
      </Pressable>
      <Pressable style={({pressed}) => [
          {
            backgroundColor: pressed ? 'rgba(146, 146, 146, 0.979)' : '#ffffff00',
          },
          styles.button,
        ]} onPress={()=>setCurrStatus(2)}>
        <Text style={styles.blueText}>Confirm</Text>
      </Pressable>      
      <Pressable style={({pressed}) => [
          {
            backgroundColor: pressed ? 'rgba(146, 146, 146, 0.979)' : '#ffffff00',
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
    backgroundColor: '#b5d4fdff',
    justifyContent: 'center',
    width: 275,
    height: 400,
    shadowColor: "#777676",
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
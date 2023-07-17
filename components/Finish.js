import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'

export default function Finish( {reset, phone, componentNum} ) {

  if (componentNum==2){
    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.text}>Thank you for signing up, here's a picture for you (based on the last digit of your phone number).</Text>
          <Image source={{uri: `https://picsum.photos/id/${phone[phone.length-1]}/100/100`}} style={{width: 100, height: 100}}/>
        </View>
        <Pressable style={({pressed}) => [
            {
              backgroundColor: pressed ? 'rgba(146, 146, 146, 0.979)' : '#ffffff00',
            },
            styles.button,
          ]} onPress={reset}>
          <Text style={styles.blueText}>Start again</Text>
        </Pressable>
      </View>
    )
  } 
  else if (componentNum==3){
    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.text}>Sorry to see you go.</Text>
          <Image source={require("./Sad-Face-Emoji.png")} style={{width: 100, height: 100}}/>
        </View>
        <Pressable style={({pressed}) => [
            {
              backgroundColor: pressed ? 'rgba(146, 146, 146, 0.979)' : '#ffffff00',
            },
            styles.button,
          ]} onPress={reset}>
          <Text style={styles.blueText}>Start again</Text>
        </Pressable>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0)',
    alignItems: 'center',
    fontSize: 20,
  },
  topContainer: {
    marginTop: 50,
    backgroundColor: '#b5d4fdff',
    justifyContent: 'center',
    width: 325,
    height: 275,
    shadowColor: "#777676",
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
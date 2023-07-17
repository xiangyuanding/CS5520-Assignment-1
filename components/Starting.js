import { Pressable, StyleSheet, View, Text, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import colors from "./Color.js"

export default function Starting({setCurrStatus, setEmailPhone, initEmail, initPhone}) {
  const [email, setEmail] = useState(initEmail);
  const [phone, setPhone] = useState(initPhone);
  const [emailVisable, setEmailVisable] = useState(false);
  const [phoneVisable, setPhoneVisable] = useState(false);
  function updateEmail(newText){
    setEmail(newText);
  }
  function updatePhone(newText){
    setPhone(newText);
  }
  function reset(){
    setEmail("")
    setPhone("")
  }
  function signUp(){
    var invalid = false;
    if (phone.length!==10){
      invalid=true;
      setPhoneVisable(true);
    } else{
      setPhoneVisable(false);
    }
    if (!email.includes("@") || !email.includes(".")){
      invalid=true;
      setEmailVisable(true);
    } else{
      setEmailVisable(false);
    }
    if (invalid){
      return;
    }
    setCurrStatus(1);
    setEmailPhone(email, phone);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.topText}>Sign up</Text>
      <View style={styles.topContainer}>

        <Text style={styles.text}>Email: </Text>
        <TextInput style={styles.inputContainer} onChangeText={updateEmail} value={email}/>
        {emailVisable ? (<Text style={{color:colors.hiddenText,}}>please input a valid email</Text>):(<Text></Text>)}
        
        <Text style={styles.text}>Phone number: </Text>
        <TextInput style={styles.inputContainer} onChangeText={updatePhone} value={phone}/>
        {phoneVisable ? (<Text style={{color:colors.hiddenText,}}>please input a valid phone number</Text>):(<Text></Text>)}
        <View style={styles.buttonContainer}>
          <Pressable style={({pressed}) => [
              {
                backgroundColor: pressed ? colors.pressedColor : colors.transparent,
              },
              styles.button,
            ]} onPress={reset}>
            <Text style={styles.redText}>reset</Text>
          </Pressable>
          <Pressable style={({pressed}) => [
              {
                backgroundColor: pressed ? colors.pressedColor : colors.transparent,
              },
              styles.button,
            ]} onPress={signUp}>
            <Text style={styles.blueText}>Sign up</Text>
          </Pressable>
        </View>


      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.transparent,
    alignItems: 'center',
    fontSize: 20,
  },
  topText: {
    padding: 10,
    marginTop: 40,
    marginBottom:10,
    borderWidth: 1,
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
  buttonContainer: {
    marginTop: 20,
    flexDirection: "row",
    width: 200,
    justifyContent: "space-around",
  },
  inputContainer: {
    borderBottomWidth: 1,
    padding:0,
    width: 200,

  },
  button: {
    alignItems: "center",
    borderRadius: 15,
    padding: 10,
  },
  topContainer: {
    backgroundColor: colors.containerBackGround,
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: 275,
    height: 400,
    paddingLeft: 40,
    shadowColor: colors.shadowColor,
    shadowOpacity: 5,
    elevation: 10,
    borderRadius: 15,
  },
});

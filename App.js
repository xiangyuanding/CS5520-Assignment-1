import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import Starting from './screens/Starting';
import Confirm from './screens/Confirm';
import Finish from './screens/Finish';
import { LinearGradient } from 'expo-linear-gradient';
import colors from "./Color.js"

export default function App() {
  const [currStatus, setCurrStatus] = useState(0);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  function reset(){
    setEmail("");
    setPhone("");
    setCurrStatus(0);
  }
  function setCurrStatusCallBack(status){
    setCurrStatus(status);
  }
  function setEmailPhone(email, phone){
    setEmail(email);
    setPhone(phone);
  }

  function ConditionRender({componentNum}){
    if (componentNum==0){
      return <Starting setCurrStatus={setCurrStatusCallBack} setEmailPhone={setEmailPhone} initEmail={email} initPhone={phone} />;
    }
    else if (componentNum==1){
      return <Confirm setCurrStatus={setCurrStatusCallBack} email={email} phone={phone} />;
    }
    else{
      return <Finish phone={phone} componentNum={componentNum} reset={reset}/>;
    }
  }

  return (
    <LinearGradient
        colors={[colors.top, colors.middle, colors.bottom]}
        style={styles.container}>
      <StatusBar style="auto" />
      <ConditionRender componentNum={currStatus} />
    </LinearGradient>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

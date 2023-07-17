import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import Starting from './components/Starting';
import Confirm from './components/Confirm';
import Finish from './components/Finish';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  const [currStatus, setCurrStatus] = useState(0);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  function reset(){
    setEmail("");
    setPhone("");
    setCurrStatus(0);
  }
  function setEmailPhone(email, phone){
    setEmail(email);
    setPhone(phone);
  }

  function ConditionRender({componentNum}){
    if (componentNum==0){
      return <Starting setCurrStatus={setCurrStatus} setEmailPhone={setEmailPhone} initEmail={email} initPhone={phone} />;
    }
    else if (componentNum==1){
      return <Confirm setCurrStatus={setCurrStatus} email={email} phone={phone} />;
    }
    else{
      return <Finish phone={phone} componentNum={componentNum} reset={reset}/>;
    }
  }

  return (
    <LinearGradient
        colors={['#07ee1a', '#014e24', '#0947f1']}
        style={styles.container}>
      <StatusBar style="auto" />
      <ConditionRender componentNum={currStatus} />
    </LinearGradient>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d4bbfc',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

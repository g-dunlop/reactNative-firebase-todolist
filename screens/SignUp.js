import {  Text, TextInput, View, ImageBackground, Button, TouchableOpacity, KeyboardAvoidingView, Platform} from 'react-native';
import Styles from '../styles/Styles';
import React, {useState} from 'react';
import InlineTextButton from '../components/InlineTextButton';



export default function SignUp({navigation}) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validationMessage, setValidationMessage] = useState("");

  let validateAndSet = (value, valueToCompare, setValue) => {
    if (value !== valueToCompare){
        setValidationMessage("Passwords do not match.")
    } else{
        setValidationMessage("");
    }
  }


  const localImage = require("../assets/background.jpg")
  return (
    <ImageBackground style={Styles.container} source={localImage}>
      <KeyboardAvoidingView style={Styles.backgroundCover} behaviour = {Platform.OS === "ios" ? "padding" : "height"}>
        <Text style={[Styles.lightText, Styles.header]}>Sign Up</Text>
        <Text>{validationMessage}</Text>

        <TextInput style={[Styles.lightText, Styles.lightTextInput, Styles.textInput]} placeholder="Email" value={email} onChangeText={setEmail} placeholderTextColor={'#ECECEC'}/>
        <TextInput style={[Styles.lightText, Styles.lightTextInput, Styles.textInput]} placeholder="Password" value={password} onChangeText={setPassword} placeholderTextColor={'#ECECEC'} secureTextEntry/>
        <TextInput style={[Styles.lightText, Styles.lightTextInput, Styles.textInput]} placeholder="Confirm Password" value={confirmPassword} onChangeText={setConfirmPassword} placeholderTextColor={'#ECECEC'} secureTextEntry/>

        <View style={Styles.rowContainer}>
          <Text style={Styles.lightText}>Already have an account?  </Text>
          <InlineTextButton text="Login" onPress={()=> navigation.pop()}/>
        </View>

        <TouchableOpacity style={Styles.loginButton} >
          <Text style={Styles.loginButtonText}>Sign Up</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      
    </ImageBackground>
  );
}
;

import {  Text, TextInput, View, ImageBackground, Button, TouchableOpacity, KeyboardAvoidingView, Platform} from 'react-native';
import Styles from '../styles/Styles';
import React, {useState} from 'react';
import InlineTextButton from '../components/InlineTextButton';
import { auth } from '../firebaseConfig';



export default function ResetPassword({navigation}) {

  const [email, setEmail] = useState("");
  const[errorMessage, setErrorMessage] = useState("")

  const resetPassword = () => {
    auth
    .sendPasswordResetEmail(email)
    .then(() => {
      navigation.navigate("Login")
    // Password reset email sent!
    // ..
    })
    .catch((error) => {
      
      setErrorMessage(error.message);
      // ..
    });
  }

  

  const localImage = require("../assets/background.jpg")
  return (
    <ImageBackground style={Styles.container} source={localImage}>
      <KeyboardAvoidingView style={Styles.backgroundCover} behaviour = {Platform.OS === "ios" ? "padding" : "height"}>
        <Text style={[Styles.lightText, Styles.loginHeader]}>Reset Password</Text>
        <Text style={Styles.errorText}></Text>
        <TextInput style={[Styles.lightText, Styles.lightTextInput, Styles.textInput]} placeholder="Email" value={email} onChangeText={(text)=> setEmail(text)} placeholderTextColor={'#ECECEC'}/>
        
       
        <View style={Styles.rowContainer}>
          <Text   style={Styles.lightText}>Don't have an account?  </Text>
          <InlineTextButton text="Sign Up" onPress={() => navigation.navigate("SignUp")}/>
        </View>
        <TouchableOpacity style={Styles.loginButton} onPress={resetPassword}>
          <Text style={Styles.loginButtonText}>Reset Password</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      
    </ImageBackground>
  );
}
;

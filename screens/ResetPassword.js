import {  Text, TextInput, View, ImageBackground, Button, TouchableOpacity, KeyboardAvoidingView, Platform} from 'react-native';
import Styles from '../styles/Styles';
import React, {useState} from 'react';
import InlineTextButton from '../components/InlineTextButton';



export default function ResetPassword({navigation}) {

  const [email, setEmail] = useState("");
  

  const localImage = require("../assets/background.jpg")
  return (
    <ImageBackground style={Styles.container} source={localImage}>
      <KeyboardAvoidingView style={Styles.backgroundCover} behaviour = {Platform.OS === "ios" ? "padding" : "height"}>
        <Text style={[Styles.lightText, Styles.header]}>Reset Password</Text>
        <TextInput style={[Styles.lightText, Styles.lightTextInput, Styles.textInput]} placeholder="Email" value={email} onChangeText={(text)=> setEmail(text)} placeholderTextColor={'#ECECEC'}/>
        
       
        <View style={Styles.rowContainer}>
          <Text   style={Styles.lightText}>Don't have an account?  </Text>
          <InlineTextButton text="Sign Up" onPress={() => navigation.navigate("SignUp")}/>
        </View>
        <TouchableOpacity style={Styles.loginButton} >
          <Text style={Styles.loginButtonText}>Reset Password</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      
    </ImageBackground>
  );
}
;

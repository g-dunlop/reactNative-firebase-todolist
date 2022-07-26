import {  Text, TextInput, View, ImageBackground, Button, TouchableOpacity, KeyboardAvoidingView, Platform} from 'react-native';
import Styles from '../styles/Styles';
import React, {useState} from 'react';
import InlineTextButton from '../components/InlineTextButton';



export default function Login({navigation}) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const localImage = require("../assets/background.jpg")
  return (
    <ImageBackground style={Styles.container} source={localImage}>
      <KeyboardAvoidingView style={Styles.backgroundCover} behaviour = {Platform.OS === "ios" ? "padding" : "height"}>
        <Text style={[Styles.lightText, Styles.header]}>Login</Text>
        <TextInput style={[Styles.lightText, Styles.lightTextInput, Styles.textInput]} placeholder="Email" value={email} onChangeText={(text)=> setEmail(text)} placeholderTextColor={'#ECECEC'}/>
        <TextInput style={[Styles.lightText, Styles.lightTextInput, Styles.textInput]} placeholder="Password" value={password} onChangeText={(text) => setPassword(text)} placeholderTextColor={'#ECECEC'} secureTextEntry/>
        
        <View style={Styles.rowContainer}>
          <Text style={Styles.lightText}>Don't have an account?  </Text>
          <InlineTextButton text="Sign Up" onPress={() => navigation.navigate("SignUp")}/>
        </View>

        <View style={Styles.rowContainer}>
          <Text style={Styles.lightText}>Forgotten your password?  </Text>
          <InlineTextButton text="Reset"/>
        </View>

        <TouchableOpacity style={Styles.loginButton} >
          <Text style={Styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      
    </ImageBackground>
  );
}
;

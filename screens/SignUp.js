import {  Text, TextInput, View, ImageBackground, Button, TouchableOpacity, KeyboardAvoidingView, Platform} from 'react-native';
import Styles from '../styles/Styles';
import React, {useState, useEffect} from 'react';
import InlineTextButton from '../components/InlineTextButton';
import {auth} from '../firebaseConfig';



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

    setValue(value);
  }

  useEffect (()=> {
      const unsubscribe = auth.onAuthStateChanged(user => {
          if (user){
              navigation.navigate("ToDo")
          }
      })
      return unsubscribe
  }, [])

  const handleSignUp = () => {
    if (password === confirmPassword){
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((userCredentials) => {
          auth
            .currentUser.sendEmailVerification()
            .then(() => {
              const user = userCredentials.user;
            })
            // const user = userCredentials.user;
            
            // console.log(user.email);
        })
        .catch((error) => {
            setValidationMessage(error.message);
        })
    }
  }


  const localImage = require("../assets/background.jpg")
  return (
    <ImageBackground style={Styles.container} source={localImage}>
      <KeyboardAvoidingView style={Styles.backgroundCover} behaviour = {Platform.OS === "ios" ? "padding" : "height"}>
        <Text style={[Styles.lightText, Styles.header]}>Sign Up</Text>
        <Text style={Styles.errorText}>{validationMessage}</Text>

        <TextInput style={[Styles.lightText, Styles.lightTextInput, Styles.textInput]} placeholder="Email" value={email} onChangeText={setEmail} placeholderTextColor={'#ECECEC'}/>
        <TextInput style={[Styles.lightText, Styles.lightTextInput, Styles.textInput]} placeholder="Password" value={password} onChangeText={(value)=>validateAndSet(value, confirmPassword, setPassword) } placeholderTextColor={'#ECECEC'} secureTextEntry/>
        <TextInput style={[Styles.lightText, Styles.lightTextInput, Styles.textInput]} placeholder="Confirm Password" value={confirmPassword} onChangeText={(value)=> validateAndSet(value, password, setConfirmPassword)} placeholderTextColor={'#ECECEC'} secureTextEntry/>

        <View style={Styles.rowContainer}>
          <Text style={Styles.lightText}>Already have an account?  </Text>
          <InlineTextButton text="Login" onPress={()=> navigation.navigate("Login")}/>
        </View>

        <TouchableOpacity onPress={handleSignUp}style={Styles.loginButton} >
          <Text style={Styles.loginButtonText}>Sign Up</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      
    </ImageBackground>
  );
}
;

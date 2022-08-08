import {  Text, TextInput, View, ImageBackground, Button, TouchableOpacity, KeyboardAvoidingView, Platform} from 'react-native';
import Styles from '../styles/Styles';
import React, {useState, useEffect} from 'react';
import InlineTextButton from '../components/InlineTextButton';



export default function Loading({navigation}) {

 

  const localImage = require("../assets/background.jpg")

  useEffect (()=> {
   
        setTimeout(()=> {
            navigation.replace("Login")
        }, 2000)
    }, [])

  

  return (
    <ImageBackground style={Styles.container} source={localImage}>
     

        <View style={Styles.loadingRowContainer}>
          <Text style={Styles.loadingText}>ToDo </Text>
        </View>
      
    </ImageBackground>
  );
}
;

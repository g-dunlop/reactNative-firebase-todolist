import { StatusBar } from 'expo-status-bar';
import {  Text, View, ImageBackground } from 'react-native';
import Styles from './styles/Styles';


export default function App() {

  const localImage = require("./assets/background.jpg")
  return (
    <ImageBackground style={Styles.container} source={localImage}>
      <View style={Styles.backgroundCover}>
        <Text style={Styles.lightText}>Login</Text>
      </View>
      <StatusBar style="auto" />
    </ImageBackground>
  );
}
;

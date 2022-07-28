import { StyleSheet} from 'react-native';
import { YellowBox } from 'react-native-web';

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    backgroundCover:{
      alignSelf:'stretch',
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'#000000',
      opacity:0.6,
      padding:16,
    },
    rowContainer:{
      flexDirection:'row',
      alignSelf:'stretch',
      alignItems:'center',
      justifyContent:'center',
      marginBottom:16,
    },
    rightAligned:{
      justifyContent:"flex-end",
    },
    rightMargin:{
      marginRight:4,
    },
    lightText:{
      color:'white',
      fontSize:16,
    },
    errorText:{
      color:'red',
    },
    header:{
      fontSize:32,
    },
    textInput:{
      alignSelf:'stretch',
      padding:10,
      borderBottomWidth:2,
      marginVertical:8,
    },
    lightTextInput:{
      borderBottomColor:'#ffffff',
    },
    inlineTextButton:{
      color: '#b2d8d8',
      fontSize:20,
    },
    pressedInlineTextButton:{
      color: '#b2d8d8',
      opacity:0.6,
      fontSize:20,
    },
    loginButton:{
      padding:5,
      borderRadius:10,
     
    },
    loginButtonText:{
      color:'yellow',
      fontSize:26,
    },
    logoutButton:{
      padding:5,
      borderRadius:10,
     
    },
    logoutButtonText:{
      color:'red',
      fontSize:26,
    },
    
});
import { StyleSheet} from 'react-native';


export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    loadingText:{
      fontFamily: 'RockSalt',
      fontSize:60,
      color:'#10A5A5',
      opacity:0.55,
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
    leftAligned:{
      justifyContent:"flex-start",
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
      fontWeight:'bold',
    },
    textInput:{
      alignSelf:'stretch',
      padding:12,
      borderBottomWidth:2,
      marginVertical:8,
    },
    lightTextInput:{
      borderBottomColor:'#ffffff',
    },
    inlineTextButton:{
      color: '#b2d8ff',
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
      color:'#405343',
      fontSize:20,
      backgroundColor:'white',
      paddingHorizontal:10,
      paddingVertical: 5,
      borderRadius:10,
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
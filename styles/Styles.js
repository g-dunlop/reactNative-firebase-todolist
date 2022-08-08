import { StyleSheet} from 'react-native';


export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    navContainer:{
      position:'absolute',
      flexDirection:'row',
      justifyContent:'space-evenly',
      alignItems:'center',
      bottom:0,
      width:'100%',
      paddingVertical:10,
      backgroundColor:'grey',
    },
    navButton:{
      paddingHorizontal:20,
      height:50,
      backgroundColor:'white',
      borderRadius:5,
      justifyContent:'center',
    },
    
    flatListContainer:{
      backgroundColor:'pink',
      borderRadius:10,
      alignSelf:'stretch',
      flexDirection:'row',
      padding:10,
      
      marginHorizontal:20,
      // maxHeight:400,
      
    },
    addButton:{
      borderRadius:100,
      backgroundColor:"#63CCCC",
      marginVertical:20,
      width:50,
      height:50,
      alignSelf:'center',
    },
    addButtonText:{
      color:'white',
      fontSize:35,
      alignSelf:'center',
    },
    loadingText:{
      fontFamily: 'RockSalt',
      fontSize:60,
      color:'#10A5A5',
      opacity:0.55,
    },
    loadingRowContainer:{
      flexDirection:'row',
      alignSelf:'stretch',
      alignItems:'center',
      justifyContent:'center',
      marginBottom:16,
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
      marginBottom:16,
    },
    topRowContainer:{
      justifyContent:'space-between',
    },
    rightAligned:{
      justifyContent:"flex-end",
    },
    centerAligned:{
      justifyContent:'center'
    },
    leftAligned:{
      justifyContent:"flex-start",
      paddingLeft:20,
    },
    rightMargin:{
      marginRight:4,
    },
    lightText:{
      color:'white',
      fontSize:16,
    },
    listText:{
      fontFamily: 'RockSalt',
      fontSize:20,
    },
    errorText:{
      color:'red',
    },
    header:{
      fontSize:30,
      marginBottom:10,
      fontWeight:'bold',
      fontFamily:'Roboto',
      color:'#27ACAC',
    },
    loginHeader:{
      fontSize:30,
      marginBottom:10,
      fontWeight:'bold',
      fontFamily:'Roboto',
      color:'white',
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
    deleteItemButton:{
      fontSize:10,

    },
    toDoItemText:{
      fontSize:20,
      fontFamily:'RockSalt',
    },
    modalButton:{
      backgroundColor:"#27ACAC",
      
      padding:5,
      margin:1,
      borderRadius:5,
    },
    modalButtonText:{
      color:'white',
      fontWeight:'bold',
    }
    
});
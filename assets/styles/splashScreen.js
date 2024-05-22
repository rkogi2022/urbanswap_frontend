import { StyleSheet } from "react-native";


export const splashScreenStyles = StyleSheet.create({
    container: {
      flex: 1, 
      justifyContent: 'center',
      alignItems: 'center',
    },
    linearGradient: {
      flex: 1,
    },
    content: {
      flex: 1, 
      justifyContent: 'flex-end', 
      alignItems: 'center',
    },
    logo: {
      width: '100%', 
    },
    text: {
      fontSize: 34,
      color: 'white',
      fontWeight: 'bold',
    },
    upperComponent :{
      zIndex:1,
      alignItems: 'center',
      justifyContent:'center',
      paddingBottom:470,
      position:'absolute',
    }
  });
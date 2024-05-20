import { StyleSheet } from "react-native";


export const loginStyles = StyleSheet.create({
    container: {
      paddingTop: 75,
      paddingHorizontal: 20,
      backgroundColor: '#fff',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 40,
    },
    spread: {
      marginTop: 16,
      flexDirection: 'row',
      paddingBottom: 40,
    },
    paragraphOne: {
      fontWeight: '400',
      fontSize: 16,
    },
    paragraphTwo: {
      marginLeft: 1,
      color: '#2450C8',
      fontWeight: 'bold',
    },
    inputContainer: {
      paddingBottom: 20,
    },
    label: {
      fontSize: 18,
      marginBottom: 5,
      fontWeight: '600',
      color: 'black',
    },
    phoneInputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 5,
      paddingHorizontal: 10,
      height:50
    },
    countryCode: {
      color: 'black',
      paddingRight: 5,
      fontWeight: 'bold',
    },
    phoneInput: {
      flex: 1,
    },
    asterisk:{
      color:"#0008C8"
    }
  
  });
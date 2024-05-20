import { StyleSheet } from "react-native";

export const createAccountStyles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 20,
      paddingTop: 40,
      backgroundColor: '#fff',
    },
    message: {
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 40,
    },
    haveAccount: {
      fontWeight: '400',
      paddingTop: 10,
      paddingBottom:30,
      fontSize: 16,
    },
    loginLink: {
      color: '#0041BF',
    },
    label: {
      fontSize: 18,
      marginBottom: 5,
      fontWeight: '400',
      color: 'black',
    },
    inputContainer: {
      flexDirection: 'row', 
      alignItems: 'center',
    },
    row: {
      flexDirection: 'row',
      justifyContent:'space-between',
      marginBottom: 20,
      display :'flex'
    },
    inputWrapper: {
      flex: 1,
    },
    inputLabel: {
      fontWeight: '400',
      fontSize: 18,
      marginTop:10
    },
    fname: {
      width: '90%',
      height: 40,
      borderWidth: 1,
      paddingHorizontal: 10,
      borderColor: '#ccc',
      borderRadius: 10,
      marginTop:20,
      paddingLeft: 30,
    },
    noteContainer:{
      textAlign: 'center',
    },
    note: {
      fontSize: 14,
      
      marginTop: 15,
      fontWeight:'400',
      color:'C2C2C2'
    },
    socialIconsContainer: {
      display:'flex',
      flexDirection:'row',
      justifyContent: 'space-evenly',
      paddingTop: 30,
    },
    socialIcon: {
      alignItems: 'center', 
      justifyContent: 'center', 
      height: 50, 
      width: 90, 
      borderColor: '#D1D1D1', 
      borderWidth: 1,
      padding: 10,
      borderRadius: 5, 
    },
    asterisk:{
      color:"#0008C8"
    }
    
  });
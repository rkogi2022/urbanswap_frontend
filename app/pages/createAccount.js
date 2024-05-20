import CountryInputBox from '@/components/countryInputBox';
import CustomPressableButton from '@/components/customButton';
import PlainInputBox from '@/components/plainInputBox';
import React, { useEffect, useRef, useState } from 'react';

import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import Svg, { Path } from "react-native-svg"

import { useNavigation } from '@react-navigation/native';




import {createAccountStyles} from '../../assets/styles/createAccount';


import * as Google from "expo-auth-session/providers/google";
import AsyncStorage from "@react-native-async-storage/async-storage";


import {FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';


import firebase from 'firebase/compat/app'





const CreateAccount = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');



  const [token, setToken] = useState("");
  const [userInfo, setUserInfo] = useState(null);

  const [code, setCode] = useState('')
  const [verificationId, setVerificationId] = useState(null)
  const recaptchaVerifier = useRef(null)

  const navigation = useNavigation();
  

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: "53365118076-bhlbrj6j4v48v4eme8fa8oa58nmueusm.apps.googleusercontent.com",
    iosClientId: "",
    webClientId: "53365118076-nkh99gu2nu868p84ojm8j0l479p4nqod.apps.googleusercontent.com",
  });

 
  

  async function handleEffect() {
    const user = await getLocalUser();
    console.log("user", user);
    if (!user) {
      if (response?.type === "success" && response.authentication) {
        getUserInfo(response.authentication.accessToken);
    }
    
    } else {
      setUserInfo(user);
      console.log("loaded locally");
    }
  }
  const getLocalUser = async () => {
    const data = await AsyncStorage.getItem("@user");
    if (!data) return null;
    return JSON.parse(data);
  };

  const getUserInfo = async (token) => {
    if (!token) return;
    try {
      const response = await fetch(
        "https://www.googleapis.com/userinfo/v2/me",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const user = await response.json();
      await AsyncStorage.setItem("@user", JSON.stringify(user));
      setUserInfo(user);
    } catch (error) {
      // Add your own error handler here
    }
  };



  
  const sendVerification = () => {
    const phoneProvider = new firebase.auth.PhoneAuthProvider();
    phoneProvider.verifyPhoneNumber(phoneNumber, recaptchaVerifier.current)
      .then((verificationId) => {
        setVerificationId(verificationId);
        setPhoneNumber(''); 
        navigation.navigate('OtpPage', {
          firstName: firstName,
          lastName: lastName,
          email: email,
          phoneNumber: phoneNumber,
          verificationId : verificationId
        });
      })
      .catch((error) => {
        console.error('Error sending verification:', error);
        // Handle error
      });
  };

  
  
  return (
    <View style={createAccountStyles.container}>

      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={firebase.apps.length ? firebase.app().options : undefined} // Pass Firebase configuration directly
      />
     

      <Text style={createAccountStyles.message}>Create your account</Text>
      
      <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
        <Text style={createAccountStyles.haveAccount}>
          Have an account? <Text style={createAccountStyles.loginLink}>Login</Text>
        </Text>
      </TouchableOpacity>
      


      {/* Phone Number */}
      <Text style={createAccountStyles.label}>Phone Number
      {}  <Text style={createAccountStyles.asterisk}>*</Text>
      </Text>
      <View style={createAccountStyles.inputContainer}>
       
        <CountryInputBox placeholder="0700000000" keyboardType="phone-pad"  onChangeText={setPhoneNumber}/>

      </View>
      

      {/* Email Address */}
      <Text style={createAccountStyles.label}>Email Address
      {}  <Text style={createAccountStyles.asterisk}>*</Text>
      </Text>
      
      <PlainInputBox placeholder="example@gmail.com" keyboardType="email-address" onChangeText={setEmail} />


      {/* First Name and Last Name */}

     {/* First Name and Last Name */}
     <View style={createAccountStyles.row}>
        <View style={[createAccountStyles.inputWrapper, { marginRight: 10 }]}>
          <Text style={createAccountStyles.label}>First Name {} <Text style={createAccountStyles.asterisk}>*</Text></Text>
          <PlainInputBox placeholder="enter first name" keyboardType="default" onChangeText={setFirstName} />
        </View>
        <View style={createAccountStyles.inputWrapper}>
          <Text style={createAccountStyles.label}>Last Name <Text style={createAccountStyles.asterisk}>*</Text></Text>
          <PlainInputBox placeholder="enter last name" keyboardType="default" onChangeText={setLastName} />
        </View>
      </View>
      
      
      {/* Submit Button */}
      <CustomPressableButton title="Create account" onPress={sendVerification} showIcon={false} />

      
      <Text style={[createAccountStyles.note, {textAlign: 'center'}]}>or sign up with</Text>


      {/* social icons */}
      <View style={createAccountStyles.socialIconsContainer}>
      <TouchableOpacity style={createAccountStyles.socialIcon} onPress={() => {
        promptAsync()
      }}>
        <Svg width="24" height="25" viewBox="0 0 24 25" fill="none" >
          <Path d="M22.56 12.582C22.56 11.802 22.49 11.052 22.36 10.332H12V14.592H17.92C17.66 15.962 16.88 17.122 15.71 17.902V20.672H19.28C21.36 18.752 22.56 15.932 22.56 12.582Z" fill="#4285F4"/>
          <Path d="M11.9999 23.332C14.9699 23.332 17.4599 22.352 19.2799 20.672L15.7099 17.902C14.7299 18.562 13.4799 18.962 11.9999 18.962C9.13993 18.962 6.70993 17.032 5.83993 14.432H2.17993V17.272C3.98993 20.862 7.69993 23.332 11.9999 23.332Z" fill="#34A853"/>
          <Path d="M5.84 14.422C5.62 13.762 5.49 13.062 5.49 12.332C5.49 11.602 5.62 10.902 5.84 10.242V7.40198H2.18C1.43 8.88198 1 10.552 1 12.332C1 14.112 1.43 15.782 2.18 17.262L5.03 15.042L5.84 14.422Z" fill="#FBBC05"/>
          <Path d="M11.9999 5.71203C13.6199 5.71203 15.0599 6.27203 16.2099 7.35203L19.3599 4.20203C17.4499 2.42203 14.9699 1.33203 11.9999 1.33203C7.69993 1.33203 3.98993 3.80203 2.17993 7.40203L5.83993 10.242C6.70993 7.64203 9.13993 5.71203 11.9999 5.71203Z" fill="#EA4335"/>
        </Svg>
      </TouchableOpacity>

      <TouchableOpacity style={createAccountStyles.socialIcon}>
      <Svg width="20" height="25" viewBox="0 0 20 25" fill="none" >
        <Path d="M19.3613 8.51445C19.2188 8.62246 16.7031 10.0074 16.7031 13.0869C16.7031 16.6489 19.9042 17.909 20 17.9402C19.9853 18.017 19.4915 19.666 18.3122 21.3461C17.2608 22.8247 16.1626 24.3008 14.4921 24.3008C12.8215 24.3008 12.3916 23.3527 10.4631 23.3527C8.58371 23.3527 7.91549 24.332 6.38742 24.332C4.85935 24.332 3.79315 22.9639 2.56725 21.2837C1.14728 19.3107 0 16.2456 0 13.3365C0 8.67046 3.10527 6.19582 6.16141 6.19582C7.78528 6.19582 9.13893 7.23752 10.1585 7.23752C11.1289 7.23752 12.6422 6.13341 14.4896 6.13341C15.1898 6.13341 17.7054 6.19582 19.3613 8.51445ZM13.6126 4.15801C14.3766 3.27233 14.9171 2.0434 14.9171 0.814479C14.9171 0.644062 14.9023 0.471245 14.8704 0.332031C13.6273 0.377636 12.1484 1.14091 11.2566 2.15141C10.5564 2.92909 9.90296 4.15801 9.90296 5.40374C9.90296 5.59096 9.9349 5.77818 9.94964 5.83818C10.0283 5.85258 10.156 5.86938 10.2837 5.86938C11.3991 5.86938 12.8019 5.13971 13.6126 4.15801Z" fill="black"/>
      </Svg>
      </TouchableOpacity>

        <TouchableOpacity style={createAccountStyles.socialIcon}>
        <Svg width="24" height="25" viewBox="0 0 24 25" fill="none">
        <Path d="M24.0005 12.332C24.0005 5.70447 18.6278 0.331787 12.0002 0.331787C5.37269 0.331787 0 5.70447 0 12.332C0 18.3217 4.38831 23.2862 10.1252 24.1865V15.8008H7.07827V12.332H10.1252V9.68823C10.1252 6.68066 11.9168 5.01939 14.6579 5.01939C15.9708 5.01939 17.3441 5.25376 17.3441 5.25376V8.20695H15.8309C14.3402 8.20695 13.8753 9.13198 13.8753 10.081V12.332H17.2035L16.6714 15.8008H13.8753V24.1865C19.6122 23.2862 24.0005 18.3217 24.0005 12.332Z" fill="#1877F2"/>
        <Path d="M16.6715 15.8009L17.2036 12.3321H13.8754V10.081C13.8754 9.132 14.3403 8.20697 15.831 8.20697H17.3442V5.25378C17.3442 5.25378 15.9709 5.01941 14.658 5.01941C11.9168 5.01941 10.1253 6.68068 10.1253 9.68825V12.3321H7.07837V15.8009H10.1253V24.1865C10.7456 24.2837 11.3725 24.3325 12.0003 24.3323C12.6382 24.3323 13.2644 24.2824 13.8754 24.1865V15.8009H16.6715Z" fill="white"/>
        </Svg>
        </TouchableOpacity>
      </View>

    

    </View>
  );
}




export default CreateAccount;

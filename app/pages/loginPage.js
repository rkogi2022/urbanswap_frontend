import CountryInputBox from '@/components/countryInputBox';
import CustomPressableButton from '@/components/customButton';
import { useNavigation } from '@react-navigation/native';


import {loginStyles} from '../../assets/styles/login';

import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import firebase from 'firebase/compat/app';

import {FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';


const Loginpage = () => {

  const [phoneNumber, setPhoneNumber] = useState('')
  const [code, setCode] = useState('')
  const [verificationId, setVerificationId] = useState(null)
  const recaptchaVerifier = useRef(null)
  const navigation = useNavigation();

    const navigateRegister = () => {
        navigation.navigate('Register');
    };
    const navigateOtp = () => {
        navigation.navigate('OtpPage');
    };

 
  const loginVerification = () => {
    const phoneProvider = new firebase.auth.PhoneAuthProvider();
    phoneProvider.verifyPhoneNumber(phoneNumber, recaptchaVerifier.current)
      .then((verificationId) => {
        setVerificationId(verificationId);
        setPhoneNumber(''); 
        navigation.navigate('OtpPage', {
          verificationId : verificationId
        });
      })
      .catch((error) => {
        console.error('Error sending verification:', error);
      });
  };
  

  return (
    <View style={loginStyles.container}>

      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={firebase.apps.length ? firebase.app().options : undefined} // Pass Firebase configuration directly
      />
     

      <Text style={loginStyles.title}>Login to your account</Text>
      <View style={loginStyles.spread}>
        <Text style={loginStyles.paragraphOne}>Don't have an account? </Text>
        <TouchableOpacity onPress={navigateRegister}>
          <Text style={loginStyles.paragraphTwo}>Create account</Text>
        </TouchableOpacity>
      </View>
      <View style={loginStyles.inputContainer}>
      <Text style={loginStyles.label}>Phone Number
      {}  <Text style={loginStyles.asterisk}>*</Text>
      </Text>

        <CountryInputBox placeholder="0700123456" onChangeText={setPhoneNumber} keyboardType="default" />

      </View>
      <CustomPressableButton title="Continue" onPress={loginVerification} showIcon={true} />
      
    </View>
  );
}



export default Loginpage;

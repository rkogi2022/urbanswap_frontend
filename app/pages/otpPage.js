import React, { useState, useEffect, useRef } from 'react';
import { View, TextInput, Text, Alert } from 'react-native';
import CustomPressableButton from '@/components/customButton';
import { useNavigation, useRoute } from '@react-navigation/native';
import { otpStyles } from '../../assets/styles/otpStyles';
import firebase from 'firebase/compat/app';
import * as SecureStore from 'expo-secure-store';


const OtpScreen = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']); // State to store OTP input
  const [verificationId, setVerificationId] = useState(null);

  const navigation = useNavigation();
  const route = useRoute();

  const inputRefs = useRef([]);

  const { firstName, lastName, email, phoneNumber } = route.params;

  useEffect(() => {
    if (route.params && route.params.verificationId) {
      setVerificationId(route.params.verificationId);
    }
  }, [route.params]);

 
  // Function to handle OTP change
  const handleOtpChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move focus to next input if available
    if (value && index < otp.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleSubmit = () => {
    const code = otp.join('');
    const credential = firebase.auth.PhoneAuthProvider.credential(verificationId, code);
  
    firebase.auth().signInWithCredential(credential)
      .then((userCredential) => {
        setOtp(['', '', '', '', '', '']); // Clear OTP input
  
        userCredential.user.getIdToken()
          .then((token) => {
            console.log('Auth token:', token);
  
            // Check if navigation originated from the register page
            const isFromRegister = route.params && route.params.fromRegister;
  
            if (isFromRegister) {
              // Proceed with sending data to the backend
              const endpoint = 'https://677b-197-232-87-139.ngrok-free.app/api/customers';
              const data = {
                firstName: route.params.firstName,
                lastName: route.params.lastName,
                email: route.params.email,
                phoneNumber: route.params.phoneNumber,
                firebaseUID: userCredential.user.uid 
              };
  
              // Log the data before sending it to the API
              console.log('Data sent to API:', data);
  
              // Fetch request without headers
              fetch(endpoint, {
                method: 'POST',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
              })
              .then(async response => {
                if (response.status == 200) {
                  const responseData = await response.json();
                  console.log('API Response:', responseData);
                  Alert.alert('Success', 'User registered and logged in successfully.');
                  SecureStore.setItemAsync('authToken', token);
                  navigation.navigate('home');
                } else {
                  throw new Error('Network response was not ok');
                }
              })
              .catch(error => {
                console.error('Error sending data to API:', error);
                // Handle error (e.g., show an alert to the user)
                Alert.alert('Error', 'Failed to send data to API. Please try again later.');
              });
            } else {

              SecureStore.setItemAsync('authToken', token);
              navigation.navigate('home');
           

               }
          })
          .catch((error) => {
            console.error('Error getting user token:', error);
          });
      })
      .catch((error) => {
        console.error('Error handling login:', error);
        alert(error);
      });
  };
  
  
  
  

  return (
    <View style={otpStyles.container}>
      <Text style={otpStyles.title}>Welcome Back, {firstName}</Text>
      <Text style={otpStyles.subtitle}>Enter the 6-digit code sent to you on {phoneNumber}</Text>
      {/* OTP input boxes */}
      <View style={otpStyles.inputContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            style={otpStyles.input}
            maxLength={1}
            value={digit}
            keyboardType="phone-pad"
            onChangeText={(text) => handleOtpChange(index, text)}
            ref={(ref) => (inputRefs.current[index] = ref)}
          />
        ))}
      </View>

      {/* Submit button */}
      <CustomPressableButton title="Continue" onPress={handleSubmit} showIcon={true} />
    </View>
  );
};

export default OtpScreen;

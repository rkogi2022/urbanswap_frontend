import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, Alert } from 'react-native';
import CustomPressableButton from '@/components/customButton';
import { useNavigation, useRoute } from '@react-navigation/native';
import { otpStyles } from '../../assets/styles/otpStyles';
import firebase from 'firebase/compat/app';

const OtpScreen = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']); // State to store OTP input
  const [verificationId, setVerificationId] = useState(null);

  const navigation = useNavigation();
  const route = useRoute();
  console.log('Route params:', route.params); // Log route params

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
  };

  // Function to handle OTP submission
  // Function to handle OTP submission
const handleSubmit = () => {
    const code = otp.join(''); // Combine OTP digits into a single string
    // Process the OTP code
    console.log('OTP:', code);
  
    const credential = firebase.auth.PhoneAuthProvider.credential(
      verificationId,
      code
    );
    firebase.auth().signInWithCredential(credential)
      .then((userCredential) => {
        setOtp(['', '', '', '', '', '']); // Clear OTP input
        navigation.navigate('home');
  
        // Get the user's token
        userCredential.user.getIdToken()
          .then((token) => {
            console.log('User token:', token);
            // You can use the token here as needed
          })
          .catch((error) => {
            console.error('Error getting user token:', error);
          });
      })
      .catch((error) => {
        //show an alert incase of error
        alert(error);
      });
    Alert.alert(
      'Login Successful. Welcome to dashboard',
    );
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
          />
        ))}
      </View>

      {/* Submit button */}
      <CustomPressableButton title="Continue" onPress={handleSubmit} showIcon={true} />
    </View>
  );
};

export default OtpScreen;

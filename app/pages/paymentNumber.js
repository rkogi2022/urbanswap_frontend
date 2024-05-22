import CustomPressableButton from '@/components/customButton';
import React, { useEffect } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import { checkTokens } from '@/functions/ValidateAuthentication';
import {paymentNumberStyles} from'@/assets/styles/paymentNumber';

export default function MyPage() {

  useEffect(() => {
    checkAndRedirect();
  }, []);



  const checkAndRedirect = async () => {
    const hasTokens = await checkTokens();
    if (!hasTokens) {
        navigation.navigate('LoginScreen'); 
    }
  };

  const handleSubmit =()=>{

  }

  return (
    <View style={paymentNumberStyles.container}>
      <Text style={paymentNumberStyles.backText}>&lt; {} Back {}</Text>
      <View>
        <Text style={paymentNumberStyles.buyText}>Buy airtime</Text>
        <Text style={paymentNumberStyles.word}>Enter number to pay from</Text>
       
        <TextInput
                style={paymentNumberStyles.input}
                placeholder="Enter phone number"
                keyboardType="phone-pad"
          />

        <CustomPressableButton title="Pay Ksh. 200" onPress={handleSubmit} showIcon={false} />
      </View>
    </View>
  );
}

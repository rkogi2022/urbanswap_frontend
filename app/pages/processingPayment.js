// processing payments
import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

const ProcessingPaymentScreen = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="blue" />
      <Text style={styles.text}>Processing Payment</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginTop: 20,
    fontSize: 18,
    color: 'blue',
  },
});

export default ProcessingPaymentScreen;
// payment was successful
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PaymentSuccessScreen = () => {
  return (
    <View style={styles.container}>
      {/* Row 1 */}
      <View style={styles.row}>
        <Text style={styles.emoji}>🎊</Text>
      </View>
      
      {/* Row 2 */}
      <View style={styles.row}>
        <Text style={styles.successText}>Payment Successful</Text>
      </View>
      
      {/* Row 3 */}
      <View style={styles.row}>
        <Text>Your airtime purchase was processed successfully.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    marginBottom: 10,
  },
  emoji: {
    fontSize: 40,
  },
  successText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4CAF50', // Lighter shade of green
  },
});

export default PaymentSuccessScreen;
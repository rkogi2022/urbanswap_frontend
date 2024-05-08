import React from 'react';
import { StyleSheet, View, Text } from 'react-native'; // Import Text from react-native

const PaymentNumber = () => {
    return (
        <View style={styles.container}>
            <Text>Payment Number</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default PaymentNumber;

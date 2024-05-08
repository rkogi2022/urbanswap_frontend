import React from 'react';
import { StyleSheet, View, Text } from 'react-native'; // Import Text from react-native

const services = () => {
    return (
        <View style={styles.container}>
            <Text>Services Page</Text>
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

export default services;

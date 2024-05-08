import React from 'react';
import { StyleSheet, View, Text } from 'react-native'; // Import Text from react-native

const SplashScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Splash Screen</Text>
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

export default SplashScreen;

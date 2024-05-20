import React from 'react';
import { StyleSheet, View, Text } from 'react-native'; // Import Text from react-native

const AccountPage = () => {
    return (
        <View style={styles.container}>
            <Text>Account page</Text>
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

export default AccountPage;

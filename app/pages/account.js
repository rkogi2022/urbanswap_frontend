import CustomPressableButton from '@/components/customButton';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable } from 'react-native';
import { StyleSheet, View, Text } from 'react-native'; // Import Text from react-native
import * as SecureStore from 'expo-secure-store';




const AccountPage = () => {


const navigation = useNavigation();

const logout = async () => {
    try {
        // Clear the token
        await SecureStore.deleteItemAsync('authToken');
        // Navigate the user to the login screen
        navigation.navigate('LoginScreen');
    } catch (error) {
        console.error('Error logging out:', error);
        // Handle error if necessary
    }
}


    return (
        <View style={styles.container}>
           <Pressable  >
           <CustomPressableButton title="Logout" onPress={logout} showIcon={false} />
        </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center', // Center items vertically
        paddingHorizontal: 20,
    },
  
  });

export default AccountPage;

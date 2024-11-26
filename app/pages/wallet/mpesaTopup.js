import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import handleTopupWallet from '@/functions/walletTopup'

import { useEffect, useState } from 'react';
import { RadioButton } from 'react-native-paper'; 
import { checkTokens } from '@/functions/ValidateAuthentication';
import { useNavigation } from '@react-navigation/native';

const MpesaTopup = () => {
    const navigation = useNavigation();

    useEffect(() => {
        checkAndRedirect();
    }, []);


    const checkAndRedirect = async () => {
        const hasTokens = await checkTokens();
        if (!hasTokens) {
            navigation.navigate('LoginScreen');
        }
    };
    const navigateToAddPaymentMethod = () =>{
    navigation.navigate('AddPaymentMethod'); 
}
const navigateUrbanWallet = () =>{
    navigation.navigate('UrbanWallet'); 
}
    return (
        <ScrollView contentContainerStyle={styles.container}>
            {/* Back Feature */}
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Text style={styles.backText}>&lt; {} Back {}</Text>
            </TouchableOpacity>

            {/* M-Pesa Topup Heading */}
            <Text style={styles.heading}>M-Pesa Topup</Text>

            {/* Enter your M-Pesa number */}
            <Text style={styles.description}>Enter your M-Pesa number</Text>

            {/* Enter Phone Number */}
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter phone number"
                    keyboardType="phone-pad"
                />
            </View>

            {/* Top Up Button */}
            <TouchableOpacity onPress={navigateUrbanWallet} style={styles.topUpButton}>
                <Text style={styles.topUpButtonText}>Top up</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#fff',
        padding: 16,
        paddingBottom: 30, // added padding to ensure there's enough space at the bottom
    },
    backButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 16,
    },
    backText: {
        fontFamily: 'Product Sans',
        fontSize: 16,
        color: '#000',
        marginLeft: 8,
    },
    heading: {
        marginTop: 24,
        fontFamily: 'Product Sans',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 24,
        lineHeight: 29,
        color: '#003D8E',
    },
    description: {
        marginTop: 16,
        fontFamily: 'Product Sans',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 19,
        color: '#000000',
    },
    inputContainer: {
        marginTop: 16,
        backgroundColor: '#F1F1F1',
        borderRadius: 8,
        padding: 16,
    },
    input: {
        width: '100%',
        fontFamily: 'Product Sans',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 16, // adjusted font size for better readability
        lineHeight: 19,
        color: '#525252',
    },
    topUpButton: {
        backgroundColor: '#003D8E',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 16,
        borderRadius: 8,
        elevation: 3,
        height: 50,
        width: '100%', 
        top: 450,
    },
    topUpButtonText: {
        fontSize: 16,
        color: 'white',
        fontWeight: '600',
        letterSpacing: 0.25,
        marginLeft: 16, // Adjust spacing between text and icon
    },
});

export default MpesaTopup;

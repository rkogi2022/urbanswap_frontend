import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { useEffect, useState } from 'react';
import { checkTokens } from '@/functions/ValidateAuthentication';
import { useNavigation } from '@react-navigation/native';

const EditMpesa = () => {
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
            <TouchableOpacity style={styles.backButton} onPress={navigateToAddPaymentMethod}>
                <Text style={styles.backText}>&lt; {} Back {}</Text>
            </TouchableOpacity>

            <View style={styles.content}>
                {/* Mpesa Account Heading */}
                <Text style={styles.title}>Edit M-Pesa Number</Text>

                {/* Heading */}
                <Text style={styles.heading}>Enter phone number</Text>

                {/* Phone Number Input */}
                <View style={styles.inputContainer}>
                    <TextInput style={styles.input} placeholder="0722 111 467" keyboardType="phone-pad" />
                </View>

                {/* Submit Button */}
                <TouchableOpacity onPress={navigateUrbanWallet} style={styles.submitButton}>
                    <Text style={styles.submitText}>Save</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#fff',
        padding: 16,
    },
    backButton: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 0,
        gap: 8,
    },
    backText: {
        fontFamily: 'Product Sans',
        fontSize: 16,
        color: '#000',
    },
    content: {
        marginTop: 40,
    },
    title: {
        fontFamily: 'Product Sans',
        fontWeight: '700',
        fontSize: 24,
        lineHeight: 29,
        color: '#003D8E',
        marginBottom: 16,
    },
    heading: {
        fontFamily: 'Product Sans',
        fontSize: 16,
        lineHeight: 19,
        color: '#000000',
        marginBottom: 8,
    },
    inputContainer: {
        width: 357,
        height: 51,
        borderWidth: 1,
        borderColor: '#E5E5E5',
        borderRadius: 8,
        justifyContent: 'center',
        paddingHorizontal: 16,
        backgroundColor:'#F1F1F1',

    },
    input: {
        fontFamily: 'Product Sans',
        fontSize: 16,
        color: '#000',
    },
    submitButton: {
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
        top: 480,       
        
    },
    submitText: {
        fontSize: 16,
        color: 'white',
        fontWeight: '600',
        letterSpacing: 0.25,
        marginLeft: 16, // Adjust spacing between text and icon
    },
});

export default EditMpesa;

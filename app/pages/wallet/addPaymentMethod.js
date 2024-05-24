import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { useEffect, useState } from 'react';
import { checkTokens } from '@/functions/ValidateAuthentication';
import { useNavigation } from '@react-navigation/native';

const AddPaymentMethod = () => {
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

    const navigateToAddCard = () =>{
    navigation.navigate('AddCard'); 
}
    const navigateToAddMpesa = () =>{
      navigation.navigate('AddMpesa'); 
  }
  const navigateToAddPaypal = () =>{
    navigation.navigate('AddPaypal'); 
}
    return (
        <ScrollView contentContainerStyle={styles.container}>
            {/* Back Feature */}
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Text style={styles.backText}>&lt; {} Back {}</Text>
            </TouchableOpacity>

            {/* Add Payment Method Heading */}
            <Text style={styles.heading}>Add payment method</Text>

            {/* Description */}
            <Text style={styles.description}>Add funds to your urban wallet to transact easily.</Text>

            {/* Payment Methods */}
            <View style={styles.paymentMethodsContainer}>
                <TouchableOpacity onPress={navigateToAddCard} style={styles.paymentMethod}>
                    <Text style={styles.paymentMethodText}>
                        <Icon name="card-outline" size={20}  color="#000000;" />Credit card</Text>
                    <Icon name="chevron-forward" size={16} color="#000" />
                </TouchableOpacity>
                <TouchableOpacity onPress={navigateToAddMpesa} style={styles.paymentMethod}>
                    <Text style={styles.paymentMethodText}><Icon name="phone-portrait-outline" size={20}  color="#000" />M-Pesa</Text>
                    <Icon name="chevron-forward" size={16} color="#000" />
                </TouchableOpacity>
                <TouchableOpacity onPress={navigateToAddPaypal} style={styles.paymentMethod}>
                    <Text style={styles.paymentMethodText}><Icon name="logo-paypal" size={20} color="blue" />Paypal</Text>
                    <Icon name="chevron-forward" size={16}  color="#000" />
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
    paymentMethodsContainer: {
        marginTop: 16,
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    paymentMethod: {
        flexDirection: 'row',
        width: '100%',
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        justifyContent: 'space-between'
    },
    paymentMethodText: {
        fontFamily: 'Product Sans',
        fontSize: 16,
        color: '#000',
        marginLeft: 0,
    },
});

export default AddPaymentMethod;

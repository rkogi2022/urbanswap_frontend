import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import RadioButtonRN from 'react-native-radio-buttons';

const TopUpWallet = ({ navigation }) => {
    const paymentMethods = [
        { label: 'M-Pesa', icon: 'wallet' },
        { label: 'Visa        .....1122', icon: 'card' },
        { label: 'Mastercard      .....0439', icon: 'card' },
        { label: 'Cash', icon: 'cash' },
    ];

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {/* Back Feature */}
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Text style={styles.backText}>&lt; {} Back {}</Text>
            </TouchableOpacity>

            {/* Top Up Wallet Heading */}
            <Text style={styles.heading}>Top up wallet</Text>

            {/* Description */}
            <Text style={styles.description}>
                Add funds to your urban wallet to transact easily.
            </Text>

            {/* Enter Amount Field */}
            <View style={styles.enterAmountContainer}>
                <TextInput
                    style={styles.amountInput}
                    placeholder="Enter amount (between 5 and 100,000)"
                    keyboardType="numeric"
                />
            </View>

            {/* Choose Payment Method Heading */}
            <Text style={styles.paymentMethodsTitle}>Choose a payment method</Text>

            {/* Payment Methods List */}
            <View style={styles.paymentMethodsContainer}>
                {paymentMethods.map((method, index) => (
                    <View key={index} style={styles.paymentMethodRow}>
                        <Icon name={method.icon} size={24} color="#003D8E" style={styles.paymentIcon} />
                        <Text style={styles.paymentMethodText}>{method.label}</Text>
                        <View style={styles.radioButton}>
                            <RadioButtonRN
                                data={[{ label: '' }]}
                                selectedBtn={() => {}}
                                box={false}
                                circleSize={16}
                                activeColor='#003D8E'
                            />
                        </View>
                    </View>
                ))}
            </View>

            {/* Continue Button */}
            <TouchableOpacity style={styles.continueButton}>
                <Text style={styles.continueButtonText}>Continue</Text>
            </TouchableOpacity>
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
        marginTop: 24,
    },
    backText: {
        color: 'black',
        fontSize: 16,
        marginLeft: 8,
    },
    heading: {
        fontSize: 24,
        fontWeight: '700',
        color: '#003D8E',
        marginVertical: 16,
    },
    description: {
        fontSize: 16,
        color: '#000',
        marginBottom: 16,
    },
    enterAmountContainer: {
        marginBottom: 16,
        backgroundColor: '#F1F1F1',
        borderRadius: 8,
        padding: 2,
    },
    amountInput: {
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 8,
        fontSize: 16,
        color: '#000',
    },
    paymentMethodsTitle: {
        fontSize: 20,
        fontWeight: '500',
        color: '#003D8E',
        marginBottom: 16,
    },
    paymentMethodsContainer: {
        marginBottom: 32,
    },
    paymentMethodRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#E2E2E2',
    },
    paymentIcon: {
        marginRight: 16,
    },
    paymentMethodText: {
        fontSize: 16,
        color: 'black',
        flex: 1,
    },
    radioButton: {
        alignItems: 'flex-end',
    },
    continueButton: {
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
        top: 225,  
    },
    continueButtonText: {
        fontSize: 16,
        color: 'white',
        fontWeight: '600',
        letterSpacing: 0.25,
        marginLeft: 16, // Adjust spacing between text and icon
    },
    
});

export default TopUpWallet;

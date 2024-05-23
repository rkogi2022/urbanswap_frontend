import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const AddMpesa = ({ navigation }) => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            {/* Back Feature */}
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Text style={styles.backText}>&lt; {} Back {}</Text>
            </TouchableOpacity>

            {/* Mpesa Account Heading */}
            <Text style={styles.heading}>M-pesa</Text>

            {/* Phone Number Label */}
            <Text style={styles.label}>Enter phone number</Text>

            {/* Phone Number Input */}
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder="0700 000 000" keyboardType="phone-pad" />
            </View>

            {/* Submit Button */}
            <TouchableOpacity style={styles.submitButton}>
                <Text style={styles.submitText}>Save</Text>
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
        padding: 0,
        gap: 8,
        position: 'absolute',
        width: 48,
        height: 19,
        left: 17,
        top: 24,
    },
    backText: {
        fontFamily: 'Product Sans',
        fontSize: 16,
        color: '#000',
    },
    heading: {
        position: 'absolute',
        width: 72,
        height: 29,
        left: 16,
        top: 83,
        fontFamily: 'Product Sans',
        fontWeight: '700',
        fontSize: 24,
        lineHeight: 29,
        color: '#003D8E',
    },
    label: {
        position: 'absolute',
        width: 300,
        height: 19,
        left: 16,
        top: 133,
        fontFamily: 'Product Sans',
        fontSize: 16,
        lineHeight: 19,
        color: '#000000',
    },
    inputContainer: {
        position: 'absolute',
        width: 357,
        height: 51,
        left: 16,
        top: 160,
        borderWidth: 1,
        borderColor: '#E5E5E5',
        borderRadius: 8,
        justifyContent: 'center',
        paddingHorizontal: 16,
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
        top: 680,         
    },
    submitText: {
        fontSize: 16,
        color: 'white',
        fontWeight: '600',
        letterSpacing: 0.25,
        marginLeft: 16, // Adjust spacing between text and icon
    },
});

export default AddMpesa;

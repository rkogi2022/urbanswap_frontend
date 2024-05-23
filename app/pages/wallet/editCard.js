import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const EditCard = ({ navigation }) => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            {/* Back Feature */}
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Text style={styles.backText}> &lt; {} Back {}</Text>
            </TouchableOpacity>

            {/* Edit Card Heading */}
            <Text style={styles.heading}>Edit Card</Text>

            {/* Card Number */}
            <Text style={styles.label}>Card Number</Text>
            <View style={styles.inputContainer}>
                <Icon name="wallet" size={24} color="#999999" style={styles.walletIcon} />
                <TextInput style={styles.input} placeholder="1111   1111   1111   1122" />
            </View>

            {/* Expiry Date and CVV */}
            <View style={styles.rowContainer}>
                <View style={styles.columnContainer}>
                    <Text style={styles.label}>Expiry Date</Text>
                    <View style={styles.inputContainermin}>
                        <TextInput style={styles.input} placeholder="MM/YY" />
                    </View>
                </View>
                <View style={styles.columnContainer}>
                    <Text style={styles.label}>CVV</Text>
                    <View style={styles.inputContainermin}>
                        <TextInput style={styles.input} placeholder="123" />
                    </View>
                </View>
            </View>

            {/* Country */}
            <Text style={styles.label}>Country</Text>
            <View style={styles.inputContainer}>
                {/* Dropdown for Country */}
                <Icon name="flag" size={24} color="#999999" style={styles.flagIcon} />
                <TextInput style={styles.input} placeholder="Kenya" />
            </View>

            {/* Nickname (optional) */}
            <Text style={styles.label}>Nickname (optional)</Text>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder="e.g. work card or joint account" />
            </View>

            {/* Submit Button */}
            <TouchableOpacity style={styles.submitButton}>
                <Text style={styles.saveText}>Save</Text>
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
    },
    backText: {
        fontFamily: 'Product Sans',
        fontSize: 16,
        color: '#000',
    },
    heading: {
        marginTop: 24,
        fontFamily: 'Product Sans',
        fontWeight: '700',
        fontSize: 24,
        lineHeight: 29,
        color: '#003D8E',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8,
        marginBottom:10,
        borderWidth: 1,
        borderColor: '#E5E5E5',
        borderRadius: 8,
        width: 357,
        height: 51,
    },
    input: {
        flex: 1,
        marginLeft: 8,
        fontFamily: 'Product Sans',
        fontSize: 16,
        color: '#999999',
    },
    inputContainermin: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8,
        marginBottom:10,
        borderWidth: 1,
        borderColor: '#E5E5E5',
        borderRadius: 8,
        width: 164,
        height: 51,
    },
    walletIcon: {
        marginLeft: 8,
    },
    flagIcon: {
        marginLeft: 8,
        width:26,    
        height:17,

    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    columnContainer: {
        flex: 1,
        marginRight: 16,
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
        top: 290,       
        
    },
    saveText: {
        fontSize: 16,
        color: 'white',
        fontWeight: '600',
        letterSpacing: 0.25,
        marginLeft: 16, // Adjust spacing between text and icon
    },
});

export default EditCard;

import CustomPressableButton from '@/components/customButton';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity,TextInput } from 'react-native'; // Import Text from react-native
import { RadioButton } from 'react-native-paper'; 
import { Ionicons } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';
import PlainInputBox from '@/components/plainInputBox';

type ServicesScreenNavigationProp = StackNavigationProp<
  { [key: string]: undefined },
  'ServicesScreen' 
>;

const Airtimepage = () => {
    const [selectedValue, setSelectedValue] = useState('option1'); // Moved inside the component
    const [text, setText] = useState('');

    const navigation = useNavigation<ServicesScreenNavigationProp>();

    const handleInputChange = (inputText: React.SetStateAction<string>) => {
        setText(inputText);
    };
  
   
    const handleBackPress = () => {
        // Handle back button press here i.e navigate back to previous screen
      };

    const [inputValue, setInputValue] = useState('');
    const handleAmountPress = (amount: string) => {
        setInputValue(amount);
      };
    const handleSubmit=() =>{
        navigation.navigate('AirtimeProvider');

    }

    return (
        <View style={styles.container}>
            <View>
                <TouchableOpacity onPress={handleBackPress}>
                     <Text style={styles.backText}>&lt; {} Back {}</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.buyAirtime}>Buy Airtime</Text>
            <View style={styles.radioButtons}>
                <View style={styles.radioGroup}>
                    <View style={styles.radioButton}>
                        <RadioButton.Android
                            value="option1"
                            status={selectedValue === 'option1'? 'checked' : 'unchecked'}
                            onPress={() => setSelectedValue('option1')}
                            color="#007BFF"
                        />
                        <Text style={styles.radioLabel}>
                            For my number
                        </Text>
                    </View>

                    <View style={styles.radioButton}>
                        <RadioButton.Android
                            value="option2"
                            status={selectedValue === 'option2'? 'checked' : 'unchecked'}
                            onPress={() => setSelectedValue('option2')}
                            color="#007BFF"
                        />
                        <Text style={styles.radioLabel}>
                            For other number
                        </Text>
                    </View>

                </View>
            </View>

            <View>
            <View style={styles.inputContainer}>
                
                <TextInput 
                    placeholder="0700 123456|" 
                    placeholderTextColor="#C1C1C1"
                />
                <TouchableOpacity>
                    <Ionicons name="search" size={17} />
                </TouchableOpacity>
                
            </View>

            
            <TextInput
            style={styles.input}
            placeholder="Enter amount (between 5 and 1000)"
            value={inputValue}
            onChangeText={setInputValue}
            />
  

            </View>
                {/* Individual Amounts */}
                <View style={styles.amounts}>
                    <TouchableOpacity onPress={() => handleAmountPress('20')}>
                    <Text style={styles.individualAmount}>20</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleAmountPress('50')}>
                    <Text style={styles.individualAmount}>50</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleAmountPress('100')}>
                    <Text style={styles.individualAmount}>100</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleAmountPress('200')}>
                    <Text style={styles.individualAmount}>200</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleAmountPress('500')}>
                    <Text style={styles.individualAmount}>500</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleAmountPress('1000')}>
                    <Text style={styles.individualAmount}>1000</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.button}>
                    <CustomPressableButton title="Continue" onPress={handleSubmit} showIcon={true} />
                </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:10,
        backgroundColor:'white'
    },
    backText: {
        color: 'black',
        fontSize: 20,
        fontWeight:'400',
        marginRight: 5,
        marginBottom: 50,
      },
    linkText: {
        color: 'black',
        textDecorationLine: 'none',
        fontSize: 15,
        marginBottom: 7,
    },
    topComponent: {},
    radioButtons: {},
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        backgroundColor: '#E4E4E4',
        marginTop: 20,
    },
      inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between', // Pushes TextInput and Ionicons to opposite ends
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        backgroundColor: '#E4E4E4',
        marginTop: 20,
    },
      
    amounts: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop:20
    },
    individualAmount: {
        borderWidth: 1,
        borderColor: '#003D8E',
        borderRadius: 10,
        padding: 10,
        width: 50,
        fontSize: 10,
        textAlign: 'center',
    },
    buyAirtime :{
        fontSize: 24,
        color:'#003D8E'
    },
    radioGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 20,
        borderRadius: 8,
        backgroundColor: 'white',
    },
    radioButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    radioLabel: {
        marginLeft: 8,
        fontSize: 16,
        color: '#333',
    },
    button:{
        paddingTop:20
    }
});

export default Airtimepage;

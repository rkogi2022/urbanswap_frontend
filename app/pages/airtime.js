import CustomPressableButton from '@/components/customButton';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity,TextInput } from 'react-native'; // Import Text from react-native
import { RadioButton } from 'react-native-paper'; 
import { Ionicons } from '@expo/vector-icons';
import { checkTokens } from '@/functions/ValidateAuthentication';


import { airtimeStyles } from '../../assets/styles/airtimeStyle';



const Airtimepage = () => {
    const [selectedValue, setSelectedValue] = useState('option1'); // Moved inside the component
    const [text, setText] = useState('');

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

    const handleInputChange = (inputText ) => {
        setText(inputText);
    };
  
   
    const handleBackPress = () => {
        // Handle back button press here i.e navigate back to previous screen
      };

    const [inputValue, setInputValue] = useState('');
    const handleAmountPress = (amount) => {
        setInputValue(amount);
      };
    const handleSubmit=() =>{
        navigation.navigate('AirtimeProvider');

    }

    return (
        <View style={airtimeStyles.container}>
            <View>
                <TouchableOpacity onPress={handleBackPress}>
                     <Text style={airtimeStyles.backText}>&lt; {} Back {}</Text>
                </TouchableOpacity>
            </View>
            <Text style={airtimeStyles.buyAirtime}>Buy Airtime</Text>
            <View style={airtimeStyles.radioButtons}>
                <View style={airtimeStyles.radioGroup}>
                    <View style={airtimeStyles.radioButton}>
                        <RadioButton.Android
                            value="option1"
                            status={selectedValue === 'option1'? 'checked' : 'unchecked'}
                            onPress={() => setSelectedValue('option1')}
                            color="#007BFF"
                        />
                        <Text style={airtimeStyles.radioLabel}>
                            For my number
                        </Text>
                    </View>

                    <View style={airtimeStyles.radioButton}>
                        <RadioButton.Android
                            value="option2"
                            status={selectedValue === 'option2'? 'checked' : 'unchecked'}
                            onPress={() => setSelectedValue('option2')}
                            color="#007BFF"
                        />
                        <Text style={airtimeStyles.radioLabel}>
                            For other number
                        </Text>
                    </View>

                </View>
            </View>

            <View>
            <View style={airtimeStyles.inputContainer}>
                
                <TextInput 
                    placeholder="0700 123456|" 
                    placeholderTextColor="#C1C1C1"
                />
                <TouchableOpacity>
                    <Ionicons name="search" size={17} />
                </TouchableOpacity>
                
            </View>

            
            <TextInput
            style={airtimeStyles.input}
            placeholder="Enter amount (between 5 and 1000)"
            value={inputValue}
            onChangeText={setInputValue}
            />
  

            </View>
                {/* Individual Amounts */}
                <View style={airtimeStyles.amounts}>
                    <TouchableOpacity onPress={() => handleAmountPress('20')}>
                    <Text style={airtimeStyles.individualAmount}>20</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleAmountPress('50')}>
                    <Text style={airtimeStyles.individualAmount}>50</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleAmountPress('100')}>
                    <Text style={airtimeStyles.individualAmount}>100</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleAmountPress('200')}>
                    <Text style={airtimeStyles.individualAmount}>200</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleAmountPress('500')}>
                    <Text style={airtimeStyles.individualAmount}>500</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleAmountPress('1000')}>
                    <Text style={airtimeStyles.individualAmount}>1000</Text>
                    </TouchableOpacity>
                </View>
                <View style={airtimeStyles.button}>
                    <CustomPressableButton title="Continue" onPress={handleSubmit} showIcon={true} />
                </View>
        </View>
    );
};


export default Airtimepage;

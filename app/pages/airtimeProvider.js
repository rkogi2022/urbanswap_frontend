import CustomPressableButton from '@/components/customButton';
import { useNavigation } from '@react-navigation/native';

import React, { useEffect, useState } from 'react';
import {  View, Text, TextInput,TouchableOpacity, Image } from 'react-native'; // Import Text from react-native
import { checkTokens } from '@/functions/ValidateAuthentication';
import { airtimeProviderStyles } from '@/assets/styles/airtimeProvider';






const AirtimeProvider = () => {
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

 

    const handleInputChange = (inputText) => {
        setText(inputText);
    };
    const handleBackPress = () =>{
        navigation.navigate('ServicesScreen');
    }
    const handleSubmit = () => {
        navigation.navigate('PaymentNumber');
    };
    

    return (
        <View style={airtimeProviderStyles.container}>
            <TouchableOpacity onPress={handleBackPress}>
                     <Text style={airtimeProviderStyles.backText}>&lt; {} Back {}</Text>
            </TouchableOpacity>
            <Text style={airtimeProviderStyles.buyAirtime}>Buy Airtime</Text>
            <Text style={airtimeProviderStyles.payment}>Choose payment method</Text>

            <View style={airtimeProviderStyles.rowItem}>
                <View style={airtimeProviderStyles.urbanSwap}>
                    <TouchableOpacity>
                        <Text style={airtimeProviderStyles.usText}>UrbanSwap Wallet</Text>
                        <Text style={airtimeProviderStyles.usTextBal}>Your balance is Ksh. 340.58</Text>
                    </TouchableOpacity> 
                </View>
                <View style={airtimeProviderStyles.mpesa}>
                <TouchableOpacity>
                    <Image source={require('../../assets/images/m_pesa.png')} style={airtimeProviderStyles.imageInMpesa}/>
                </TouchableOpacity>  
                </View>

            </View>
            <View style={airtimeProviderStyles.rowItem}>
                <View style={airtimeProviderStyles.airtel}>
                    <TouchableOpacity>
                        <Image source={require('../../assets/images/m_airtel.png')} style={airtimeProviderStyles.imageInAirtel}/>
                    </TouchableOpacity>
                </View>
                <View style={airtimeProviderStyles.telkom}>
                    <TouchableOpacity>
                        <Image source={require('../../assets/images/tkash.png')} style={airtimeProviderStyles.imageInAirtel}/>
                    </TouchableOpacity>
                </View>
            </View>
            
            <View style={airtimeProviderStyles.buttonContainer} >
                <CustomPressableButton title="Continue" onPress={handleSubmit} showIcon={true} />
            </View>
            
        </View>
    );
};



export default AirtimeProvider;

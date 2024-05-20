import CustomPressableButton from '@/components/customButton';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack/lib/typescript/src/types';
import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput,TouchableOpacity, Image } from 'react-native'; // Import Text from react-native
import { FontAwesome, Ionicons } from '@expo/vector-icons';


type ServicesScreenNavigationProp = StackNavigationProp<
  { [key: string]: undefined },
  'ServicesScreen' 
>;


const AirtimeProvider = () => {
    const [selectedValue, setSelectedValue] = useState('option1'); // Moved inside the component
    const [text, setText] = useState('');

    const navigation = useNavigation<ServicesScreenNavigationProp>();

 

    const handleInputChange = (inputText: React.SetStateAction<string>) => {
        setText(inputText);
    };
    const handleBackPress = () =>{
        navigation.navigate('ServicesScreen');
    }
    const handleSubmit = () => {
        navigation.navigate('PaymentNumber');
    };
    

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleBackPress}>
                     <Text style={styles.backText}>&lt; {} Back {}</Text>
            </TouchableOpacity>
            <Text style={styles.buyAirtime}>Buy Airtime</Text>
            <Text style={styles.payment}>Choose payment method</Text>

            <View style={styles.rowItem}>
                <View style={styles.urbanSwap}>
                    <TouchableOpacity>
                        <Text style={styles.usText}>UrbanSwap Wallet</Text>
                        <Text style={styles.usTextBal}>Your balance is Ksh. 340.58</Text>
                    </TouchableOpacity> 
                </View>
                <View style={styles.mpesa}>
                <TouchableOpacity>
                    <Image source={require('../../assets/images/m_pesa.png')} style={styles.imageInMpesa}/>
                </TouchableOpacity>  
                </View>

            </View>
            <View style={styles.rowItem}>
                <View style={styles.airtel}>
                    <TouchableOpacity>
                        <Image source={require('../../assets/images/m_airtel.png')} style={styles.imageInAirtel}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.telkom}>
                    <TouchableOpacity>
                        <Image source={require('../../assets/images/tkash.png')} style={styles.imageInAirtel}/>
                    </TouchableOpacity>
                </View>
            </View>
            
            <View style={styles.buttonContainer} >
                <CustomPressableButton title="Continue" onPress={handleSubmit} showIcon={true} />
            </View>
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: 'white'
    },
    backText: {
        color: 'black',
        fontSize: 20,
        fontWeight:'400',
        marginRight: 5,
        marginBottom: 50,
    },
 
    arrowIcon: {
        alignSelf: 'center',
    },
    buyAirtime: {
        fontSize: 24,
        color: '#003D8E',
        paddingBottom:5,
        fontWeight:'600'
    },
    payment: {
        color: '#8B8B8B',
        fontSize: 16
    },
    rowItem: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 20,
        height:120,
        
    },
    usText: {
        color: 'white',
        fontSize:12,
        fontWeight:'600'
    },
    usTextBal: {
        color: 'white',
        fontSize:8,
        fontWeight:'600',
        paddingTop:20
    },
    urbanSwap: {
        flex: 1,
        textAlign: 'center',
        backgroundColor: '#003D8E',
        padding: 30,
        borderRadius: 10,
        marginRight: 10 
    },
    mpesa: {
        flex: 1,
        textAlign: 'center',
        backgroundColor: '#0EB520',
        padding: 30,
        borderRadius: 10,
        marginRight: 10, 
        justifyContent: 'center', 
        alignItems: 'center',
    },
    airtel: {
        flex: 1,
        textAlign: 'center',
        backgroundColor: '#E8242D',
        padding: 30,
        borderRadius: 10,
        marginRight: 10,
        justifyContent: 'center', 
        alignItems: 'center', 
    },
    imageInAirtel: {
        width: 80, 
        height: 80, 
        resizeMode: 'contain', 
    },
    imageInMpesa: {
        width: 120, 
        height: 120, 
        resizeMode: 'contain', 
    },
    telkom: {
        flex: 1,
        textAlign: 'center',
        backgroundColor: '#00A7C7',
        padding: 30,
        borderRadius: 10,
        marginRight: 10,
        justifyContent: 'center', // Center the content horizontally
        alignItems: 'center', // Center the content vertically
    },
    buttonContainer :{
        paddingTop:20
    }
});

export default AirtimeProvider;

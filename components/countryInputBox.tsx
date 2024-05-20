import React from "react";
import { Image, StyleSheet, TextInput, View, Text } from "react-native"; // Import Text from react-native

interface CountryInputBoxProps {
  placeholder: string;
  keyboardType: string;
  onChangeText?: (text: string) => void;
  value?: string;
}

const CountryInputBox: React.FC<CountryInputBoxProps> = ({ placeholder, keyboardType, onChangeText }) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        {/* Image Section */}
        <View style={styles.imageSection}>
          <Image source={require('../assets/images/kenya.png')} style={styles.image} />  
        </View>
        
        {/* Vertical Line */}
        <View style={styles.verticalLine} />
        
        {/* Text Input Section */}
        <View style={styles.textInputContainer}>
          <Text style={styles.countryCode}>+254</Text>
          <TextInput
            style={styles.inputs}
            placeholder={placeholder}
            keyboardType={keyboardType as any}
            onChangeText={onChangeText} 
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%', 
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row', // Align children horizontally
    alignItems: 'center', // Center children vertically
    width: '100%',
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  imageSection: {
    height: 50,
    justifyContent: 'center',
    paddingEnd: 10
  },
  image: {
    width: 30, // Adjust image width as needed
    height: 20, 
  },
  verticalLine: {
    height: '100%', 
    width: 1,
    backgroundColor: '#E5E5E5', 
  },
  textInputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  countryCode: {
    marginRight: 5,
    fontSize: 16,
  },
  inputs: {
    flex: 1, // Take up remaining space
    height: 50,
  },
});

export default CountryInputBox;

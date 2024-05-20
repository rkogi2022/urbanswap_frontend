import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

interface PlainInputBoxProps {
  placeholder: string;
  keyboardType: string;
  onChangeText?: (text: string) => void;
  value?: string;
}

const PlainInputBox: React.FC<PlainInputBoxProps> = ({ placeholder, keyboardType, onChangeText }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputs}
        placeholder={placeholder}
        keyboardType={keyboardType as any} // Using "as any" to handle any possible valid keyboardType
        onChangeText={onChangeText} // Pass onChangeText prop here
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%', // Ensure the container takes 100% width
    marginBottom: 20,
  },
  inputs: {
    width: '100%', // Ensure the TextInput takes 100% width
    height: 50,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    paddingHorizontal: 10,
    borderRadius: 10,
  },
});

export default PlainInputBox;

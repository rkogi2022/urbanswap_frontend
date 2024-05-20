import CustomPressableButton from '@/components/customButton';
import React from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';

export default function MyPage() {

  const handleSubmit =()=>{

  }

  return (
    <View style={styles.container}>
      <Text style={styles.backText}>&lt; {} Back {}</Text>
      <View>
        <Text style={styles.buyText}>Buy airtime</Text>
        <Text style={styles.word}>Enter number to pay from</Text>
       
        <TextInput
                style={styles.input}
                placeholder="Enter phone number"
                keyboardType="phone-pad"
          />

        <CustomPressableButton title="Pay Ksh. 200" onPress={handleSubmit} showIcon={false} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  backText: {
    color: 'black',
    fontSize: 20,
    fontWeight:'400',
    marginRight: 5,
    marginBottom: 50,
  },
  buyText: {
    color: '#003D8E',
    fontSize: 24,
    fontWeight: '600',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#E4E4E4',
    marginBottom: 20,
},
  button: {
    backgroundColor: '#003D8E',
    borderRadius: 5,
    paddingHorizontal: 70,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  word: {
    fontSize: 16,
    marginBottom: 20,
    marginTop:2,
    color:'#8B8B8B'
  },
});

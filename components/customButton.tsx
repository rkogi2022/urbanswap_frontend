import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, GestureResponderEvent } from 'react-native';

interface CustomPressableButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  showIcon?: boolean; // Optional prop to control icon visibility
}

const CustomPressableButton: React.FC<CustomPressableButtonProps> = ({ onPress, title, showIcon = true }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
      {showIcon && <Ionicons name="arrow-forward-outline" style={styles.iconStyle} color="white" />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#003D8E',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderRadius: 10,
    elevation: 3,
    height: 50,
    width: '100%',
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: '600',
    letterSpacing: 0.25,
    marginLeft: 5, // Adjust spacing between text and icon
  },
  iconStyle: {
    paddingTop:4,
    fontSize: 15, // Adjust icon size if needed
    paddingLeft: 15, // Adjust spacing between text and icon
  }
});

export default CustomPressableButton;

// ServicesScreen.js
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type ServicesScreenNavigationProp = StackNavigationProp<
  { [key: string]: undefined },
  'ServicesScreen' 
>;

const ServicesScreen = () => {
  const navigation = useNavigation<ServicesScreenNavigationProp>();

  const navigateAirtime = () => {
    navigation.navigate('Airtime');
  };
  
  const navigateCarHire = () => {
    
  };
  const navigatePackage = () => {

  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Services</Text>
      {/* First Row */}
      <View style={styles.row}>
        {/* First Image */}
        <TouchableOpacity onPress={() => navigateAirtime()}>
          <View style={styles.imageContainer}>
            <Image
              source={require('../../assets/images/airtime.png')}
              style={styles.image}
            />
            <Text style={styles.title}>Buy Airtime</Text>
            <Text style={styles.description}>Get a 5% topup on the airtime you buy.</Text>
          </View>
        </TouchableOpacity>

        {/* Second Image */}
        <TouchableOpacity onPress={() => navigateCarHire()}>
          <View style={styles.imageContainer}>
            <Image
              source={require('../../assets/images/carhire.png')}
              style={styles.image}
            />
            <Text style={styles.title}>Car Hire</Text>
            <Text style={styles.description}>Ride in comfort at affordable daily rates.</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Second Row */}
      <TouchableOpacity onPress={() => navigatePackage()}>
        <View style={styles.imageContainer1}>
          <Image
            source={require('../../assets/images/package.png')}
            style={styles.image}
          />
          <Text style={styles.title}>Package Delivery</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  header: {
    color: '#003D8E',
    fontSize: 24,
    paddingTop: 25,
    paddingBottom: 15,
    fontWeight:'600'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: '600',
    fontSize: 16,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 15,
  },
  imageContainer1: {

  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  description: {
    textAlign: 'center',
    fontSize: 8,
    color:'#989898'
  },
});

export default ServicesScreen;

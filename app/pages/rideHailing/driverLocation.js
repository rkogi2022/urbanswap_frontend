import React, { useState } from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native"; // Import TouchableOpacity
import { Button, Text } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import MapView from "react-native-maps";
import CustomPressableButton from "@/components/customButton";
import { ScrollView } from "react-native";

const DriverLocationPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.mapContainer}>
        <MapView style={styles.map} />
      </View>
      <ScrollView style={styles.vehicleTypesContainer}>
        <Text style={styles.title}>Your driver arrives in 2 min</Text>

        <View style={styles.images}>
          <View>
            <Image source={require('../../../assets/images/driver.png')} resizeMode="cover" style={styles.image} />
            <View style={styles.ratingContainer}>
                <Text style={styles.ratingText}>4.5</Text>
            </View>
            
          </View>  
        
        <Image source={require('../../../assets/images/alto.png')} resizeMode="cover" style={styles.image} />

        </View>
        <View style={styles.carDetails}>
            <Text style={styles.plate}>KDE 123F</Text>
            <Text style={styles.carName}>Suzuki Alto</Text>
            <Text style={styles.carDriver}>Silas Barasa</Text>
        </View>
        <View style={styles.bottomButtons}>
            <TouchableOpacity style={styles.buttonComponent}>
            <Text>Chat with Silas</Text>
            </TouchableOpacity>

            <Ionicons name="call" size={17} />
        </View>
            
      </ScrollView>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: "#fff",
  },
  endPoint:{
    
  },
  mapContainer: {
    flex: 1.6,
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  vehicleTypesContainer: {
    flex: 1.4,
    paddingHorizontal: 20,
    backgroundColor: "#FFFFFF",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 10,
    padding: 20,
  },
 
  buttonComponent: {
    backgroundColor: '#E1E1E1',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderRadius: 10,
    elevation: 3,
    height: 50,
    flex:2,
    marginBottom:10
  },
  bottomButtons:{
    flexDirection:'row',
    flex:3
  },
  title:{
    textAlign:'center',
    fontSize:20,
  },
  images:{
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom:20
  },
  plate:{
    textAlign:'center'
  },
  carName:{
    textAlign:'center'
  },
  carDriver:{
    textAlign:'center'
  },
  ratingContainer:{
    color:'white',
    backgroundColor:'#4E4E4E',
    borderRadius:5
  },
  ratingText:{
    color:'white'
  }
});

export default DriverLocationPage;

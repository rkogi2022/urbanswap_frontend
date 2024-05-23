import React, { useState } from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native"; // Import TouchableOpacity
import { Button, Text } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import MapView from "react-native-maps";
import CustomPressableButton from "@/components/customButton";
import { ScrollView } from "react-native";

const TripDetailsPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.mapContainer}>
        <MapView style={styles.map} />
      </View>
      <ScrollView style={styles.vehicleTypesContainer}>
        <Text style={styles.title}>Trip Details</Text>

         <View style={styles.startPoint}>
          <Text>Westlands Square</Text>
         </View>
         <View style={styles.endPoint}>
            <Text>Kenyatta International Convention</Text>

            <TouchableOpacity onPress={() => console.log("Edit pressed")} style={styles.button}>
              <View >
                <Text>Edit</Text>
              </View>
            </TouchableOpacity>
         </View>
       
        
          <View style={styles.amount}>
          <Ionicons name="person" size={17} />
              <Text>Ksh450</Text>

              <TouchableOpacity onPress={() => console.log("Edit pressed")} style={styles.button}>
                <View >
                  <Text>Switch</Text>
                </View>
              </TouchableOpacity>
          </View>
        
         <TouchableOpacity style={styles.buttonComponent}>
          <Text>Cancel trip</Text>
         </TouchableOpacity>
   
        <CustomPressableButton title="Done"  showIcon={false} style={styles.mainButton}/>
      </ScrollView>
    </View>
  );
};

const chooseRide = () => {};

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
  startPoint:{
    paddingTop:10,
    paddingBottom:10
  },
  endPoint:{
    paddingBottom:10,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  amount:{
    paddingBottom:10,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 10,
    padding: 20,
  },
  button: {
    backgroundColor: "#E3E3E3",
    padding:10,
    borderRadius:10
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
    width: '100%',
    marginBottom:10
  },
 
  title:{
    textAlign:'center',
    fontSize:20,
  },
  mainButton:{
    marginTop:10
  }
});

export default TripDetailsPage;

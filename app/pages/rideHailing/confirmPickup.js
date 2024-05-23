import React, { useState } from "react";
import { StyleSheet, View, Image } from "react-native";
import { Button, Text } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import MapView from "react-native-maps";
import CustomPressableButton from "@/components/customButton";

import Svg, { Path } from "react-native-svg";

const ConfirmPickUpPage = () => {
  const [destination, setDestination] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.mapContainer}>
        <MapView style={styles.map} />
      </View>
      <View style={styles.vehicleTypesContainer}>
        


        <View style={styles.card}>
            <Text style={styles.cashText}>Westlands Square</Text>
            <View style={styles.payment}>   
            <Text>Economy</Text>
            <Text>Ksh 500</Text>
            </View>
            
            <CustomPressableButton title="Confirm Pickup point" onPress={chooseRide} showIcon={false} />
        </View>
      </View>
    </View>
  );
};




const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: "#fff",
  },
  mapContainer: {
    flex: 2.5,
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  vehicleTypesContainer: {
    flex: 0.5,
   

    backgroundColor:'#E5E5E5'
  },
  cashText:{
    textAlign:'center',
    paddingTop:10,
    paddingBottom:10
  },
  card:{
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 10,
    padding: 20,
  },
  payment:{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center", // Center horizontally
  }
});

export default ConfirmPickUpPage;

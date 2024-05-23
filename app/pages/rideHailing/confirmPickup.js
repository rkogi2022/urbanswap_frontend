import React, { useState } from "react";
import { StyleSheet, View, Image, ScrollView } from "react-native";
import { Button, Text } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import MapView from "react-native-maps";
import CustomPressableButton from "@/components/customButton";


const ConfirmPickUpPage = () => {
  const [destination, setDestination] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.mapContainer}>
        <MapView style={styles.map} />
      </View>
      <ScrollView style={styles.vehicleTypesContainer}>
        <View >
          <View style={styles.card}>
            <View style={styles.topLocation}>
              <Text style={styles.cashText}>Westlands Square</Text>
              {/* <View style={styles.search}>
                <Text>Search</Text>
              </View> */}
            </View>

            <View style={styles.payment}>
              <Text style={styles.levelStyle}>Economy</Text>
              <Text style={styles.levelStyle}>Ksh 500</Text>
            </View>

            <CustomPressableButton title="Confirm Pickup point" showIcon={false} />
          </View>
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


    backgroundColor: '#E5E5E5'
  },
  cashText: {
    fontSize: 28,
    paddingTop: 10,
    paddingBottom: 10
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 10,
    padding: 20,
  },
  payment: {
    flexDirection: "row",
    paddingBottom: 10,
  },
  levelStyle: {
    color: '#838383',
    paddingRight:10
  },
  // search:{
  //   backgroundColor:'#EFEFEF',
  //   paddingHorizontal:5
  // },
  topLocation:{
    flexDirection:'row'
  }
});

export default ConfirmPickUpPage;

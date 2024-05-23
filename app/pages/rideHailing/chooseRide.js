import React, { useState } from "react";
import { StyleSheet, View, Image, ScrollView } from "react-native";
import { Button, Text } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import MapView from "react-native-maps";
import CustomPressableButton from "@/components/customButton";

import Svg, { Path } from "react-native-svg";
import { TouchableOpacity } from "react-native";

const ChooseRidePage = () => {
  const [destination, setDestination] = useState("");
  const [selectedPayment, setSelectedPayment] = useState("Cash");
  const [showDropdown, setShowDropdown] = useState(false);

  const chooseRide = (selectedDestination) => {
    setDestination(selectedDestination);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const selectPayment = (paymentOption) => {
    setSelectedPayment(paymentOption);
    setShowDropdown(false);
  };
  return (
    <View style={styles.container}>
      <View style={styles.mapContainer}>
        <MapView style={styles.map} />
      </View>
      <View style={styles.vehicleTypesContainer}>
        <Text style={styles.heading}>Choose a ride</Text>
        <View style={styles.vehicleSub}>
          <View style={styles.vehicleButtons}>
            <TouchableOpacity onPress={() => chooseRide("Basic")}>
              <View style={styles.rideContainer}>
                <Image style={styles.image} source={require("../../../assets/images/basic_car.png")} />
                <View style={styles.rideInfo}>
                  <Text >Basic</Text>
                  <Text style={styles.awayText}>3 minutes away</Text>
                </View>
                <Text>KSH 450.00</Text>
              </View>
            </TouchableOpacity>

            <View style={styles.line} />
            <TouchableOpacity onPress={() => chooseRide("Economy")}>
              <View style={styles.rideContainer} >
                <Image style={styles.image}
                  source={require("../../../assets/images/economy_car.png")}
                />
                <View style={styles.rideInfo}>
                  <Text >Economy</Text>
                  <Text style={styles.awayText}>3 minutes away</Text>
                </View>
                <Text>KSH 500</Text>
              </View>
            </TouchableOpacity>

            <View style={styles.line} />

            <TouchableOpacity onPress={() => chooseRide("Urban Boda")}>
              <View style={styles.rideContainer}>
                <Image source={require("../../../assets/images/boda.png")} />
                <View style={styles.rideInfo}>
                  <Text >Urban Boda</Text>
                  <Text style={styles.awayText}>3 minutes away</Text>
                </View>
                <Text>KSH 250</Text>
              </View>
            </TouchableOpacity>

            <View style={styles.line} />

            <TouchableOpacity onPress={() => chooseRide("E-Comfort")}>
              <View style={styles.rideContainer}>
                <Image style={styles.image} source={require("../../../assets/images/basic_car.png")} />
                <View style={styles.rideInfo}>
                  <Text >E-Comfort</Text>
                  <Text style={styles.awayText}>3 minutes away</Text>
                </View>
                <Text>KSH 350</Text>
              </View>
            </TouchableOpacity>

          </View>
        </View>

        <ScrollView>
          <View style={styles.card}>
            <View style={styles.payment}>
              <Svg width="30" height="23" viewBox="0 0 30 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Path d="M29.375 3.75H28.125C27.78 3.75 27.5 4.03 27.5 4.375V18.125C27.5 19.1587 26.6588 20 25.625 20H4.375C4.03 20 3.75 20.28 3.75 20.625V21.875C3.75 22.22 4.03 22.5 4.375 22.5H29.375C29.72 22.5 30 22.22 30 21.875V4.375C30 4.03 29.72 3.75 29.375 3.75Z" fill="#18A900" />
                <Path d="M13.75 10.1664V12.4201C14.4688 12.2439 15 11.7814 15 11.2501C15 10.7539 14.5825 10.4076 13.75 10.1664Z" fill="#18A900" />
                <Path d="M25.625 0H0.625C0.28 0 0 0.28 0 0.625V18.125C0 18.47 0.28 18.75 0.625 18.75H25.625C25.97 18.75 26.25 18.47 26.25 18.125V0.625C26.25 0.28 25.97 0 25.625 0ZM5.625 16.25H3.125C2.78 16.25 2.5 15.97 2.5 15.625C2.5 15.28 2.78 15 3.125 15H5.625C5.97 15 6.25 15.28 6.25 15.625C6.25 15.97 5.97 16.25 5.625 16.25ZM13.75 13.6987V14.375C13.75 14.72 13.47 15 13.125 15C12.78 15 12.5 14.72 12.5 14.375V13.7013C11.1325 13.4875 10.1 12.58 10.0025 11.4225C9.97375 11.0787 10.2288 10.7762 10.5725 10.7475C10.8825 10.71 11.22 10.9725 11.2475 11.3175C11.29 11.825 11.8112 12.255 12.5 12.4225V9.87375C10.82 9.46 10 8.67125 10 7.5C10 6.2925 11.075 5.28375 12.5 5.05125V4.375C12.5 4.03 12.78 3.75 13.125 3.75C13.47 3.75 13.75 4.03 13.75 4.375V5.04875C15.1175 5.2625 16.15 6.17 16.2475 7.32625C16.2763 7.67 16.0212 7.97375 15.6775 8.0025C15.35 8.02875 15.03 7.7775 15.0025 7.4325C14.96 6.925 14.4388 6.495 13.75 6.3275V8.87625C15.4312 9.29 16.25 10.0787 16.25 11.25C16.25 12.4575 15.175 13.4662 13.75 13.6987ZM23.125 3.75H20.625C20.28 3.75 20 3.47 20 3.125C20 2.78 20.28 2.5 20.625 2.5H23.125C23.47 2.5 23.75 2.78 23.75 3.125C23.75 3.47 23.47 3.75 23.125 3.75Z" fill="#18A900" />
                <Path d="M11.25 7.49996C11.25 7.99621 11.6662 8.34246 12.5 8.58371V6.32996C11.7812 6.50621 11.25 6.96871 11.25 7.49996Z" fill="#18A900" />
              </Svg>
              <TouchableOpacity onPress={toggleDropdown}>
                <Text style={styles.cashText}>{selectedPayment}</Text>
              </TouchableOpacity>
              <Svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Path fill-rule="evenodd" clip-rule="evenodd" d="M4.84 5.59L8.74667 1.69667C8.96 1.47 8.96 1.12333 8.74667 0.91C8.53333 0.696667 8.17333 0.696667 7.96 0.91L4.45333 4.41667L0.946667 0.91C0.72 0.696667 0.373333 0.696667 0.16 0.91C-0.0533333 1.12333 -0.0533333 1.47 0.16 1.69667L4.05333 5.59C4.28 5.80333 4.62667 5.80333 4.84 5.59Z" fill="black" />
              </Svg>
            </View>
            {showDropdown && (
              <View style={styles.dropdown}>
                <TouchableOpacity onPress={() => selectPayment("Cash")}>
                  <Text style={styles.dropdownOption}>Cash</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => selectPayment("Wallet")}>
                  <Text style={styles.dropdownOption}>Wallet</Text>
                </TouchableOpacity>
              </View>
            )}
            <CustomPressableButton title={`Choose ${destination}`} onPress={() => { }} showIcon={false} />
          </View>
        </ScrollView>
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
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  vehicleTypesContainer: {
    flex: 2,
    paddingTop: 20,
    backgroundColor: '#E5E5E5'
  },
  vehicleSub: {
    paddingHorizontal: 20
  },
  heading: {
    marginBottom: 20,
    fontSize: 20,
    textAlign: 'center'
  },
  rideContainer: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: "center",
    height: 60,
    marginBottom: 10,
  },
  rideInfo: {
    flexDirection: "column",
  },
  line: {
    height: 1,
    backgroundColor: "black",
  },
  cashText: {
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 10,
    padding: 20,
    marginTop: 20,
  },
  payment: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 70
  },
  awayText: {
    color: '#838383',
    fontSize: 10
  }
});

export default ChooseRidePage;

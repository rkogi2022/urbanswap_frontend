import React, { useState } from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native"; 
import { Button, Text } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import MapView from "react-native-maps";
import CustomPressableButton from "@/components/customButton";
import { ScrollView } from "react-native";
import { TextInput } from "react-native";

const TripEndedPage = () => {
  const [rating, setRating] = useState(0); // State to store the rating

  // Function to handle star click
  const handleStarClick = (value) => {
    setRating(value);
  };

  // Function to render star icons
  const renderStars = () => {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <TouchableOpacity key={i} onPress={() => handleStarClick(i)}>
          <Ionicons
            name={rating >= i ? "star" : "star-outline"}
            size={30}
            color="#FFBD12"
          />
        </TouchableOpacity>
      );
    }
    return stars;
  };

  return (
    <View style={styles.container}>
      <View style={styles.mapContainer}>
        <MapView style={styles.map} />
      </View>
      <ScrollView style={styles.vehicleTypesContainer}>
        <Text style={styles.title}>Your driver arrives in 2 min</Text>

        <View style={styles.images}>
          <View>
            <Image
              source={require("../../../assets/images/driver.png")}
              resizeMode="cover"
              style={styles.image}
            />
            <View style={styles.ratingContainer}>
              <Text style={styles.ratingText}>4.5</Text>
            </View>
          </View>
          <Image
            source={require("../../../assets/images/alto.png")}
            resizeMode="cover"
            style={styles.image}
          />
        </View>
        <Text style={styles.title}>Leave Silas a review</Text>

        <View style={styles.ratingStar}>{renderStars()}</View>

        <TextInput
          style={styles.descriptionInput}
          multiline={true}
          numberOfLines={8}
          placeholder="Enter description..."
          onChangeText={(text) => setDescription(text)}
        />

        <CustomPressableButton title="Done" showIcon={false} />
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
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  vehicleTypesContainer: {
    flex: 2,
    paddingHorizontal: 20,
    backgroundColor: "#FFFFFF",
  },
  title: {
    textAlign: "center",
    fontSize: 20,
  },
  images: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  ratingContainer: {
    backgroundColor: "#4E4E4E",
    borderRadius: 5,
    padding: 5,
  },
  ratingText: {
    color: "white",
  },
  ratingStar: {
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 20,
  },
  descriptionInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding:5,
    marginBottom: 10,
  },
});

export default TripEndedPage;

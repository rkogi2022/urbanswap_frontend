import React, { useState } from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { Button, Text } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import MapView from "react-native-maps";
import CustomPressableButton from "@/components/customButton";
import { ScrollView } from "react-native";
import { TextInput } from "react-native";
import { Path, Svg } from "react-native-svg";

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
                <Text style={styles.title}>Your trip has ended</Text>
                <Text style={styles.subTitle}>You made it</Text>

                <View style={styles.images}>
                    <View>
                        <Image source={require('../../../assets/images/driver.png')} resizeMode="cover"  />
                        <View style={styles.ratingContainer}>
                            <Text style={styles.ratingText}>4.5</Text>
                            <Svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Path fill-rule="evenodd" clip-rule="evenodd" d="M7.35181 0.421661L8.94212 3.90115C8.95815 3.93835 8.98392 3.97052 9.0167 3.9943C9.04949 4.01808 9.08808 4.03257 9.12841 4.03626L12.929 4.47354C13.0541 4.48729 13.1727 4.53686 13.2703 4.61631C13.368 4.69577 13.4406 4.80172 13.4796 4.92145C13.5185 5.04118 13.522 5.1696 13.4898 5.29129C13.4575 5.41299 13.3908 5.52278 13.2977 5.6075L10.48 8.19486C10.4494 8.22158 10.4266 8.25608 10.414 8.29472C10.4014 8.33336 10.3994 8.37469 10.4084 8.41433L11.167 12.164C11.1927 12.2872 11.1823 12.4152 11.1369 12.5326C11.0916 12.65 11.0133 12.7518 10.9115 12.8257C10.8097 12.8997 10.6887 12.9426 10.563 12.9494C10.4373 12.9561 10.3124 12.9264 10.2032 12.8639L6.87145 10.9837C6.83638 10.9633 6.79655 10.9526 6.75601 10.9526C6.71546 10.9526 6.67564 10.9633 6.64057 10.9837L3.30804 12.8639C3.19885 12.9263 3.07397 12.9558 2.9484 12.949C2.82283 12.9421 2.7019 12.8992 2.60015 12.8253C2.4984 12.7514 2.42014 12.6496 2.37479 12.5324C2.32943 12.4151 2.3189 12.2872 2.34446 12.164L3.10298 8.41433C3.11197 8.37469 3.11005 8.33336 3.09745 8.29472C3.08484 8.25608 3.06201 8.22158 3.03138 8.19486L0.21434 5.6072C0.121079 5.52254 0.0542604 5.41274 0.0219187 5.29101C-0.0104229 5.16928 -0.00691023 5.0408 0.0320343 4.92101C0.0709789 4.80123 0.143697 4.69525 0.241444 4.61581C0.339191 4.53637 0.457804 4.48686 0.58302 4.47324L4.38421 4.03596C4.42454 4.03227 4.46313 4.01778 4.49591 3.994C4.5287 3.97022 4.55447 3.93805 4.5705 3.90085L6.16021 0.421661C6.21179 0.306811 6.29548 0.209319 6.40118 0.140921C6.50688 0.0725223 6.63011 0.0361328 6.75601 0.0361328C6.88191 0.0361328 7.00513 0.0725223 7.11084 0.140921C7.21654 0.209319 7.30022 0.306811 7.35181 0.421661Z" fill="#F7D000" />
                            </Svg>
                        </View>

                    </View>

                    <Image source={require('../../../assets/images/alto.png')} resizeMode="cover" style={styles.image} />

                </View>
                <Text style={styles.title}>Leave Silas a review</Text>

                <View style={styles.ratingStar}>{renderStars()}</View>

                <TextInput
                    style={styles.descriptionInput}
                    multiline={true}
                    numberOfLines={3}
                    placeholder="Write your review..."
                    onChangeText={(text) => setDescription(text)}
                    backgroundColor="#EDEDED"
                />

                <CustomPressableButton title="Done" showIcon={false} />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 4,
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
        flex: 3,
        paddingHorizontal: 20,
        backgroundColor: "#FFFFFF",
    },
    title: {
        textAlign: "center",
        fontSize: 20,
    },
    subTitle:{
        fontSize:12,
        color:'#A8A8A8',
        textAlign:'center',
        paddingBottom:15
    },
    images: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    ratingContainer: {
        color: 'white',
        backgroundColor: '#4E4E4E',
        borderRadius: 5,
        flexDirection:'row',
        justifyContent:'center'
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
        padding: 5,
        marginBottom: 10,
    },
});

export default TripEndedPage;

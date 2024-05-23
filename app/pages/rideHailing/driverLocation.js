import React, { useState } from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native"; // Import TouchableOpacity
import { Button, Text } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import MapView, { Polyline } from "react-native-maps";
import CustomPressableButton from "@/components/customButton";
import { ScrollView } from "react-native";
import { Path , Svg} from "react-native-svg";

const DriverLocationPage = () => {

    const nairobi = { latitude: -1.286389, longitude: 36.817223 };
    const nakuru = { latitude: -0.303098, longitude: 36.080477 };

    return (
        <View style={styles.container}>
            <View style={styles.mapContainer}>
                {/* MapView with initialRegion set to show Nairobi and Nakuru */}
                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: (nairobi.latitude + nakuru.latitude) / 2, // Center latitude between Nairobi and Nakuru
                        longitude: (nairobi.longitude + nakuru.longitude) / 2, // Center longitude between Nairobi and Nakuru
                        latitudeDelta: Math.abs(nairobi.latitude - nakuru.latitude) * 1.5, // Zoom level
                        longitudeDelta: Math.abs(nairobi.longitude - nakuru.longitude) * 1.5, // Zoom level
                    }}
                    legalLabelInsets={{ bottom: 0, right: 0 }}
                >
                    {/* Polyline to draw route from Nairobi to Nakuru */}
                    <Polyline
                        coordinates={[nairobi, nakuru]}
                        strokeColor="#FF0000" // Line color
                        strokeWidth={3} // Line width
                    />
                </MapView>
            </View>
            <ScrollView style={styles.vehicleTypesContainer}>
                <Text style={styles.title}>Your driver arrives in 2 min</Text>

                <View style={styles.images}>
                    <View>
                        <Image source={require('../../../assets/images/driver.png')} resizeMode="cover" style={styles.image} />
                        <View style={styles.ratingContainer}>
                            <Text style={styles.ratingText}>4.5</Text>
                            <Svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Path fill-rule="evenodd" clip-rule="evenodd" d="M7.35181 0.421661L8.94212 3.90115C8.95815 3.93835 8.98392 3.97052 9.0167 3.9943C9.04949 4.01808 9.08808 4.03257 9.12841 4.03626L12.929 4.47354C13.0541 4.48729 13.1727 4.53686 13.2703 4.61631C13.368 4.69577 13.4406 4.80172 13.4796 4.92145C13.5185 5.04118 13.522 5.1696 13.4898 5.29129C13.4575 5.41299 13.3908 5.52278 13.2977 5.6075L10.48 8.19486C10.4494 8.22158 10.4266 8.25608 10.414 8.29472C10.4014 8.33336 10.3994 8.37469 10.4084 8.41433L11.167 12.164C11.1927 12.2872 11.1823 12.4152 11.1369 12.5326C11.0916 12.65 11.0133 12.7518 10.9115 12.8257C10.8097 12.8997 10.6887 12.9426 10.563 12.9494C10.4373 12.9561 10.3124 12.9264 10.2032 12.8639L6.87145 10.9837C6.83638 10.9633 6.79655 10.9526 6.75601 10.9526C6.71546 10.9526 6.67564 10.9633 6.64057 10.9837L3.30804 12.8639C3.19885 12.9263 3.07397 12.9558 2.9484 12.949C2.82283 12.9421 2.7019 12.8992 2.60015 12.8253C2.4984 12.7514 2.42014 12.6496 2.37479 12.5324C2.32943 12.4151 2.3189 12.2872 2.34446 12.164L3.10298 8.41433C3.11197 8.37469 3.11005 8.33336 3.09745 8.29472C3.08484 8.25608 3.06201 8.22158 3.03138 8.19486L0.21434 5.6072C0.121079 5.52254 0.0542604 5.41274 0.0219187 5.29101C-0.0104229 5.16928 -0.00691023 5.0408 0.0320343 4.92101C0.0709789 4.80123 0.143697 4.69525 0.241444 4.61581C0.339191 4.53637 0.457804 4.48686 0.58302 4.47324L4.38421 4.03596C4.42454 4.03227 4.46313 4.01778 4.49591 3.994C4.5287 3.97022 4.55447 3.93805 4.5705 3.90085L6.16021 0.421661C6.21179 0.306811 6.29548 0.209319 6.40118 0.140921C6.50688 0.0725223 6.63011 0.0361328 6.75601 0.0361328C6.88191 0.0361328 7.00513 0.0725223 7.11084 0.140921C7.21654 0.209319 7.30022 0.306811 7.35181 0.421661Z" fill="#F7D000" />
                            </Svg>
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
                    <View style={styles.callIcon}>
                    <Ionicons name="call" size={17} />
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
    endPoint: {

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
        flex: 2,
        marginBottom: 10,
    },
    callIcon:{
        backgroundColor: '#E1E1E1',
        justifyContent:'center',
        height: 50,
        borderRadius:100,
        flex: 1,
        alignItems:'center'
    },
    bottomButtons: {
        flexDirection: 'row',
        flex: 3
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
    },
    images: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 20
    },
    plate: {
        textAlign: 'center',
        fontSize:16,
        fontWeight:'700',
        paddingBottom:4
    },
    carName: {
        textAlign: 'center',
        color:'#7D7D7D',
        fontSize:12,
        paddingBottom:10
    },
    carDriver: {
        textAlign: 'center',
        color:'#003D8E',
        fontSize:14,
        paddingBottom:10
    },
    image:{
        
    },
    ratingContainer: {
        color: 'white',
        backgroundColor: '#4E4E4E',
        borderRadius: 5,
        flexDirection:'row',
        justifyContent:'center'
    },
    ratingText: {
        color: 'white'
    }
});

export default DriverLocationPage;

import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Dimensions, TextInput, Image } from 'react-native';
import MapView, { Marker, Region } from 'react-native-maps';
import { requestForegroundPermissionsAsync, getCurrentPositionAsync } from 'expo-location';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { checkTokens } from '@/functions/ValidateAuthentication';


const Homepage = () => {
    const [region, setRegion] = useState(null);
    const [text, setText] = useState('');
    const [destination, setDestination] = useState('');

    const navigation = useNavigation();

    const handleInputChange = (inputText ) => {
        setText(inputText);
    };

    useEffect(() => {
        checkAndRedirect();
        fetchLocation();
    }, []);

    
    const checkAndRedirect = async () => {
        const hasTokens = await checkTokens();
        if (!hasTokens) {
            navigation.navigate('LoginScreen'); 
        }
    };

    const fetchLocation = async () => {
        const { granted } = await requestForegroundPermissionsAsync();
        if (granted) {
            const { coords } = await getCurrentPositionAsync({});
            setRegion({
                latitude: coords.latitude,
                longitude: coords.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            });
        }
    };
    

    

    return (
        <View style={styles.container}>
            <View style={styles.mapContainer}> 
                {region? (
                    <MapView
                        style={styles.map}
                        region={region}
                        showsUserLocation
                        loadingEnabled
                    >
                        <Marker coordinate={region} title="You are here" />
                    </MapView>
                ) : (
                    <Text>Loading...</Text>
                )}
            </View>

            <View style={styles.bottomContainer}>
            <View style={styles.inputContainer}>
                <Ionicons name="search" size={17} />
                <TextInput
                    style={styles.inputText}
                    placeholder="Where to?" 
                    placeholderTextColor="black"
                    value={destination}
                    onChangeText={(text) => setDestination(text)}
                />
            </View>


                {/* Previous Destinations */}
                <View style={styles.previousDestinationsContainer}>
                    <View style={styles.previousDestination}>
                    <Ionicons name="time" size={17}  />
                    <Text style={styles.previousDestinationText}><Text style={{fontWeight: 'bold'}}>The Mirage</Text>{'\b'} {'\n'} Waiyaki Way, Westlands, Nairobi</Text>
                    </View>
                    <View style={styles.previousDestination}>
                    <Ionicons name="time" size={17}  />
                    <Text style={styles.previousDestinationText}><Text style={{fontWeight: 'bold'}}>Two Rivers</Text>{'\b'} {'\n'} Limuru Road, Ruaka</Text>
                    </View>
                </View>
            </View>
        
            <Text style={styles.text}>Ride Services</Text>

            <View style={styles.imageContainer}>
                <View style={styles.imageRow}>
                    <View style={styles.cardWrapper}>
                        <Image source={require('../../assets/images/home_ride.png')} resizeMode="cover" style={styles.image} />
                        <Text style={styles.cardText}>Ride</Text>
                    </View>
                    <View style={styles.cardWrapper}>
                        <Image source={require('../../assets/images/home_package.png')} resizeMode="cover" style={styles.image} />
                        <Text style={styles.cardText}>Package</Text>
                    </View>
                    <View style={styles.cardWrapper}>
                        <Image source={require('../../assets/images/home_calender.png')} resizeMode="cover" style={styles.image} />
                        <Text style={styles.cardText}>Reserve</Text>
                    </View>
                    <View style={styles.cardWrapper}>
                        <Image source={require('../../assets/images/home_store.png')} resizeMode="cover" style={styles.image} />
                        <Text style={styles.cardText}>Store pickup</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    mapContainer: { // Add a container for the map
        height: 300, // Set a fixed height for the map container
    },
    map: {
        flex: 1,
    },
    bottomContainer: {
        paddingHorizontal: 20,
        paddingTop: 50,
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,  // Add border radius for top left corner
        borderTopRightRadius: 20, // Add border radius for top right corner
        width: '100%',
    },
    
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        backgroundColor:'#E4E4E4',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        paddingStart:10
    },
    imageContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
       
    },
    imageRow: {
        flexDirection: 'row',
        width: '100%',
    },
    image:{
        width: '100%', 
        height: '100%', 
        resizeMode: 'contain',       
        marginTop: 3,
    },
    cardWrapper: {
        flex: 1,
        margin: 5, 
        backgroundColor:'#E4E4E4',
        marginTop: 10, 
        borderRadius:10,
        aspectRatio: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
        padding:18 
    },
    cardText: {
        textAlign: 'center',
        // marginTop: 2,
        // marginBottom:5,
        fontSize: 8,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        padding: 10,
        marginBottom:10,
        backgroundColor:'#F1F1F1'
      },
      inputText: {
        fontSize: 20,
        fontWeight: '500',
        marginLeft: 5,
        color: 'black',
      },
      inputprevious: {
        flex: 1,
        fontSize: 16,
        marginLeft: 10,
      },
      previousDestinationsContainer: {
        marginBottom: 20,
      },
      previousDestination: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
      },
      previousDestinationText: {
        marginLeft: 10,
        fontSize: 15,
        color: 'black',
      },
});

export default Homepage;

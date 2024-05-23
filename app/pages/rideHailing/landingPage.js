import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { StyleSheet, Text } from "react-native";
import { TextInput } from "react-native";
import { View }  from "react-native";



const RideHailingLandingPage = () =>{

    const [destination, setDestination] = useState('');

    return(
        <View style={styles.container}>


                <Text style={styles.customiseTitle}>Customise your trip</Text>
            
               
                <TextInput
                    style={styles.input}
                    placeholder="PickUp" 
                    placeholderTextColor="black"
                    // value={destination}
                    onChangeText={(text) => setDestination(text)}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Destination" 
                    placeholderTextColor="black"
                    // value={destination}
                    onChangeText={(text) => setDestination(text)}
                />

                <Text style={styles.destination}> Saved Destinations</Text>

                <View style={styles.destinationsField}>
                    <View style={styles.iconStyle}>
                        <Ionicons name="home" size={17} />
                    </View>
                    <View>
                        <Text style={styles.title}>Work</Text>
                        <Text style={styles.body}>WorkAddress</Text>
                    </View>
                    
                </View>
                <View style={styles.destinationsField}>
                    <View style={styles.iconStyle}>
                        <Ionicons name="home" size={17} />
                    </View>
                    <View>
                        <Text style={styles.title}>Work</Text>
                        <Text style={styles.body}>WorkAddress</Text>
                    </View>
                    
                </View>
                <View style={styles.destinationsField}>
                    <View style={styles.iconStyle}>
                        <Ionicons name="location" size={17} />
                    </View>
                    <View>
                        <Text style={styles.title}>Work</Text>
                        <Text style={styles.body}>WorkAddress</Text>
                    </View>
                    
                </View>
                <View style={styles.destinationsField}>
                    <View style={styles.iconStyle}>
                        <Ionicons name="location" size={17} />
                    </View>
                    <View>
                        <Text style={styles.title}>Work</Text>
                        <Text style={styles.body}>WorkAddress</Text>
                    </View>
                    
                </View>

                <View style={styles.setLocation}>
                    <Ionicons name="location" size={17} />
                    <Text>Set location on map</Text>
                </View>
           
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        paddingHorizontal:20,
        backgroundColor: '#fff', 
    },
    input:{
        padding:10,
        borderRadius: 5,
        marginTop:10,
        backgroundColor:'#E4E4E4',
    },
    destination:{
        paddingTop:10,
        fontSize:16
    },
    destinationsField:{
        marginVertical:10,
        display:'flex',
        flexDirection:'row'
    },
    iconStyle:{
        paddingRight:10,
        textAlign:'center'
    },
    title:{
        fontWeight:'600',
        color:'black'
    },
    body:{
        fontSize:14,
        color:'#838383'
    },
    setLocation:{
        paddingTop:10,
        display:'flex',
        flexDirection:'row'
    },
    customiseTitle:{
        textAlign:'center',
        paddingVertical:20,
        fontSize:20,
        fontWeight:'600'
    }


})


export default RideHailingLandingPage;

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
                        <Ionicons name="home" size={17} color='#838383' />
                    </View>
                    <View>
                        <Text style={styles.title}>Work</Text>
                        <Text style={styles.body}>Kenyatta International Convention Center</Text>
                    </View>
                    
                </View>
                <View style={styles.destinationsField}>
                    <View style={styles.iconStyle}>
                        <Ionicons name="home" size={17} color='#838383' />
                    </View>
                    <View>
                        <Text style={styles.title}>Home</Text>
                        <Text style={styles.body}>54 kitusuru, Nairobi</Text>
                    </View>
                    
                </View>
                <View style={styles.destinationsField}>
                    <View style={styles.iconStyle}>
                        <Ionicons name="location" size={17} color='#838383'/>
                    </View>
                    <View>
                        <Text style={styles.title}>Village Market</Text>
                        <Text style={styles.body}>Limuru Road, Nairobi</Text>
                    </View>
                    
                </View>
                <View style={styles.destinationsField}>
                    <View style={styles.iconStyle}>
                        <Ionicons name="location" size={17} color='#838383'/>
                    </View>
                    <View>
                        <Text style={styles.title}>Nairobi Hospital Doctor's Plaza</Text>
                        <Text style={styles.body}>Argwings Kodhek Road, Nairobi</Text>
                    </View>
                    
                </View>
                <View style={styles.destinationsField}>
                    <View style={styles.iconStyle}>
                        <Ionicons name="location" size={17} color='#838383'/>
                    </View>
                    <View>
                        <Text style={styles.title}>Uganda House</Text>
                        <Text style={styles.body}>Kenyatta Avenue, Nairobi</Text>
                    </View>
                    
                </View>

                <View style={styles.setLocation}>
                    <Ionicons name="location" size={17}  color='#838383'/>
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

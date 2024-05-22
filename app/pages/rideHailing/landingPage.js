import { Ionicons } from "@expo/vector-icons";
import { Text } from "react-native";
import { TextInput } from "react-native";
import { View }  from "react-native";



const RideHailingLandingPage = () =>{

    return(
        <View>
            <View >
                <Ionicons name="search" size={17} />
                <TextInput
                    
                    placeholder="PickUp" 
                    placeholderTextColor="black"
                    value={destination}
                    onChangeText={(text) => setDestination(text)}
                />
                <TextInput
                   
                    placeholder="Destinations" 
                    placeholderTextColor="black"
                    value={destination}
                    onChangeText={(text) => setDestination(text)}
                />

                <Text> Saved Destinations</Text>

                <View>
                    <Text>Work</Text>
                </View>

                <View>
                    <Text>Home</Text>
                </View>
            </View>
        </View>
    )


}
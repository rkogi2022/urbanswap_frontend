import React, { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native'; // Import Text from react-native


import en from '../../translation/en.json';
import fr from '../../translation/fr.json';
import globalStyles from '@/styles/globalStyles';



const Homepage = () => {

    useEffect(() =>{
        // const deviceLanguage = 
    });

    return (
        <View style={styles.container}>
            <Text>Hello</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: globalStyles.primaryColor
    },
});

export default Homepage;

import React, { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native'; 
import { checkTokens } from '@/functions/ValidateAuthentication';

const ActivityPage = () => {

    useEffect(() => {
        checkAndRedirect();
      }, []);
    
    
      const checkAndRedirect = async () => {
        const hasTokens = await checkTokens();
        if (!hasTokens) {
            navigation.navigate('LoginScreen'); 
        }
      };

    return (
        <View style={styles.container}>
            <Text>Activity page</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default ActivityPage;

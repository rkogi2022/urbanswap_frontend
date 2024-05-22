import * as SecureStore from 'expo-secure-store';

// Function to check if tokens are available
export const checkTokens = async () => {
    try {
        const token = await SecureStore.getItemAsync('authToken');
        return !!token; // Return true if token exists, false otherwise
    } catch (error) {
        console.error('Error checking tokens:', error);
        return false;
    }
};

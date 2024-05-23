import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import SplashScreen from '../pages/splashScreen';
import AppNavigator from '@/components/navigation/AppNavigator';
import AuthScreenNav from '@/components/navigation/AuthScreens';


// Assuming you have a function to check authentication token
const checkAuthToken = async () => {
  // Implement your logic to check if authentication token exists
  // Return true if token exists, false otherwise
};

export default function Index() {
  const [showSplash, setShowSplash] = React.useState(true);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  React.useEffect(() => {
    const bootstrapAsync = async () => {
      // Check if authentication token exists
      const tokenExists = await checkAuthToken();
      setIsLoggedIn(tokenExists);

      // Hide splash screen after 5 seconds
      const timer = setTimeout(() => {
        setShowSplash(false);
      }, 5000);

      return () => clearTimeout(timer);
    };

    bootstrapAsync();
  }, []);


  const checkAuthToken = async (): Promise<boolean> => {
    // Implement your logic to check if authentication token exists
    // return true
    return false
  };
  

  // Render splash screen if showSplash is true
  if (showSplash) {
    return <SplashScreen />;
  }

  // Render login screen if user is not logged in
  if (!isLoggedIn) {
    return <AuthScreenNav />;  
  }

  // Render the main app navigator if user is logged in
  return (
    <View style={styles.container}>
      <AppNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

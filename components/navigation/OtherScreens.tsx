import Airtimepage from '@/app/pages/airtime';
import ServicesScreen from '@/app/pages/services';
import AirtimeProvider from '@/app/pages/airtimeProvider';
import CreateAccount from '@/app/pages/createAccount';
import OtpScreen from '@/app/pages/otpPage';
import PaymentNumber from '@/app/pages/paymentNumber';
import { createStackNavigator } from '@react-navigation/stack';
import RideHailingLandingPage from '@/app/pages/rideHailing/landingPage';

const Stack = createStackNavigator();

const ServicesStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="ServicesScreen" 
          component={ServicesScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Airtime"
          component={Airtimepage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AirtimeProvider"
          component={AirtimeProvider}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PaymentNumber"
          component={PaymentNumber}
          options={{ headerShown:false }}
        />  

        <Stack.Screen
          name="RideHailingLandingPage"
          component={RideHailingLandingPage}
          options={{ headerShown:false }}
        /> 

      </Stack.Navigator>
    );
  };


  export default ServicesStack;
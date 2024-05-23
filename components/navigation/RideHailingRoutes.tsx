import Airtimepage from '@/app/pages/airtime';
import ServicesScreen from '@/app/pages/services';
import AirtimeProvider from '@/app/pages/airtimeProvider';

import PaymentNumber from '@/app/pages/paymentNumber';
import { createStackNavigator } from '@react-navigation/stack';
import RideHailingLandingPage from '@/app/pages/rideHailing/landingPage';
import Homepage from '@/app/pages/homepage';

const Stack = createStackNavigator();

const RideHailingStack = () => {
    return (
      <Stack.Navigator>
       <Stack.Screen
          name="home"
          component={Homepage}
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


  export default RideHailingStack;
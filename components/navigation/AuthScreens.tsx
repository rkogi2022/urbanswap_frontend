
import CreateAccount from '@/app/pages/createAccount';
import OtpScreen from '@/app/pages/otpPage';
import { createStackNavigator } from '@react-navigation/stack';
import Loginpage from '@/app/pages/loginPage';
import AppNavigator from './AppNavigator';

const Stack = createStackNavigator();

const AuthScreenNav = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="LoginScreen" 
          component={Loginpage}
          options={{ headerShown: false }}
        />
       <Stack.Screen
        name="home"
        component={AppNavigator}
        options={{ headerShown: false }}
       />
        <Stack.Screen
          name="Register"
          component={CreateAccount}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="OtpPage"
          component={OtpScreen}
          options={{ headerShown: false }}
        />
     
      </Stack.Navigator>
    );
  };


  export default AuthScreenNav;
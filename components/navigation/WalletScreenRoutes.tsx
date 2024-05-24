
import { createStackNavigator } from '@react-navigation/stack';
import AccountPage from '@/app/pages/account';
import UrbanWallet from '@/app/pages/wallet/urbanWallet'
import  TopUpWallet from '@/app/pages/wallet/topUpWallet'
import MpesaTopup from '@/app/pages/wallet/mpesaTopup'
import AddPaymentMethod from '@/app/pages/wallet/addPaymentMethod'
import AddCard from '@/app/pages/wallet/addCard'
import AddMpesa from '@/app/pages/wallet/addMpesa'
import AddPaypal from '@/app/pages/wallet/addPaypal'
import EditCard from '@/app/pages/wallet/editCard'
import EditMpesa from '@/app/pages/wallet/editMpesa'

const Stack = createStackNavigator();

const WalletSreensStack = () => {
    return (
      <Stack.Navigator>
       <Stack.Screen
          name="account"
          component={AccountPage}
          options={{ headerShown:false }}
        /> 

        <Stack.Screen
          name="UrbanWallet"
          component={UrbanWallet}
          options={{ headerShown:false }}
        /> 
        <Stack.Screen
        name='TopUpWallet'
        component={TopUpWallet}
        options={{headerShown:false}}
        />
        <Stack.Screen
        name='MpesaTopup'
        component={MpesaTopup}
        options={{headerShown:false}}
        />
        <Stack.Screen
        name='AddPaymentMethod'
        component={AddPaymentMethod}
        options={{headerShown:false}}
        />
        <Stack.Screen
        name='AddCard'
        component={AddCard}
        options={{headerShown:false}}
        />
        <Stack.Screen
        name='AddMpesa'
        component={AddMpesa}
        options={{headerShown:false}}
        />
        <Stack.Screen
        name='AddPaypal'
        component={AddPaypal}
        options={{headerShown:false}}
        />
        <Stack.Screen
        name='EditCard'
        component={EditCard}
        options={{headerShown:false}}
        />
        <Stack.Screen
        name='EditMpesa'
        component={EditMpesa}
        options={{headerShown:false}}
        />

      </Stack.Navigator>
      
    );
  };


  export default WalletSreensStack;
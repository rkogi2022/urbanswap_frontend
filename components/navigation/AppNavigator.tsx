// AppNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from '@expo/vector-icons/build/MaterialCommunityIcons';

import Homepage from '@/app/pages/homepage';
import AccountPage from '@/app/pages/account';
import ActivityPage from '@/app/pages/activityPage';
import ServicesStack from './OtherScreens';
import RideHailingLandingPage from '@/app/pages/rideHailing/landingPage';
import RideHailingStack from './RideHailingRoutes';
import WalletSreensStack from './WalletScreenRoutes';




const Tab = createBottomTabNavigator();





const AppNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={{ tabBarActiveTintColor: '#003D8E' }}>
      <Tab.Screen
        name="Home"
        component={RideHailingStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Services"
        component={ServicesStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="dots-grid" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Activity"
        component={ActivityPage}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="file-document" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={WalletSreensStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;

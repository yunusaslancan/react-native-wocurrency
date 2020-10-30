import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';


import ProfileScreen from './screens/profile';
import HomeScreen from './screens/home';
import WalletScreen from './screens/wallet';
import SettingsScreen from './screens/settings';




const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen}
        options= {{
          tabBarLabel:'home',
          tabBarIcon: ({color}) => (
            <Ionicons name="md-home" size={32} color="black" />
          ),
        }} />
        <Tab.Screen name="Profile" component={ProfileScreen} 
        options= {{
          tabBarLabel:'Profile',
          tabBarIcon: ({color}) => (
            <Ionicons name="md-ribbon" size={32} color="black" />
          ),
        }}/>
        <Tab.Screen name="Wallet" component={WalletScreen} 
        options= {{
          tabBarLabel:'Wallet',
          tabBarIcon: ({color}) => (
            <Ionicons name="md-wallet" size={32} color="black" />
          ),
        }}/>
        <Tab.Screen name="Settings" component={SettingsScreen}
         options= {{
          tabBarLabel:'Settings',
          tabBarIcon: ({color}) => (
            <Ionicons name="md-settings" size={32} color="black" />
          ),
        }}
         />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
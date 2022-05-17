import React from 'react';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import CreateScreen from '../screens/CreateScreen';
import DrawerNavigator from './StackNavigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

function StackNavigator(props) {
 return (
    <Stack.Navigator>
    <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
    <Stack.Screen options={{ headerShown: false }} name="Home" component={DrawerNavigator} />
    <Stack.Screen name="Create Team" component={CreateScreen} />
  </Stack.Navigator>
 );
}

export default StackNavigator;

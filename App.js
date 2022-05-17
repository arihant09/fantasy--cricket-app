
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './navigation/StackNavigator';
import { Text } from 'react-native';
import Location from './components/Location';

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>

  
  );
}


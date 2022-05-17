import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AboutScreen from '../screens/AboutScreen';
import StackNavigator from './StackNavigator';
import ProfileScreen from '../screens/ProfileScreen';

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
 return (
<Drawer.Navigator>
<Drawer.Screen options={{headerShown: false}} name="Home" component={Home} />
<Drawer.Screen name="Profile" component={ProfileScreen} 
options={{
    title: 'Profile',
    headerStyle: {
      backgroundColor: '#4ecdc4',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    }
}}
/>
<Drawer.Screen name="About" component={AboutScreen} 
 options={{
    title: 'About',
    headerStyle: {
      backgroundColor: 'tomato',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    }
}}
/>
</Drawer.Navigator>
 );
};
export default DrawerNavigator;

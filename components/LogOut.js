import React from 'react';
import {View,StyleSheet,TouchableOpacity,Text} from 'react-native';

import { auth } from '../auth/firebase'

function LogOut(props) {

    const handleSignOut = () => {
        auth
          .signOut()
          .then(() => {
            navigation.replace("Login")
          })
          .catch(error => alert(error.message))
      }
 return (
 <View style={styles.container}>
     <TouchableOpacity
        onPress={handleSignOut}
        style={styles.button}
      >
      </TouchableOpacity>
 </View>
 );
}

const styles=StyleSheet.create({
container:{}
});

export default LogOut;
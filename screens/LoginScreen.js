import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View,Image } from 'react-native'
import { auth } from '../auth/firebase'
import { LinearGradient } from 'expo-linear-gradient';

import Screen from '../components/Screen'
const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigation = useNavigation()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.replace("Home")
      }
    })

    return unsubscribe
  }, [])

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Registered with:', user.email);
      })
      .catch(error => alert(error.message))
  }

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Logged in with:', user.email);
      })
      .catch(error => alert(error.message))
  }

  return (
    <LinearGradient
    // Background Linear Gradient
    colors={['#9CECFB','#65C7F7', '#0052D4']}
    style={styles.background}
  >
  <Screen style={styles.container}>
   
    <Image 
          style={styles.logo}
          source={require('../assets/logo.png')}
          resizeMode={'cover'}
           />
      <View style={styles.inputContainer}>
        
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={handleLogin}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleSignUp}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Register</Text>
        </TouchableOpacity>
      </View>
  
      </Screen>
      </LinearGradient>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '80%'
  },
  input: {
    width:300,
    borderWidth:1,
    alignContent:'space-between',
    height:50,
    justifyContent:'space-around',
    marginBottom:15,
    borderRadius:10,
    marginTop:20
  },

  button: {
    backgroundColor: '#0782F9',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    right:5,
    top:10
  },
  buttonOutline: {
    top:20,
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#0782F9',
    borderWidth: 2,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
    left:110
  },
  buttonOutlineText: {
    left:100,
    color: '#0782F9',
    fontWeight: '700',
    fontSize: 16,
  },
  logo:{
    width:130,
    height:130,
   alignSelf:'center',
  marginTop:-70,
  marginBottom:20
},
background: {
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  height:'100%',
}
})

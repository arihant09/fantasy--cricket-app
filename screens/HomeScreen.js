import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, FlatList, ScrollView } from 'react-native'
import { auth } from '../auth/firebase'

// import Geolocation from '@react-native-community/geolocation';
import Location from '../components/Location';
import Card from '../components/Card';
import ListItemSeparator from '../components/ListItemSeparator';
import color from '../config/color';

const listings = [
  {
    id: 1,
    title: 'Hyderabad Vs Mumbai',

    image: require('../assets/hydvsmum.jpg')
  },
  {
    id: 2,
    title: 'Kolkata Vs Bangalore',
    image: require('../assets/kkrvsrcb.jpg')
  },
  {
    id: 3,
    title: 'Delhi Vs Bangalore',

    image: require('../assets/ddvsrcb.jpg')
  },
  {
    id: 4,
    title: 'Mumbai Vs Rajasthan',

    image: require('../assets/mivsrr.jpg')
  },


]


const HomeScreen = ({ navigation }) => {
  // const navigation = useNavigation()
  // const [location] = useLocation()
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

      <Text style={{ color: 'blue' }}>{auth.currentUser?.email}</Text>
      <TouchableOpacity
        onPress={handleSignOut}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>

      <ScrollView>

        <View>
          <Text style={{ marginLeft: 10, fontSize: 20, fontWeight: 'bold', color: color.primary, marginBottom: 10 }}>Upcoming Matches</Text>

          <FlatList
            style={{ marginRight: 5, marginLeft: -10 }}
            data={listings}
            keyExtractor={listing => listing.id.toString()}
            renderItem={({ item }) =>
              <TouchableOpacity
                onPress={() => navigation.navigate("Create Team")} >
                <Card
                  title={item.title}
                  image={item.image}
                />
                <ListItemSeparator />
              </TouchableOpacity>
            }
          />

        </View>

      </ScrollView>
    </View>
  )
}


export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginTop: 60
  },
  button: {
    backgroundColor: '#0782F9',
    width: '40%',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: -30,
    marginLeft: 240,
    right: 20
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
})

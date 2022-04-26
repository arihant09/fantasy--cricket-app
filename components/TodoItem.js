import React, { useState } from "react";
import CheckBox from 'expo-checkbox';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from '@expo/vector-icons';
 
const TodoItem = props => {
  const [check, setCheck] = useState(false);
  return (
    <View style={styles.screen}>
      <View style={styles.listItem}>
        <Text>{props.title}</Text>
      </View>
      <CheckBox value={check} style={{marginTop:25}}onValueChange={() => setCheck(!check)} color='white'/>
      <TouchableOpacity
       
        onPress={props.onDelete.bind(this, props.id)}
        style={styles.button}
      >
         <AntDesign name="delete" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
};
 
const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    backgroundColor: "#eee",
    borderColor: "black",
    borderWidth: 0.5,
    width: "60%",
    marginLeft:20,
    marginTop:20,
    borderRadius:3
  },
  screen: {
    flexDirection: "row",
    marginTop: 30,
    justifyContent: "space-between",
    width: "100%"
  },
  button: {
    display: "flex",
    height: 40,
    borderRadius: 5,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop:20,
    marginRight:20,
    marginLeft:-15
  },
  buttonGreen: {
    display: "flex",
    height: 40,
    borderRadius: 5,
    padding: 10,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    
  },
  text: {
    fontSize: 14,
    color: "white"
  }
});
 
export default TodoItem;
import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Alert
} from "react-native";
import color from "../config/color";
import { LinearGradient } from 'expo-linear-gradient';
 
const TodoInput = props => {
  const [enteredTask, setEnteredTask] = useState("");
 
  const TodoInputHandler = enteredText => {
    setEnteredTask(enteredText);
  };
 
  const addTaskHandler = () => {
    props.onAddTask(enteredTask);
    setEnteredTask("");
  };
 
  const checkInput = enteredTask => {
    if (enteredTask.length > 0) addTaskHandler();
    else {
      Alert.alert("Error", "Please enter a Player name", [{ text: "OK" }], {
        cancelable: false
      });
    }
  };
 
  return (
   
    <Modal visible={props.visible} animationType='slide'>
  
  <LinearGradient
    // Background Linear Gradient
    colors={['#FFEFBA', '#FFFFFF']}
    style={styles.background}
  >
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter Player Name"
          style={styles.input}
          onChangeText={TodoInputHandler}
          value={enteredTask}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button 
              title="Cancel"
              color="tomato"
              onPress={props.onCancel}
            ></Button>
          </View>
          <View style={styles.button}>
            <Button
              title="Add"
              style={{color:color.secondary}}
              onPress={() => checkInput(enteredTask)}
            />
          </View>
        </View>
      </View>
      </LinearGradient>
    </Modal>
  
  );
};
 
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius:8,
    
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%",
  },
  button: {
    width: "40%",

  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height:'100%',
  }
});
 
export default TodoInput;
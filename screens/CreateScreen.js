import * as React from 'react';
import { useState } from "react";
import { StyleSheet, View,FlatList, Image ,SafeAreaView,Button, Alert, Text} from "react-native";
import TodoItem from "../components/TodoItem";
import TodoInput from '../components/TodoInput';
import DisplayImage from "../components/DisplayImage";
import AppButton from '../components/AppButton';
import { LinearGradient } from 'expo-linear-gradient';
 
export default function App() {
  const [tasks, setTasks] = useState([]);
  const [addTasks, setAddTasks] = useState(false);
 
  const addTaskHandler = taskTitle => {
    setTasks(currentTasks => [
      ...currentTasks,
      { id: Math.random().toString(), value: taskTitle }
    ]);
    setAddTasks(false);
  };
 
  const deleteTaskHandler = taskId => {
    setTasks(currentTasks => {
      return currentTasks.filter(task => task.id !== taskId);
    });
  };
 
  const canceltaskAdditionHandler = () => {
    setAddTasks(false);
  };
 
  return (
  
    <LinearGradient
    // Background Linear Gradient
    colors={['#314755','#26a0da']}
    style={styles.background}
  >
      <View style={styles.btn}>
        <AppButton title="Add Player" onPress={() => setAddTasks(true)} />
      </View>
      <View>
        <TodoInput
          visible={addTasks}
          onAddTask={addTaskHandler}
          onCancel={canceltaskAdditionHandler}
        />
      </View>

      <DisplayImage taskStatus={tasks} />

      <View style={styles.screenlist}>
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={tasks}
          renderItem={itemData => (
            <TodoItem
              title={itemData.item.value}
              onDelete={deleteTaskHandler}
              id={itemData.item.id}
            />
          )}
        ></FlatList>
      </View>
      </LinearGradient>


  );
}

const styles = StyleSheet.create({
container: {

  marginTop:40,

  
},
btn: {
  justifyContent: 'center',
  alignContent: 'center',
  alignItems: 'center'
},
background:{
  height:'100%'
}
});
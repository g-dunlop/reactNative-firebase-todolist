import { View, Text, TextInput, Button } from 'react-native';
import React, {useState} from 'react';
import Styles from '../styles/Styles';

export default function AddToDoModal(props) {
  const [todoList, setTodoList] = useState("");
  return (
    <View style={Styles.container}>
      <Text style={Styles.header}>Add ToDo List</Text>
      <TextInput 
          style={[Styles.textInput, Styles.darkTextInput]} 
          placeholder='ToDo List'
          value={todoList}
          onChangeText={setTodoList} />
      <View style={[Styles.rowContainer, Styles.rightAligned, Styles.rightMargin]}>
        <Button title="Cancel" onPress={() => props.onClose()} />
        <Button title="OK" onPress={() => {
          props.addToDoList(todoList);
          setTodoList("");
          props.onClose();
        }} />
      </View>
    </View>
  );
}
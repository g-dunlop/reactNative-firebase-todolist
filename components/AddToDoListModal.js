import { View, Text, TextInput, Button, Pressable } from 'react-native';
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
        <Pressable style={Styles.modalButton} title="Cancel" onPress={() => props.onClose()}>
          <Text style={Styles.modalButtonText}>Cancel</Text>
        </Pressable>
        <Pressable style={Styles.modalButton} title="OK" onPress={() => {
          props.addToDoList(todoList);
          setTodoList("");
          props.onClose();
        }}><Text style={Styles.modalButtonText}>OK</Text></Pressable>
      </View>
    </View>
  );
}
import { View, Text, TextInput, Button } from 'react-native';
import React, {useState} from 'react';
import Styles from '../styles/Styles';

export default function AddToDoModal(props) {
  const [todo, setTodo] = useState("");
  return (
    <View style={Styles.container}>
      <Text style={Styles.header}>Add ToDo</Text>
      <TextInput 
          style={[Styles.textInput, Styles.darkTextInput]} 
          placeholder='ToDo'
          value={todo}
          onChangeText={setTodo} />
      <View style={[Styles.rowContainer, Styles.rightAligned, Styles.rightMargin]}>
        <Button title="Cancel" onPress={() => props.onClose()} />
        <Button title="OK" onPress={() => {
          props.addToDo(todo);
          setTodo("");
          props.onClose();
        }} />
      </View>
    </View>
  );
}
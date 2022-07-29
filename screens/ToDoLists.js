import {View, Button, Text, TouchableOpacity, Modal, ActivityIndicator, FlatList} from 'react-native';
import Styles from '../styles/Styles';
import {auth, db} from '../firebaseConfig';
import React, {useState, useEffect} from 'react';
import InlineTextButton from '../components/InlineTextButton';
import AddToDoListModal from '../components/AddToDoListModal';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import ToDoListsServices from '../services/ToDoListsServices';


export default function ToDoLists({navigation}){

    const [modalVisible, setModalVisible] = useState(false);
    const [toDoLists, setToDoLists] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isRefreshing, setIsRefreshing] = useState(false);
    
    const handleSignOut = () => {
        auth.signOut()
        .then(() => {
            navigation.replace("Login")
        })
        .catch((error) => {
            alert(error.message);
        })
    }

    const showContent = () => {
        return(
            <View style={Styles.container}>
                {isLoading ? <ActivityIndicator size="large" /> : showToDoLists() }
                <Button title="Add ToDo List" color="#fb4d3d" onPress={()=> setModalVisible(true) }/>
            </View>
        )
    }
    

    const showSendVerificationEmail = () => {
        return(
            <View>
                <Text>Please verify your email to use ToDoList</Text>
                <TouchableOpacity 
                    onPress = {verifyEmail}
                    style={Styles.logoutButton}>
                    <Text style={Styles.logoutButtonText}>Send Verification</Text>
                </TouchableOpacity>
            </View>
        )
    }

    const verifyEmail = () => {
        auth.currentUser.sendEmailVerification()
    }

    const addToDoList = (todoList) => {
        ToDoListsServices.createToDoList(todoList)
            getToDoLists()

      };

    const getToDoLists = () => {
        let toDoLists=[];
        db.collection("todolists").where("userId", "==", auth.currentUser.uid).get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                let toDoList = doc.data();
                toDoList.id = doc.id;
                toDoLists.push(toDoList);
                console.log(toDoList);
            });
            setToDoLists(toDoLists)
        });
            
            setIsLoading(false)
            setIsRefreshing(false)
        };

    useEffect(() => {
        if (isLoading){
            getToDoLists()
        }
    }, [toDoLists])
    
    // const checkToDoItem = (id, item, isChecked) => {
    //     GetServices.updateCheckBox(id, item, isChecked)
    //     getToDoLists()
    //   };
    

    const showToDoLists = () => {
        return (
          <FlatList
            data={toDoLists}
            refreshing={isRefreshing}
            onRefresh={() => {
              getToDoLists();
              setIsRefreshing(true);
            }}
            renderItem={renderToDoItem}
            keyExtractor={item => item.id} />
        )
      };

    // const deleteToDo = (id) => {
    //     ToDoListsServices.deleteItem(id)
    //     let updatedToDos = [...toDos].filter((item) => item.id != id);
    //     setToDos(updatedToDos)
    // }

      const renderToDoItem = ({item}) => {
        return (
          <View style={[Styles.rowContainer, Styles.rightMargin, Styles.leftMargin]}>
            <View style={Styles.fillSpace}>
                <Text>{item.text}</Text>
            </View>
          </View>
        );
      }  


    return(
        <View style={Styles.container}>
            <View style={[Styles.rowContainer, Styles.rightAligned, Styles.rightMargin]}>
                <InlineTextButton text="Manage Account" color="#258ea6" />
            </View>
            <Text style={Styles.header}>My ToDo Lists</Text>
                    <Modal 
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => setModalVisible(false)}
                    >
                    <AddToDoListModal onClose={() => setModalVisible(false)} addToDoList={addToDoList}/>
                    </Modal>
            <Text>{auth.currentUser.emailVerified ? showContent() : showSendVerificationEmail()}</Text>
            <TouchableOpacity 
                onPress = {handleSignOut}
                style={Styles.logoutButton}>
                <Text style={Styles.logoutButtonText}>Log Out</Text>
            </TouchableOpacity>
        </View>


    )
}
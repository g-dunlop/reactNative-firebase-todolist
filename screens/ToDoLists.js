import {View, Button, Text, TouchableOpacity, Modal, ActivityIndicator, FlatList, SafeAreaView} from 'react-native';
import Styles from '../styles/Styles';
import {auth, db} from '../firebaseConfig';
import React, {useState, useEffect} from 'react';
import InlineTextButton from '../components/InlineTextButton';
import AddToDoListModal from '../components/AddToDoListModal';



import ToDoListsServices from '../services/ToDoListsServices';
import { ScrollView } from 'react-native';


export default function ToDoLists({navigation}){

    const [modalVisible, setModalVisible] = useState(false);
    const [toDoLists, setToDoLists] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isRefreshing, setIsRefreshing] = useState(false);
    
    

    const showContent = () => {
        return(
            <View >
                
                {isLoading ? <ActivityIndicator size="large" /> : showToDoLists() }
                
                <TouchableOpacity 
                    onPress = {()=> setModalVisible(true)}
                    style={Styles.addButton}>
                    <Text style={Styles.addButtonText}>+</Text>
                </TouchableOpacity>
            </View>
        )
    }
    

    const showSendVerificationEmail = () => {
        return(
            <View >
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
            style={Styles.flatListContainer}
            scrollEnabled={true}
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
            {/* <View style={Styles.fillSpace}> */}
            
            <TouchableOpacity
                onPress={()=> {navigation.navigate("ToDo" , item)}}
                style ={Styles.loginButton}
            >
                <Text style={[Styles.leftAligned, Styles.listText]}>{item.text}</Text>
            </TouchableOpacity>
            {/* </View> */}
          </View>
        );
      }  


    return(
       
        <SafeAreaView style={{flex:1, paddingTop:30, backgroundColor:'white'}}>
            
            <View style={[Styles.rowContainer, Styles.rightAligned, Styles.rightMargin]}>
                <InlineTextButton text="Manage Account" color="#258ea6" onPress={() => navigation.navigate("ManageAccount")} />
            </View>
            
                    <Modal 
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => setModalVisible(false)}
                    >
                    <AddToDoListModal onClose={() => setModalVisible(false)} addToDoList={addToDoList}/>
                    </Modal>
                    
                    <Text style={[Styles.rowContainer, Styles.leftAligned, Styles.header]}>My ToDo Lists</Text>
                    <ScrollView>
                        {auth.currentUser.emailVerified ? showContent() : showSendVerificationEmail()}
                    </ScrollView>

        </SafeAreaView>
    
     

    )
}
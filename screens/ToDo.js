import {View, Button, Text, TouchableOpacity, Modal, ActivityIndicator, ScrollView, FlatList, SafeAreaView} from 'react-native';
import Styles from '../styles/Styles';
import {auth, db} from '../firebaseConfig';
import React, {useState, useEffect} from 'react';
import InlineTextButton from '../components/InlineTextButton';
import AddToDoModal from '../components/AddToDoModal';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import GetServices from '../services/GetServices';
import uuid from 'react-native-uuid';
import ToDoListsServices from '../services/ToDoListsServices';



export default function ToDo({route, navigation}){

    const [list, setList] = useState(route.params)
    const [toDos, setToDos] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [isRefreshing, setIsRefreshing] = useState(false);
    
    const getToDos = () => {
        let tempTasks=[]
        db.collection("todolists").where("userId", "==", auth.currentUser.uid).get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                if(list.id === doc.id){
                    let activeList = doc.data()
                    // console.log(activeList)
                    if(activeList.tasks.length>0){
                        activeList.tasks.forEach((thing) => {
                        tempTasks.push(thing)
                    }) 
                }
                }
            });
            setToDos(tempTasks)
            console.log(toDos)
            setIsLoading(false)
        })
    }

    const showContent = () => {
        return(
            <View style={Styles.container}>
                {isLoading ? <ActivityIndicator size="large" /> : showToDoList() }
                <TouchableOpacity 
                    onPress = {()=> setModalVisible(true)}
                    style={Styles.addButton}>
                    <Text style={Styles.addButtonText}>+</Text>
                </TouchableOpacity>
            </View>
        )
    }

    const addToDo = (todo) => {
        let id = uuid.v4();
        let toDoToAdd = {
            id: id, // ⇨ '11edc52b-2918-4d71-9058-f7285e29d894',
            completed:false,
            name:todo,
        }
        let upDatedTasks = [...toDos]
        upDatedTasks.push(toDoToAdd)

        setToDos(upDatedTasks)
        let thisList = list
        GetServices.createToDo(upDatedTasks, thisList)
      };

    
            
        //     setIsLoading(false)
        //     setIsRefreshing(false)
        // };

    useEffect(() => {
        if (isLoading){
            getToDos()
        }
    }, [toDos])
    
    const checkToDoItem = (id, isChecked) => {
        const thisList = list
        let updatedList = [...toDos]
        updatedList.forEach((task)=> {
            if (task.id === id){
                task.completed = isChecked
            }
        })
        console.log(updatedList)
        
        GetServices.updateCheckBox(updatedList, isChecked, thisList)
        getToDos()
      };
    

    const showToDoList = () => {
        return (
          <FlatList
            style={Styles.flatListContainer}
            scrollEnabled={true}
            data={toDos}
            refreshing={isRefreshing}
            onRefresh={() => {
              getToDos();
              setIsRefreshing(true);
            }}
            renderItem={renderToDoItem}
            keyExtractor={item=> item.id} />
        )
      };

    // const deleteToDo = (item) => {
    //     const thisList = list
        
    //     let updatedToDos = [...toDos].filter((task) => task.name != item.name);
    //     setToDos(updatedToDos)
    //     GetServices.deleteItem(updatedToDos, list)
        
    // }

    const deleteList = () => {
        ToDoListsServices.deleteList(list.id)
        navigation.navigate("ToDoLists", list)
    }

      const renderToDoItem = ({item}) => {
        
            return (
                <View style={[Styles.rowContainer, Styles.rightMargin, Styles.leftMargin]}>
                  <View style={Styles.fillSpace}>
                    <BouncyCheckbox
                      isChecked={item.completed}
                      size={25}
                      fillColor="#258ea6"
                      unfillColor="#FFFFFF"
                    //   text={item.name}
                      iconStyle={{ borderColor: "#258ea6" }}
                      onPress={(isChecked) => { checkToDoItem(item.id, isChecked)}}
                    />
                    
                  </View>
                  <Text style={Styles.toDoItemText}>{item.name}</Text>
                  {/* <InlineTextButton style={[Styles.deleteItemButton, Styles.rightAligned]} text="Delete" color="#258ea6" onPress={() => deleteToDo(item)} /> */}
                </View>
              );
        
      }  


    return(
        <SafeAreaView style={{flex:1, paddingTop:30, backgroundColor:'white'}}>
           <View style={[Styles.rowContainer, Styles.topRowContainer]}>
           <View style={[Styles.rowContainer, Styles.leftAlignedAligned, Styles.leftMargin]}>
                <InlineTextButton text="Delete List" color="red" onPress={deleteList}/>
            </View>
            <View style={[Styles.rowContainer, Styles.rightAligned, Styles.rightMargin]}>
                <InlineTextButton text="Manage Account" color="#258ea6" onPress={() => navigation.navigate("ManageAccount")}/>
            </View>
            </View>
            
                    <Modal 
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => setModalVisible(false)}
                    >
                    <AddToDoModal onClose={() => setModalVisible(false)} addToDo={addToDo} list={list}/>
                    </Modal>
                    <Text style={[Styles.header, Styles.leftAligned]}>{list.text}</Text>
                    <ScrollView>{showContent() }</ScrollView>
          
        </SafeAreaView>


    )
    }
import {View, Button, Text, TouchableOpacity, Modal, ActivityIndicator, FlatList} from 'react-native';
import Styles from '../styles/Styles';
import {auth, db} from '../firebaseConfig';
import React, {useState, useEffect} from 'react';
import InlineTextButton from '../components/InlineTextButton';
import AddToDoModal from '../components/AddToDoModal';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import GetServices from '../services/GetServices';


export default function ToDo({route, navigation}){

    const [list, setList] = useState(route.params)
    const [listItems, setListItems] = useState([])

    const [modalVisible, setModalVisible] = useState(false);
    const [toDos, setToDos] = useState([]);
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
            setIsLoading(false)
        })
    }

    const showContent = () => {
        return(
            <View style={Styles.container}>
                {isLoading ? <ActivityIndicator size="large" /> : showToDoList() }
                <Button title="Add ToDo" color="#fb4d3d" onPress={()=> setModalVisible(true) }/>
            </View>
        )
    }

    // const addToDo = (todo) => {
    //     GetServices.createToDo(todo)
    //         getToDos()

    //   };

    
            
        //     setIsLoading(false)
        //     setIsRefreshing(false)
        // };

    useEffect(() => {
        if (isLoading){
            getToDos()
        }
    }, [toDos])
    
    // const checkToDoItem = (id, item, isChecked) => {
    //     GetServices.updateCheckBox(id, item, isChecked)
    //     getToDos()
    //   };
    

    const showToDoList = () => {
        return (
          <FlatList
            data={toDos}
            refreshing={isRefreshing}
            onRefresh={() => {
              getToDos();
              setIsRefreshing(true);
            }}
            renderItem={renderToDoItem}
            keyExtractor={item => item.id} />
        )
      };

    // const deleteToDo = (id) => {
    //     GetServices.deleteItem(id)
    //     let updatedToDos = [...toDos].filter((item) => item.id != id);
    //     setToDos(updatedToDos)
    // }

      const renderToDoItem = ({item}) => {
        return (
          <View style={[Styles.rowContainer, Styles.rightMargin, Styles.leftMargin]}>
            <Text>{item.name}</Text>
            <InlineTextButton text="Delete" color="#258ea6" onPress={() => deleteToDo(item.id)} />
          </View>
        );
      }  


    return(
        <View style={Styles.container}>
            <Text>{list.text}</Text>
            <View style={[Styles.rowContainer, Styles.rightAligned, Styles.rightMargin]}>
                <InlineTextButton text="Manage Account" color="#258ea6" />
            </View>
            {/* <Text style={Styles.header}>{list.text}</Text>
                    <Modal 
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => setModalVisible(false)}
                    >
                    <AddToDoModal onClose={() => setModalVisible(false)} addToDo={addToDo}/>
                    </Modal> */}
            <Text>{showContent() }</Text>
          
        </View>


    )
    }
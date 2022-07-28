import {View, Button, Text, TouchableOpacity, Modal, ActivityIndicator, FlatList} from 'react-native';
import Styles from '../styles/Styles';
import {auth, db} from '../firebaseConfig';
import React, {useState, useEffect} from 'react';
import InlineTextButton from '../components/InlineTextButton';
import AddToDoModal from '../components/AddToDoModal';
import BouncyCheckbox from 'react-native-bouncy-checkbox';


export default function ToDo({navigation}){

    const [modalVisible, setModalVisible] = useState(false);
    const [toDos, setToDos] = useState([]);
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
                {isLoading ? <ActivityIndicator size="large" /> : showToDoList() }
                <Button title="Add ToDo" color="#fb4d3d" onPress={()=> setModalVisible(true) }/>
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

    const addToDo = (todo) => {
        let toDoToSave = {
          text: todo,
          completed: false,
          userId: auth.currentUser.uid
        };
        // const docRef = await addDoc(collection(db, "todos"), toDoToSave);
        db.collection("todos").add(toDoToSave)
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
            toDoToSave.id = docRef.id;
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });

        // toDoToSave.id = docRef.id;
    
        let updatedToDos = [...toDos];
        updatedToDos.push(toDoToSave);
    
        setToDos(updatedToDos);
      };

    const getToDos = () => {
        let toDos=[];
        db.collection("todos").where("userId", "==", auth.currentUser.uid).get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                let toDo = doc.data();
                toDo.id = doc.id;
                toDos.push(toDo);
                console.log(toDo);
            });
            setToDos(toDos)
        });
            
            setIsLoading(false)
            setIsRefreshing(false)
        };
    useEffect(() => {
        if (isLoading){
            getToDos()
        }
    }, [toDos])
    
    

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

    const deleteToDo = (id) => {
        db.collection("todos").doc(id).delete()
        .then(() => {
            console.log("Item deleted")
        })
        .catch((error) => {
            console.log(error.message)
        })
        let updatedToDos = [...toDos].filter((item) => item.id != id);
        setToDos(updatedToDos)
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
                text={item.text}
                iconStyle={{ borderColor: "#258ea6" }}
                onPress={(isChecked) => { checkToDoItem(item, isChecked)}}
              />
            </View>
            <InlineTextButton text="Delete" color="#258ea6" onPress={() => deleteToDo(item.id)} />
          </View>
        );
      }  


    return(
        <View style={Styles.container}>
            <View style={[Styles.rowContainer, Styles.rightAligned, Styles.rightMargin]}>
                <InlineTextButton text="Manage Account" color="#258ea6" />
            </View>
            <Text style={Styles.header}>To Do</Text>
                    <Modal 
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => setModalVisible(false)}
                    >
                    <AddToDoModal onClose={() => setModalVisible(false)} addToDo={addToDo}/>
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
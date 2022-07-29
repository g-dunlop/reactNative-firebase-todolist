import { auth, db } from "../firebaseConfig";

const ToDoListsServices = {

    createToDoList (todoList) {
        let toDoToSave = {
            text: todoList,
            tasks:[],
            userId: auth.currentUser.uid
          };
         db.collection("todolists").add(toDoToSave)
         .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
            toDoToSave.id = docRef.id;
            // console.log(toDoToSave) 
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
        
    },
    deleteList(id) {
        db.collection("todolists").doc(id).delete()
        .then(() => {
            console.log("Item deleted")
        })
        .catch((error) => {
            console.log(error.message)
        })
    },
}

export default ToDoListsServices;
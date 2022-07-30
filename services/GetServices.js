import { auth, db } from "../firebaseConfig";

const GetServices = {

    createToDo (todo, list) {
        console.log(todo)
        console.log(list.id)

        const toDoRef = db.collection("todolists").doc(list.id)
        return toDoRef.update({
            tasks:todo
        })
        .then(() => {
            console.log("Document successfully updated!");
        })
        .catch((error) => {
            console.error("Error updating document: ", error);
        });
    },
        // let toDoToSave = {
        //     name: todo,
        //     completed: false,
        //     listId: auth.currentUser.uid
        //   };
        //  db.collection("todos").add(toDoToSave)
        //  .then((docRef) => {
        //     console.log("Document written with ID: ", docRef.id);
        //     toDoToSave.id = docRef.id;
        //     console.log(toDoToSave) 
        // })
        // .catch((error) => {
        //     console.error("Error adding document: ", error);
        // });
        
    

    // deleteItem(id) {
    //     db.collection("todos").doc(id).delete()
    //     .then(() => {
    //         console.log("Item deleted")
    //     })
    //     .catch((error) => {
    //         console.log(error.message)
    //     })
    // },

    updateCheckBox (id, item, isChecked) {
        const toDoRef = db.collection("todos").doc(id)
        return toDoRef.update({
            completed:!item.completed
        })
        .then(() => {
            console.log("Document successfully updated!");
            
        })
        .catch((error) => {
            
            console.error("Error updating document: ", error);
        });
    }
}

export default GetServices;
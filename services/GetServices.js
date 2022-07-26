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
        
    deleteItem(updatedToDos, list) {
        const toDoRef = db.collection("todolists").doc(list.id)
            return toDoRef.update({
                tasks:updatedToDos
            })
        .then(() => {
            console.log("Item deleted")
        })
        .catch((error) => {
            console.log(error.message)
        })
    },

    updateCheckBox (updatedList, isChecked, list) {
        const toDoRef = db.collection("todolists").doc(list.id)
        return toDoRef.update({
            tasks:updatedList
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
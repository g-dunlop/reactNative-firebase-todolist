import {View, Text, TouchableOpacity} from 'react-native';
import Styles from '../styles/Styles';
import {auth} from '../firebaseConfig';


export default function ToDo({navigation}){
    const handleSignOut = () => {
        auth.signOut()
        .then(() => {
            navigation.replace("Login")
        })
        .catch((error) => {
            alert(error.message);
        })
    }

    return(
        <View style={Styles.container}>
            <Text>{auth.currentUser?.email}</Text>
            <TouchableOpacity 
                onPress = {handleSignOut}
                style={Styles.logoutButton}>
                <Text style={Styles.logoutButtonText}>Sign Out</Text>
            </TouchableOpacity>
        </View>


    )
}
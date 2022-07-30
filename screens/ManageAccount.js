import {auth, db} from '../firebaseConfig';
import Styles from '../styles/Styles';
import { TouchableOpacity, Text, View } from 'react-native';

export default function ManageAccount({navigation}){
    const handleSignOut = () => {
        auth.signOut()
        .then(() => {
            navigation.navigate("Login")
        })
        .catch((error) => {
            alert(error.message);
        })
    }

    return (

        <View style={Styles.container}>
        <TouchableOpacity 
            onPress = {handleSignOut}
            style={Styles.logoutButton}>
            <Text style={Styles.logoutButtonText}>Log Out</Text>
        </TouchableOpacity> 
        </View>

    )
    
}
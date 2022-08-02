import { TouchableOpacity, View, Text } from "react-native";
import Styles from "../styles/Styles";

export default function StickyFooterNav({navigation, name, component}){



    return(
        <View style={Styles.navContainer}>
            <TouchableOpacity onPress={() => navigation.navigate("ToDoLists")} style={Styles.navButton}>
                <Text>ToDo</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.navButton}>
                <Text>Events</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("ManageAccount")} style={Styles.navButton}>
                <Text>Account</Text>
            </TouchableOpacity>

        
        </View>
    )
}
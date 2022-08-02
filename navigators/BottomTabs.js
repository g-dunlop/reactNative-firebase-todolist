import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from '../screens/Login';
import ManageAccount from '../screens/ManageAccount';
import ToDoLists from '../screens/ToDoLists';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator >
      <Tab.Screen 
        name="ToDoLists" 
        component={ToDoLists}
        options={{headerShown: false}}
         />
      <Tab.Screen 
        name="ManageAccount" 
        component={ManageAccount}
        options={{headerShown: false}}
         />
    </Tab.Navigator>
  );
}
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Login from '../screens/Login';
import ManageAccount from '../screens/ManageAccount';
import ToDoLists from '../screens/ToDoLists';


const Tab = createMaterialBottomTabNavigator();

export default function BottomTabs() {

  return (
    <Tab.Navigator
      initialRouteName="Lists"
      activeColor="white"
      inactiveColor="#3e2465"
      barStyle={{ paddingVertical: 10, backgroundColor: '#10A5A5'}}

      >
      <Tab.Screen 
        name="Lists" 
        component={ToDoLists}
        options={{headerShown: false, tabBarLabel: 'Lists',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="clipboard-text-outline" color={color} size={26} />
        ),}}
        
         />
      {/* <Tab.Screen 
      name="Shared" 
      component={SharedLists}
      options={{headerShown: false}}
        /> */}
      <Tab.Screen 
        name="Account" 
        component={ManageAccount}
        options={{headerShown: false, tabBarLabel: 'Account',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account" color={color} size={26} />
        ),}}
        />
    </Tab.Navigator>
  );
}
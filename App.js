import { StatusBar } from 'expo-status-bar';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function App() {
{/* <StatusBar style="auto" /> */}

const Stack = createNativeStackNavigator();
 
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}}
        />
      </Stack.Navigator>

    </NavigationContainer>
   
  );
}
;

import { StatusBar } from 'expo-status-bar';
import Loading from './screens/Loading';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import ToDo from './screens/ToDo';
import ToDoLists from './screens/ToDoLists';
import ManageAccount from './screens/ManageAccount';
import ResetPassword from './screens/ResetPassword';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';





const Stack = createNativeStackNavigator();

  export default function App() {
  {/* <StatusBar style="auto" /> */}

  const [loaded] = useFonts({
    RockSalt: require('./assets/fonts/RockSalt-webfont.ttf'),
  });

  if (!loaded) {
    return null;
  }


 
  return (
    <NavigationContainer>
      <Stack.Navigator >
      <Stack.Screen
          name="Loading"
          component={Loading}
          options={{headerShown: false}}
        />
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
         <Stack.Screen
          name="ResetPassword"
          component={ResetPassword}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="ToDoLists"
          component={ToDoLists}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ToDo"
          component={ToDo}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ManageAccount"
          component={ManageAccount}
          options={{headerShown: false}}
        />
      </Stack.Navigator>

    </NavigationContainer>
   
  );
}
;

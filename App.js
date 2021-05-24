import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Members from './screens/Members';
import Welcome from './screens/Welcome';
import Home from './screens/Home';
import Signup from './screens/Signup';
import Wins from './screens/Wins';
import color from './styles/color';
import Schedule from './screens/Schedule';
const Stack = createStackNavigator();
console.log(color)
const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ title: 'Welcome', headerStyle:{backgroundColor:color.navbar} }}
        />
        <Stack.Screen name="Home" component={Home} options={{title:'🏠', headerShown:false}}/>
        <Stack.Screen name="Members" component={Members}options={{title:'Members', headerStyle:{backgroundColor:color.navbar}}}></Stack.Screen>
        <Stack.Screen name="Signup" component={Signup} options={{title:"Sign Up", headerStyle:{backgroundColor:color.navbar}}}></Stack.Screen>
        <Stack.Screen name="Wins" component={Wins} options={{title:"Wins", headerStyle:{backgroundColor:color.navbar}}}></Stack.Screen>
        <Stack.Screen name="Schedule" component={Schedule} options={{title:"Schedule", headerStyle:{backgroundColor:color.navbar}}}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MyStack
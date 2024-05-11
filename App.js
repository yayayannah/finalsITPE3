import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

import Login from './Screen/Login';
import Home from './Screen/Home';
import SplashScreen from './Screen/SplashScreen';
import PracticeTest from './Screen/PracticeTest';
import AnswerScreen from './Screen/AnswerScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Practice Test">
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
        <Stack.Screen name="Home" component={Home} options={{ title: 'Home' , headerShown:false}} />
        <Stack.Screen name="Splash" component={SplashScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Practice Test" component={PracticeTest} options={{headerShown:false}}/>
        <Stack.Screen name="AnswerScreen" component={AnswerScreen} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
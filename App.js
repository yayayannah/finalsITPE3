import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

import Login from './Screen/Login';
import Home from './Screen/Home';
import SplashScreen from './Screen/SplashScreen';
import PracticeTest from './Screen/PracticeTest';
import AnswerScreen from './Screen/AnswerScreen';
import TimerTest from './Screen/TimerQuiz';
import TimerAnswer from './Screen/TimerQuizAnswers';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
        <Stack.Screen name="Home" component={Home} options={{ title: 'Home' , headerShown:false}} />
        <Stack.Screen name="Splash" component={SplashScreen} options={{headerShown:false}}/>
        <Stack.Screen name="PracticeTest" component={PracticeTest} options={{headerShown:false}}/>
        <Stack.Screen name="AnswerScreen" component={AnswerScreen} options={{headerShown:false}}/>
        <Stack.Screen name="TimerTest" component={TimerTest} options={{headerShown:false}}/>
        <Stack.Screen name="TimerAnswer" component={TimerAnswer} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
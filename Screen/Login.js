import React, { useState } from 'react';
import { View, TextInput, Button, Image, Alert, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Styles from '../Styles/Styles';
import 'react-native-gesture-handler';

const Login = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isPressed, setIsPressed] = useState(false);

  const handleLogin = () => {
    if (username === 'admin' && password === 'admin') {
      navigation.navigate('Home');
    } else {
      Alert.alert('Login Failed', 'Incorrect username or password');
    }
  };

  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
  };

  return (
    <View style={Styles.container}>

      <View style={Styles.puzzleContainer} > 
        <Image source={require('../assets/puzzle-piece.png')}
                style={Styles.puzzle}
        />
      </View>

      <TextInput
        style={Styles.userinput}
        placeholder="Username"
        onChangeText={text => setUsername(text)}
        value={username}
      />
      <TextInput
        style={Styles.passinput}
        placeholder="Password"
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry
      />


      <TouchableOpacity title="Login" onPress={handleLogin}  onPressIn={handlePressIn} onPressOut={handlePressOut} >
        <View style={Styles.loginBtn} >
          <Text style={Styles.loginTxt}> Login </Text>
        </View>

      </TouchableOpacity>

    </View>
     
  );
};

export default Login;

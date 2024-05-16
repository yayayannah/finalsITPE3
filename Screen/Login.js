import React, { useState } from 'react';
import { View, TextInput, Button, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Styles from '../Styles/Styles';
import 'react-native-gesture-handler';

const Login = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'Admin' && password === 'Admin') {
      navigation.navigate('Home');
      setUsername('');
      setPassword('');
    } else {
      Alert.alert('Login Failed', 'Incorrect username or password');
    }
  };

  return (
    <View style={Styles.container}>
      <View style={Styles.loginImageCont}>
          <Image source={require('../assets/quiz.png')} 
                style={Styles.logo}
          />
      </View> 
      <TextInput
        style={Styles.input}
        placeholder="Username"
        onChangeText={text => setUsername(text)}
        value={username}
      />
      <TextInput
        style={Styles.input}
        placeholder="Password"
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} style={Styles.button}  color= '#4C489D' />
    </View>
     
  );
};

export default Login;

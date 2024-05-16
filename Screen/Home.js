import React, { useState, useEffect } from 'react';
import { View, Text, Button, ImageBackground, TouchableOpacity } from 'react-native'; // Changed import statement
import { useNavigation } from '@react-navigation/native';
import Styles from '../Styles/Styles';
import Loader from '../Screen/LoadingScreen';
import 'react-native-gesture-handler';

const Home = () => {
  const navigation = useNavigation();
  //loading screen will pop up first
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    setIsLoading(true);
    setTimeout(()=> {
      setIsLoading(false);
    }, 2000);
  }

  const handleLogout = () => {
    navigation.navigate('Login');
  };

  return (
    <ImageBackground
    source={require('../assets/1.png')}
    style={Styles.backgroundImage} >
    <View style={Styles.container}>
      {isLoading ? <Loader/> : (
        <>
            <TouchableOpacity
             style={Styles.button}
             onPress={() => navigation.navigate('PracticeTest')}
             >  
              <Text>
                Practice Quiz
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
             style={Styles.button}
              onPress={() => navigation.navigate('TimerTest')}
             > 
              <Text>
                Timed Quiz
              </Text>
            </TouchableOpacity>
            
            <Button title="Logout" onPress={handleLogout} 
           style={Styles.button}
            />
        </>
      )}
    </View>
    </ImageBackground>
  );
};

export default Home;

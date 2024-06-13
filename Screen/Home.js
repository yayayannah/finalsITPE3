import React, { useState, useEffect } from 'react';
import { View, Text, Button, ImageBackground, TouchableOpacity, Image } from 'react-native'; // Changed import statement
import { useNavigation } from '@react-navigation/native';
import Styles from '../Styles/Styles';
import Loader from '../Screen/LoadingScreen';
import 'react-native-gesture-handler';

const Home = () => {
  // const navigation = useNavigation();
  // //loading screen will pop up first
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = () => {
  //   setIsLoading(true);
  //   setTimeout(()=> {
  //     setIsLoading(false);
  //   }, 2000);
  // }

  // const handleLogout = () => {
  //   navigation.navigate('Login');
  // };

  const navigation = useNavigation();
  const[isLoading, setIsLoading] = useState(true );
  const [isPressed, setIsPressed] = useState(false);

  useEffect(() => {
    fetchData();
  },[]);

  const fetchData = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000 );
  };


  const handleLogout = () => {
    navigation.navigate('Login');
  };



  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
  };

  return (

    <View style={Styles.container}>

      {isLoading ? <Loader/> : (
        <>

          <View style={Styles.puzzleContainer} > 
            <Image source={require('../assets/puzzle-piece.png')}
                    style={Styles.puzzle}
            />
          </View>


          <TouchableOpacity
            style={Styles.PracticeTest}
            onPress={() => navigation.navigate('PracticeTest')}
            >  
            <Text style={Styles.PracticeText}>
              Practice Quiz
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={Styles.TimerTest}
            onPress={() => navigation.navigate('TimerTest')}
            > 

            <Text style={Styles.TimerText} >
              Timed Quiz
            </Text>

          </TouchableOpacity>
          
          {/* <Button title="Logout" onPress={handleLogout} 
          style={Styles.button}
          /> */}

          <TouchableOpacity title="Login" onPress={handleLogout} onPressIn={handlePressIn} onPressOut={handlePressOut}  >
            <View style={Styles.logoutBtn} >
              <Text style={Styles.loginTxt}> Logout </Text>
            </View>

          </TouchableOpacity>

          {/* <TouchableOpacity title="Login" onPress={()=> navigation.navigate('SplashScreen') } >
            <View style={Styles.logoutBtn} >
              <Text style={Styles.loginTxt}> SplashScreen </Text>
            </View>

          </TouchableOpacity> */}

        </>

      )}
    </View>
  );
};

export default Home;

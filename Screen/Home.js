import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Styles from '../Styles/Styles';
import Loader from '../Screen/LoadingScreen';
import 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native-web';

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
    <View style={Styles.container}>
      {isLoading ? <Loader/> : (
        <>
            <TouchableOpacity
             style={Styles.button}
             onPress={() => navigation.navigate('Practice Test')}
             >  
              <Text>
                Practice Quiz
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
             style={Styles.button}
              onPress={() => navigation.navigate('Timed')}
             > <Text>
                Timed Quiz
              </Text>
            </TouchableOpacity>
            
            <Button title="Logout" onPress={handleLogout} 
           style={Styles.button}
            />
        </>
      )}
    </View>
  );
};

export default Home;
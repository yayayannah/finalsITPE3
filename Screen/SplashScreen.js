import React, {useEffect} from 'react';
import {View, Image} from 'react-native';
import styles from '../Styles/Styles';

const SplashScreen = ({navigation}) => {

    useEffect(() => {
        const timer = setTimeout(() => {

            navigation.replace('Login');

    }, 5000);

    return () => clearTimeout(timer);
    }, {navigation});

    return (
        <View style={styles.splashContainer} >
        
        <Image source={require('../assets/splashScreen.png')} 
                style={styles.splash}
                resizeMode='cover'  
        />

        </View>


    );

};

export default SplashScreen;
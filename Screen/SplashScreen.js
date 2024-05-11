import React, { useEffect } from "react";
import { View, Image } from "react-native";
import Styles from "../Styles/Styles";
import 'react-native-gesture-handler';

const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace('Login');
        }, 5000);
        return () => clearTimeout(timer);
    }, [navigation]); // Include navigation as a dependency

    return (
        <View style={Styles.splashcontainer}>
            <Image
                source={require('../assets/splash.png')}
                style={Styles.splash}
                resizeMode='cover'
            />
        </View>
    );
};

export default SplashScreen;

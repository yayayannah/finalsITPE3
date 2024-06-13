import React from 'react';
import {View, ActivityIndicator, Text} from 'react-native';
import Styles from '../Styles/Styles';
import 'react-native-gesture-handler';
// import {
//     BallIndicator,
//     BarIndicator,
//     DotIndicator,
//     MaterialIndicator,
//     PacmanIndicator,
//     PulseIndicator,
//     SkypeIndicator,
//     UIActivityIndicator,
//     WaveIndicator,
//   } from 'react-native-indicators';
  import LottieView from 'lottie-react-native';


const Loader = ({navigation}) => {
    return (
        <View style={[Styles.container]} >
            
            <View style={Styles.gifContainer} >
                <LottieView style={{flex: 1}} source={require('../assets/animatedLoader.json')} autoPlay loop />
                <Text style={Styles.loadText} > Loading... </Text>
            </View>

        </View>


    );

};

export default Loader;
import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import Styles from '../Styles/Styles';
import 'react-native-gesture-handler';
import {
    BallIndicator,
    BarIndicator,
    DotIndicator,
    MaterialIndicator,
    PacmanIndicator,
    PulseIndicator,
    SkypeIndicator,
    UIActivityIndicator,
    WaveIndicator,
  } from 'react-native-indicators';

const Loader = ({navigation}) => {
    return (
        <View style={[Styles.container]} >
            
            <DotIndicator color="#CFDEE7" count={5} size={15}/>

        </View>


    );

};

export default Loader;
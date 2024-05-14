import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import styles from '../Styles/AnswerStyle';

const AnswerScreen = ({ route, navigation }) => {
    const { questionsData, userAnswers, totalScore } = route.params;

    const handleTryAgain = () => {
        navigation.navigate('PracticeTest'); // Go back to the practice test screen
    };

    const handleGoHome = () => {
        navigation.navigate('Home'); // Navigate to the home screen
    };

    return (
        <ImageBackground
        source={require('../assets/1.png')}
        style={styles.backgroundImage} >
        <View style={styles.container}>
            <Text style={styles.headerText}>Practice Test Results</Text>
            <Text style={styles.scoreText}>Your Score: {totalScore} / {questionsData.length}</Text>
            <Text style={styles.subHeaderText}>Answers:</Text>
            <View style={styles.answersContainer}>
                {questionsData.map((question, index) => (
                    <View key={index} style={styles.answerItem}>
                        <Text style={styles.questionText}>{question.question}</Text>
                        <Text style={styles.answerText}>Your Answer: {userAnswers[index]}</Text>
                        <Text style={styles.answerText}>Correct Answer: {question.questionAnswer}</Text>
                    </View>
                ))}
            </View>
            <TouchableOpacity style={styles.button} onPress={handleTryAgain}>
                <Text style={styles.buttonText}>Try Again</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleGoHome}>
                <Text style={styles.buttonText}>Go Back to Home</Text>
            </TouchableOpacity>
        </View>
        </ImageBackground>
    );
};



export default AnswerScreen;

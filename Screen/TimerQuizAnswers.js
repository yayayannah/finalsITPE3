import React from 'react';
import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import styles from '../Styles/AnswerStyle';

const TimerAnswer = ({ route, navigation }) => {
    const { questionsData, userAnswers } = route.params;
    const [timer, setTimer] = useState(15); 

    // Calculate the total score and prepare answer comparisons
    const totalScore = questionsData.reduce((score, question, index) => {
        const correctAnswer = question.questionAnswer.toLowerCase().trim();
        const userAnswer = userAnswers[index].toLowerCase().trim();
        if (correctAnswer === userAnswer) {
            return score + 1;
        }
        return score;
    }, 0);

    const handleTryAgain = () => {
        navigation.navigate('TimerTest'); // Go back to the practice test screen
        setTimer(15);
    };

    const handleGoHome = () => {
        navigation.navigate('Home'); // Navigate to the home screen
        setTimer(15);
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
                            <Text style={styles.answerText}>
                                Your Answer: {userAnswers[index]} 
                                {userAnswers[index].toLowerCase().trim() === question.questionAnswer.toLowerCase().trim() ? " (Correct)" : " (Incorrect)"}
                            </Text>
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

export default TimerAnswer;

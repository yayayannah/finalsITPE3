import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import styles from '../Styles/AnswerStyle';
import Loader from '../Screen/LoadingScreen';

const AnswerScreen = ({ route, navigation }) => {
    const { questionsData, userAnswers, totalScore } = route.params;

    const handleTryAgain = () => {
        navigation.navigate('PracticeTest'); // Go back to the practice test screen
    };

    const handleGoHome = () => {
        navigation.navigate('Home'); // Navigate to the home screen
    };

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    };

    return (
        <ImageBackground
            source={require('../assets/1.png')}
            style={styles.backgroundImage}
        >
            {isLoading ? (
                <Loader />
            ) : (
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    <View style={styles.container}>
                        <Text style={styles.headerText}>Practice Test Results</Text>
                        <Text style={styles.scoreText}>
                            Your Score: {totalScore} / {questionsData.length}
                        </Text>
                        <Text style={styles.subHeaderText}>Answers:</Text>
                        <View style={styles.answersContainer}>
                            {questionsData.map((question, index) => (
                                <View key={index} style={styles.answerItem}>
                                    <Text style={styles.questionText}>{question.question}</Text>
                                    <Text style={styles.answerText}>
                                        Your Answer: {userAnswers[index]}
                                    </Text>
                                    <Text style={styles.answerText}>
                                        Correct Answer: {question.questionAnswer}
                                    </Text>
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
                </ScrollView>
            )}
        </ImageBackground>
    );
};

export default AnswerScreen;

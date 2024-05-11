import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

const AnswerScreen = ({ route, navigation }) => {
    const { questionsData, userAnswers, totalScore } = route.params;

    const handleTryAgain = () => {
        navigation.navigate('Practice Test'); // Go back to the practice test screen
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

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    subHeaderText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
    },
    scoreText: {
        fontSize: 18,
        marginBottom: 10,
    },
    answersContainer: {
        width: '100%',
        marginBottom: 20,
    },
    answerItem: {
        marginBottom: 10,
    },
    questionText: {
        fontWeight: 'bold',
        marginBottom: 5,
    },
    answerText: {
        marginLeft: 10,
    },
    button: {
        backgroundColor: '#007bff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 10,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default AnswerScreen;

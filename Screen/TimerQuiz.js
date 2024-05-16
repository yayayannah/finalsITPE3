import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Button, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import questionsData from '../Data/questionData';
import styles from '../Styles/PracticeTestStyle';
import Loader from '../Screen/LoadingScreen';

const TimerTest = () => {
    const navigation = useNavigation();

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswer, setUserAnswer] = useState('');
    const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);
    const [isWrongAnswer, setIsWrongAnswer] = useState(false);
    const [correctAnswer, setCorrectAnswer] = useState('');
    const [userAnswers, setUserAnswers] = useState(Array(questionsData.length).fill(''));
    const [totalScore, setTotalScore] = useState(0);
    const [timer, setTimer] = useState(16); 
    const progressBarWidth = useRef(new Animated.Value(0)).current;
    const [showTimer, setShowTimer] = useState(false);

    useEffect(() => {
        const animationDuration = 15000; // 15 seconds in milliseconds
        const interval = setInterval(() => {
            if (timer > 0) {
                setTimer(prevTimer => prevTimer - 1);
                const elapsedTime = 16 - timer; // Calculate time elapsed
                const progress = elapsedTime / 15; // Calculate progress based on time elapsed
                Animated.timing(progressBarWidth, {
                    toValue: progress,
                    duration: 1000,
                    useNativeDriver: false
                }).start();
            } else {
                if (currentQuestionIndex === questionsData.length - 1) {
                    handlePracticeCompleted(); 
                } else {
                    checkAnswer();
                    handleNextQuestion();
                }
                // Ensure progress bar reaches end when timer ends
                Animated.timing(progressBarWidth, {
                    toValue: 1,
                    duration: 0,
                    useNativeDriver: false
                }).start();
            }
        }, 1000);

        return () => clearInterval(interval); 
    }, [timer, currentQuestionIndex]);

    const [isLoading, setIsLoading] = useState(true);

  

    useEffect(() => {
      fetchData();
    }, []);
  
    const [randomizedQuestions, setRandomizedQuestions] = useState([]);

    const fetchData = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            const shuffledQuestions = shuffleArray(questionsData).slice(0, 15);
            setRandomizedQuestions(shuffledQuestions);
        }, 2000);
    };
    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };
  
    

    useEffect(() => {
        const unsubscribeFocus = navigation.addListener('focus', () => {
            resetState();
        });

        return unsubscribeFocus;
    }, [navigation]);

    const resetState = () => {
        setTimer(16);
        setCurrentQuestionIndex(0);
        setUserAnswer('');
        setIsCorrectAnswer(false);
        setCorrectAnswer('');
        setIsWrongAnswer(false);
        setUserAnswers(Array(questionsData.length).fill(''));
        setTotalScore(0);
    };                                                 

    const resetScoreAndAnswers = () => {
        setTimer(16); 
        setTotalScore(0);
        setUserAnswer('');
        setIsCorrectAnswer(false);
        setCorrectAnswer('');
        setIsWrongAnswer(false);
        setCurrentQuestionIndex(0);
    };

    const checkAnswer = () => {
        const correctAnswerText = questionsData[currentQuestionIndex].questionAnswer;
        const userEnteredAnswer = userAnswer.trim().toLowerCase();
    
        if (userEnteredAnswer === correctAnswerText.toLowerCase()) {
            setIsCorrectAnswer(true);
            setTotalScore(totalScore + 1);
        } else {
            setIsCorrectAnswer(false);
            setIsWrongAnswer(true);
        }
    
        setUserAnswers(prevState => {
            const updatedAnswers = [...prevState];
            updatedAnswers[currentQuestionIndex] = userEnteredAnswer;
            return updatedAnswers;
        });
    };

    const handleNextQuestion = () => {
        if (currentQuestionIndex === questionsData.length - 1) {
            return; 
        }
        checkAnswer();
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setUserAnswer('');
        setIsCorrectAnswer(false);
        setCorrectAnswer('');
        setIsWrongAnswer(false);
        setTimer(16);
    };

    const handlePracticeCompleted = () => {
        const updatedUserAnswers = [...userAnswers]; 
    updatedUserAnswers[currentQuestionIndex] = userAnswer.trim().toLowerCase();
    setUserAnswers(updatedUserAnswers); 


        checkAnswer(); 
        setUserAnswer('');
        setIsCorrectAnswer(false);
        setCorrectAnswer('');
        setIsWrongAnswer(false);
        setTimer(16);
        resetScoreAndAnswers();
        setCurrentQuestionIndex(0);
        navigation.navigate('TimerAnswer', {
            questionsData,
            userAnswers: updatedUserAnswers,
            totalScore,
        });
    };
    

    return (
        <ImageBackground
            source={require('../assets/1.png')}
            style={styles.backgroundImage} >
                      {isLoading ? <Loader/> : (
        <>
            <View style={styles.container}>
                {currentQuestionIndex < questionsData.length ? (
                    <View style={styles.card}>
                        <Text style={styles.questionText}>{questionsData[currentQuestionIndex].question}</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={text => setUserAnswer(text)}
                            value={userAnswer}
                            placeholder="Type your answer here..."
                            placeholderTextColor="#999"
                        />
                        <TouchableOpacity
                            style={[styles.button, !userAnswer && styles.disabledButton]}
                            onPress={() => {
                                if (currentQuestionIndex === questionsData.length - 1) {
                                    handlePracticeCompleted();
                                } else {
                                    handleNextQuestion();
                                }
                            }}
                            disabled={!userAnswer}>
                            <Text style={styles.buttonText}>{currentQuestionIndex === questionsData.length - 1 ? 'Finish Test' : 'Next Question'}</Text>
                        </TouchableOpacity>
                        <View style={styles.progressBarContainer}>
                            <Animated.View style={[styles.progressBar, { width: progressBarWidth.interpolate({ inputRange: [0, 1], outputRange: ['0%', '100%'] }) }]} />
                        </View>
                    </View>
                ) : null}
                {showTimer && <Text style={styles.timerText}>{formatTime(timer)}</Text>}
            </View>
            </>
      )}
        </ImageBackground>
    );
};


const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
};

export default TimerTest;

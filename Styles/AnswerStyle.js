import { StyleSheet } from "react-native";

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
  export default styles;
import { StyleSheet } from "react-native"

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    welcomeTest: {
        fontSize: 20,
        marginBottom: 20,
    },
    splash: {
        width: '100%',
        height: '100%',
    },
    // splashcontainer: {
    //     flex: 1,
    // },
    // overlay: {
    //     ...StyleSheet.absoluteFillObject,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    // },
    loadingText: {
        fontSize: 20,
        color: 'white',
    },
    loginImageCont: {
        width: '100%', 
        height: 150, 
        justifyContent: "flex-end", 
        paddingBottom: 5,
    },
      logo: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain', 
        position: 'absolute', 
        alignSelf: 'center',
      },
    // button: {
    //     backgroundColor: '#fff',
    //     fontSize: 14,
    //     padding: 16,
    //     borderRadius: 26,
    //     textTransform: 'uppercase',
    //     fontWeight: '700',
    //     display: 'flex',
    //     alignItems: 'center',
    //     width: '100%',
    //     color: '#4C489D',
    //     borderBottomColor: 'transparent',
    //     borderColor: 'transparent',
    //     paddingTop: 10,
    //     shadowOffset: {
    //       width: 0,
    //       height: 2,
    //     },
    //     shadowOpacity: 0.5,
    //     shadowRadius: 2,
    //     elevation: 2,
    //   },
      backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },

    puzzle: {
      height: '200',
      aspectRatio: 1,
      resizeMode: 'cover',
      flex: 1,
      marginBottom: 40,
      marginLeft: 25,
      marginTop: 0,
      alignItems: "center",
      justifyContent: "center", 
    },
    puzzleContainer: {
      height: 200,
      aspectRatio: 1,

    },
    userinput: {
      height: 50,
      width: '90%',
      borderColor: 'gray',
      fontSize: 17,
      fontWeight: '500',
      color: '#fff',
      backgroundColor: '#91C8E4',
      borderWidth: 1,
      padding: 10,
      borderRadius: 5,
      marginBottom: 20,
    },
    passinput: {
      height: 50,
      width: '90%',
      borderColor: 'gray',
      fontSize: 17,
      fontWeight: '500',
      color: '#fff',
      backgroundColor: '#FFC300',
      borderWidth: 1,
      padding: 10,
      borderRadius: 5,
      marginBottom: 20,
    },
    loginBtn: {
      height: 50,
      width: 270,
      backgroundColor: "#BACD92",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 20,
      // elevation: 4,
    },
    gifContainer: {
      height: 200,
      aspectRatio: 1,
    },
    loadText: {
      fontSize: 15,
      justifyContent: "center",
      textAlign: "center"
    },
    PracticeTest: {
      backgroundColor: '#ACE1AF',
      fontSize: 14,
      padding: 16,
      borderRadius: 26,
      textTransform: 'uppercase',
      fontWeight: '700',
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      color: '#4C489D',
      borderBottomColor: 'transparent',
      borderColor: 'transparent',
      paddingTop: 10,
      marginBottom: 20,
      marginHorizontal: 20,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.5,
      shadowRadius: 2,
      elevation: 2,
    },
    PracticeText: {
      fontSize: 15,
      justifyContent: "center",
      textAlign: "center",
      fontWeight: '700',
      color: '#fff'
    },
    TimerTest: {
      backgroundColor: '#6DC5D1',
      fontSize: 14,
      padding: 16,
      borderRadius: 26,
      textTransform: 'uppercase',
      fontWeight: '700',
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      color: '#4C489D',
      borderBottomColor: 'transparent',
      borderColor: 'transparent',
      paddingTop: 10,
      marginBottom: 20,
      marginHorizontal: 20,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.5,
      shadowRadius: 2,
      elevation: 2,
    },
    TimerText: {
      fontSize: 15,
      justifyContent: "center",
      textAlign: "center",
      fontWeight: '700',
      color: '#fff'
    },
    logoutBtn: {
      height: 50,
      width: 270,
      backgroundColor: "#C40C0C",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 20,
      marginBottom: 10,
    },
    loginTxt: {
      textTransform: 'uppercase',
      color: "#fff",
      fontSize: 15,
      fontWeight: '700',
    },
    splashContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 20,
      backgroundColor: 'white',
    }

});



export default Styles;


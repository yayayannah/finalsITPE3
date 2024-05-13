import { StyleSheet } from "react-native"

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    input: {
        borderBottomWidth: 2,
        borderBottomColor: '#D1D1D4',
        backgroundColor: 'transparent',
        padding: 10,
        paddingLeft: 24,
        fontWeight: '700',
        width: '75%',
        marginBottom: 5,
        marginTop:20,
      },
    welcomeTest: {
        fontSize: 20,
        marginBottom: 20,
    },
    splash: {
        width: '100%',
        height: '100%',
    },
    splashcontainer: {
        flex: 1,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        alignItems: 'center',
    },
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
    button: {
        backgroundColor: '#fff',
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
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2,
      },
      backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },

});



export default Styles;


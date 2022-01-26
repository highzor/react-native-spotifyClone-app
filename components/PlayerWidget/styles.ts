import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 64,
        backgroundColor: '#131313',
        flexDirection: 'row',
        margin: 15,
        width: '100%',
        borderWidth: 2,
        borderColor: 'black',
        alignItems: 'center',
    },
    rightContainer: {
        justifyContent: 'space-around',
        marginLeft: 15
    },
    image: {
        width: 75,
        height: 75,
        marginRight: 10
    },
    title: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        margin: 10
    },
    artist: {
        color: 'lightgray',
        fontSize: 16
    },

});

export default styles;
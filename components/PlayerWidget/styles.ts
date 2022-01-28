import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 48,
        backgroundColor: '#131313',
        width: '100%',
        borderWidth: 2,
        borderColor: 'black',
    },
    rightContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    nameContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    iconsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 100,
        justifyContent: 'space-around'
    },
    row: {
        flexDirection: 'row',
    },
    progress: {
        height: 3,
        backgroundColor: '#bcbcbc'
    },
    image: {
        width: 75,
        height: 75,
        marginRight: 5
    },
    title: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
        margin: 5
    },
    artist: {
        color: 'lightgray',
        fontSize: 12
    },

});

export default styles;
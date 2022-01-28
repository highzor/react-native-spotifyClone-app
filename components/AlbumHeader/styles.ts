import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 20
    },
    image: {
        width: 200,
        height: 200,
        margin: 15
    },
    name: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold'
    },
    creatorContainer: {
        flexDirection: 'row',
        margin: 4
    },
    creator: {
        color: 'lightgray',
        margin: 5,
        fontSize: 18,
    },
    likes: {
        color: 'lightgray',
        margin: 5,
        fontSize: 18
    },
    button: {
        backgroundColor: '#1CD05D',
        height: 40,
        width: 150,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18
    },
});

export default styles;
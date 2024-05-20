import { StyleSheet } from "react-native";




export const otpStyles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop:150,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        paddingBottom:10,
    },
    subtitle: {
        fontSize: 14,
        marginBottom: 20,
    },
    inputContainer: {
        display:'flex',
        flexDirection: 'row',
        justifyContent:'space-between',
        marginBottom: 20,
    },
    input: {
        width: 40,
        height: 40,
        borderWidth: 1,
        borderRadius: 5,
        marginRight: 10,
        textAlign: 'center',
        borderColor:'#E5E5E5'
    },
    arrowIcon: {
        alignSelf: 'center',
    },
});
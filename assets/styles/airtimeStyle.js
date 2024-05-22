import { StyleSheet } from "react-native";



export const airtimeStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding:10,
        backgroundColor:'white'
    },
    backText: {
        color: 'black',
        fontSize: 20,
        fontWeight:'400',
        marginRight: 5,
        marginBottom: 50,
      },
    linkText: {
        color: 'black',
        textDecorationLine: 'none',
        fontSize: 15,
        marginBottom: 7,
    },
    topComponent: {},
    radioButtons: {},
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        backgroundColor: '#E4E4E4',
        marginTop: 20,
    },
      inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between', // Pushes TextInput and Ionicons to opposite ends
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        backgroundColor: '#E4E4E4',
        marginTop: 20,
    },
      
    amounts: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop:20
    },
    individualAmount: {
        borderWidth: 1,
        borderColor: '#003D8E',
        borderRadius: 10,
        padding: 10,
        width: 50,
        fontSize: 10,
        textAlign: 'center',
    },
    buyAirtime :{
        fontSize: 24,
        color:'#003D8E'
    },
    radioGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 20,
        borderRadius: 8,
        backgroundColor: 'white',
    },
    radioButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    radioLabel: {
        marginLeft: 8,
        fontSize: 16,
        color: '#333',
    },
    button:{
        paddingTop:20
    }
});
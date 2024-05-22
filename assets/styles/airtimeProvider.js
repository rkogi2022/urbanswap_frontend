import { StyleSheet } from "react-native";


export const airtimeProviderStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: 'white'
    },
    backText: {
        color: 'black',
        fontSize: 20,
        fontWeight:'400',
        marginRight: 5,
        marginBottom: 50,
    },
 
    arrowIcon: {
        alignSelf: 'center',
    },
    buyAirtime: {
        fontSize: 24,
        color: '#003D8E',
        paddingBottom:5,
        fontWeight:'600'
    },
    payment: {
        color: '#8B8B8B',
        fontSize: 16
    },
    rowItem: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 20,
        height:120,
        
    },
    usText: {
        color: 'white',
        fontSize:12,
        fontWeight:'600'
    },
    usTextBal: {
        color: 'white',
        fontSize:8,
        fontWeight:'600',
        paddingTop:20
    },
    urbanSwap: {
        flex: 1,
        textAlign: 'center',
        backgroundColor: '#003D8E',
        padding: 30,
        borderRadius: 10,
        marginRight: 10 
    },
    mpesa: {
        flex: 1,
        textAlign: 'center',
        backgroundColor: '#0EB520',
        padding: 30,
        borderRadius: 10,
        marginRight: 10, 
        justifyContent: 'center', 
        alignItems: 'center',
    },
    airtel: {
        flex: 1,
        textAlign: 'center',
        backgroundColor: '#E8242D',
        padding: 30,
        borderRadius: 10,
        marginRight: 10,
        justifyContent: 'center', 
        alignItems: 'center', 
    },
    imageInAirtel: {
        width: 80, 
        height: 80, 
        resizeMode: 'contain', 
    },
    imageInMpesa: {
        width: 120, 
        height: 120, 
        resizeMode: 'contain', 
    },
    telkom: {
        flex: 1,
        textAlign: 'center',
        backgroundColor: '#00A7C7',
        padding: 30,
        borderRadius: 10,
        marginRight: 10,
        justifyContent: 'center', // Center the content horizontally
        alignItems: 'center', // Center the content vertically
    },
    buttonContainer :{
        paddingTop:20
    }
});
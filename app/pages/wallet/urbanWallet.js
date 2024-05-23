import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const UrbanWallet = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.backText}>&lt; {} Back {}</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>Wallet</Text>
      </View>

      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardTitle}>Urban Wallet</Text>
          <TouchableOpacity>
            <Text style={styles.recentTransactionsText}>Recent Transactions<Icon name="chevron-forward-outline" size={16} color="white" style={styles.arrowIcon} /></Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.balanceText}>KSH 200.00</Text>
        <TouchableOpacity style={styles.topUpButton}>
          <Text style={styles.topUpButtonText}><Icon name="card-outline" size={15}  color="#000000;" />Top Up Wallet</Text>
        </TouchableOpacity>
      </View>
      

      <Text style={styles.paymentMethodsTitle}>Payment Methods</Text>

      <View style={styles.paymentMethodsContainer}>
            {paymentMethods.map((method, index) => (
                <View key={index}>
                    <View style={styles.paymentMethodRow}>
                        <Text style={styles.paymentMethodText}><Icon name={method.icon} size={24}  color="#000" />{method.name}</Text>
                        <Text style={styles.arrowText}>{'>'}</Text>
                    </View>
                    {index < paymentMethods.length - 1 && <View style={styles.separator} />}
                </View>
            ))}
        </View>

      <TouchableOpacity style={styles.addPaymentButton}>
        <Text style={styles.addPaymentButtonText}>+ Add Payment Method</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const paymentMethods = [
  { name: 'M-Pesa', icon: 'phone-portrait-outline' },
  { name: 'Visa .....1122', icon: 'card-outline' }, // use a suitable Visa icon
  { name: 'Mastercard .....0439', icon: 'card-outline' }, // use a suitable Mastercard icon
  { name: 'Cash', icon: 'cash-outline' },
];


const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  header: {
    alignItems: 'left',
    marginBottom: 16,
  },
  backText: {
    color: 'black',
    fontSize: 16,
    marginBottom: '5px',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: '5px',
    marginTop:'20px',
    color:'darkblue',
  },
  card: {
    backgroundColor: '#0061E3',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    // Linear gradient background color
    backgroundImage: 'linear-gradient(#0061E3 100%, #003173 100%)',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  cardTitle: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  recentTransactionsText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  balanceText: {
    color: '#FFFFFF',
    fontSize: 32,
    marginBottom: 16,
  },
  topUpButton: {
    backgroundColor: '#EFEFEF',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    width:170,
  },
  topUpButtonText: {
    color: '#000000',
    fontSize: 16,
    alignItems:'center',
  },
  paymentMethodsTitle: {
    color: '#003D8E',
    fontSize: 24,
    marginBottom: 16,
  },
  paymentMethodsContainer: {
    marginBottom: 16,
  },
  paymentMethodRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
  },
  paymentMethodText: {
    color: '#000000',
    fontSize: 18,
  },
  arrowText: {
    color: '#000000',
    fontSize: 18,
  },
  separator: {
    height: 1,
    backgroundColor: '#CCCCCC',
  },
  addPaymentButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#E2E2E2',
    borderRadius: 8,
    width:170,
  },
  addPaymentButtonText: {
    color: '#000000',
    fontSize: 16,
  },
});

export default UrbanWallet;

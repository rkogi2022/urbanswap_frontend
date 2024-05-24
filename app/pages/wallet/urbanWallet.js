import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useEffect } from 'react';
import { checkTokens } from '@/functions/ValidateAuthentication';
import { useNavigation } from '@react-navigation/native';

const UrbanWallet = () => {
  const navigation = useNavigation();

  useEffect(() => {
    checkAndRedirect();
  }, []);

  const checkAndRedirect = async () => {
    const hasTokens = await checkTokens();
    if (!hasTokens) {
      navigation.navigate('LoginScreen');
    }
  };

  const navigateToTopUpWallet = () => {
    navigation.navigate('TopUpWallet');
  };

  const navigateToHomepage = () => {
    navigation.navigate('home');
  };

  const navigateToAddPaymentMethod = () => {
    navigation.navigate('AddPaymentMethod');
  };

  const navigateToEditMpesa = () => {
    navigation.navigate('EditMpesa');
  };

  const navigateToEditCard = () => {
    navigation.navigate('EditCard');
  };


  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={navigateToHomepage}>
          <Text style={styles.backText}>&lt; Back</Text>
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
        <TouchableOpacity onPress={navigateToTopUpWallet} style={styles.topUpButton}>
          <Text style={styles.topUpButtonText}><Icon name="card-outline" size={15} color="#000" /> Top Up Wallet</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.paymentMethodsTitle}>Payment Methods</Text>

      <View style={styles.paymentMethodsContainer}>
                <TouchableOpacity onPress={navigateToEditMpesa} style={styles.paymentMethod}>
                    <Text style={styles.paymentMethodText}>
                        <Icon name="phone-portrait-outline" size={26}  color="#000000;" />M-Pesa</Text>
                    <Icon name="chevron-forward" size={16} color="#000" />
                </TouchableOpacity>
                <TouchableOpacity onPress={navigateToEditCard} style={styles.paymentMethod}>
                    <Text style={styles.paymentMethodText}><Icon name="card-outline" size={26}  color="#000" />Visa .....1122</Text>
                    <Icon name="chevron-forward" size={16} color="#000" />
                </TouchableOpacity>
                <TouchableOpacity onPress={navigateToEditCard} style={styles.paymentMethod}>
                    <Text style={styles.paymentMethodText}><Icon name="card-outline" size={26} color="blue" />Mastercard .....0439</Text>
                    <Icon name="chevron-forward" size={16}  color="#000" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.paymentMethod}>
                    <Text style={styles.paymentMethodText}><Icon name="cash-outline" size={26} color="blue" />Cash</Text>
                </TouchableOpacity>
            </View>

      <TouchableOpacity onPress={navigateToAddPaymentMethod} style={styles.addPaymentButton}>
        <Text style={styles.addPaymentButtonText}>+ Add Payment Method</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  header: {
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  backText: {
    color: 'black',
    fontSize: 16,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 5,
    marginTop: 20,
    color: 'darkblue',
  },
  card: {
    backgroundColor: '#0061E3',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
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
    width: 170,
  },
  topUpButtonText: {
    color: '#000000',
    fontSize: 16,
    alignItems: 'center',
  },
  paymentMethodsTitle: {
    color: '#003D8E',
    fontSize: 24,
    marginBottom: 16,
  },
  paymentMethodsContainer: {
    marginTop: 2,
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: 20,
},
paymentMethod: {
    flexDirection: 'row',
    width: '100%',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    justifyContent: 'space-between'
},
paymentMethodText: {
    fontFamily: 'Product Sans',
    fontSize: 16,
    color: '#000',
    marginLeft: 0,
},
  addPaymentButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#E2E2E2',
    borderRadius: 8,
    width: 170,
  },
  addPaymentButtonText: {
    color: '#000000',
    fontSize: 16,
  },
});

export default UrbanWallet;

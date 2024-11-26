export const handleTopUpWallet = (topupAmount) => {
    // Get the current user's ID
    const currentUser = firebase.auth().currentUser;
  
    if (currentUser) {
      // Get the user ID
      const userId = currentUser.uid;
      
      // Create the data payload
      const data = {
        userId: userId,
        topupAmount: topupAmount,
        userType: 'CUSTOMER'
      };
  
      // Log the data before sending it to the API
      console.log('Data sent to Wallet API:', data);
  
      // Define the endpoint URL
      const endpoint = 'https://677b-197-232-87-139.ngrok-free.app/api/wallets';
  
      // Make the fetch request to the API
      fetch(endpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(async response => {
        if (response.status === 200) {
          const responseData = await response.json();
          console.log('Wallet API Response:', responseData);
          Alert.alert('Success', 'Wallet topped up successfully.');
        } else {
          throw new Error('Network response was not ok');
        }
      })
      .catch(error => {
        console.error('Error topping up wallet:', error);
        Alert.alert('Error', 'Failed to top up wallet. Please try again later.');
      });
    } else {
      Alert.alert('Error', 'User not logged in.');
    }
  };
  
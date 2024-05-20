import React from 'react';
import { StyleSheet, View, Text, Dimensions, Image, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import Svg, { Path } from "react-native-svg";

const SplashScreen = () => {
  const { width, height } = Dimensions.get('window');
  const imageHeight = height / 1.5; // Set image height to cover half of the screen

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#0B60D0', '#003D8D', '#001128']}
        style={[styles.container, styles.linearGradient]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <View style={styles.content}>
          <View style={styles.upperComponent}>
            <Image 
              source={require('../../assets/images/u_logo.png')} 
              style={{ width: 80, height: 80 }} 
            />
            
            <Text style={styles.text}>UrbanSwap</Text>
          </View>
         
          <Svg width="430" height="592" viewBox="0 0 430 592" fill="none">
            <Path d="M386.644 0C371.195 2.37081 363.088 15.1572 363.088 15.1572C363.088 15.1572 295.085 255.648 290.278 279.436C285.472 303.224 290.278 307.886 290.278 307.886H289.143C331.529 333.805 359.866 380.768 359.866 434.418C359.866 516.064 294.239 582.26 213.296 582.26C132.353 582.26 66.7263 516.064 66.7263 434.418C66.7263 380.715 95.1159 333.698 137.608 307.806C143.576 298.962 140.962 286.255 140.962 286.255L67.4129 15.1572C60.1241 3.06341 49.3492 0.47949 46.2858 0H-169V423.336C-169 635.617 1.60182 807.7 212.055 807.7H217.733C428.186 807.7 598.788 635.617 598.788 423.336V0H386.618H386.644Z" fill="#1c4c78"/>
          </Svg>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  linearGradient: {
    flex: 1,
  },
  content: {
    flex: 1, 
    justifyContent: 'flex-end', 
    alignItems: 'center',
  },
  logo: {
    width: '100%', 
  },
  text: {
    fontSize: 34,
    color: 'white',
    fontWeight: 'bold',
  },
  upperComponent :{
    zIndex:1,
    alignItems: 'center',
    justifyContent:'center',
    paddingBottom:470,
    position:'absolute',
  }
});

export default SplashScreen;

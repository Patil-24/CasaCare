import React, { useEffect } from 'react';
import { View, Image, StyleSheet, Dimensions,useColorScheme } from 'react-native';

const SplashScreen = ({ navigation }) => {
  const colorScheme = useColorScheme();
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login');
    }, 3000);
  }, []);
  const { width, height } = Dimensions.get('window');
  const logoSize = Math.min(width * 0.8, height * 0.8);
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      // backgroundColor: '#FFCC2A',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colorScheme === 'dark' ? '#000' : '#fff',
    },
    logo:{
      height:150,
      width:250,
    }
   
  });
  return (
    <View style={styles.container}>
      <Image source={require('../assests/logo.png')} style={styles.logo} />
    </View>
  );
};


export default SplashScreen;

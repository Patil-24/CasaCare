import React from 'react';
import {View, Text, StyleSheet, useColorScheme} from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';

const NotificationScreen = () => {
  const colorScheme = useColorScheme();
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colorScheme === 'dark' ? '#fff' : '#fff',
    },
    text: {
      fontSize: 22,
      fontWeight: 'bold',
      marginTop: 10,
      color: colorScheme === 'dark' ? '#000' : '#000',
      alignContent: 'center',
      fontWeight: 'bold',
      textAlign: 'center',
      alignItems: 'center',
    },
  });
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.text}>No Notifications</Text>
      <Footer />
    </View>
  );
};

export default NotificationScreen;

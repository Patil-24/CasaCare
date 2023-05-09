import React, {useState, useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import {View, StyleSheet, TouchableOpacity, VirtualizedList} from 'react-native';
import {WebView} from 'react-native-webview';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from "@react-native-firebase/messaging";

import Footer from '../components/Footer';
// import Header from '../components/Header';
import {useNavigation} from '@react-navigation/native';
import Header from '../components/Header';

const HomeScreen = () => {
  const navigation = useNavigation();
  //   const currentUser = auth().currentUser;
  //   const number = currentUser ? currentUser.phoneNumber.replace('+91', '') : '';
  //   console.log(number);
  // const checkToken = async () => {
  //   var fcmToken = await messaging().getToken();
  //   if (fcmToken) {
  //      console.log(fcmToken);
  //   } 
  //  }
   
  //  checkToken();
  // const [phoneNumber, setPhoneNumber] = useState('');
  // useEffect(() => {
  //   // Retrieve the phone number from local storage
  //   AsyncStorage.getItem('phoneNumber').then(value => {
  //     if (value !== null) {
  //       setPhoneNumber(value);
  //     }
  //   });
  // }, []);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [fcmToken, setFcmToken] = useState('');
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      console.log('Received a new notification', remoteMessage);
      // Do something with the notification, e.g. show an alert
    });
  
    return unsubscribe;
  }, []);
  

  useEffect(() => {
    // Retrieve the phone number from local storage
    AsyncStorage.getItem('phoneNumber').then(value => {
      if (value !== null) {
        setPhoneNumber(value);
      }
    });

    const checkToken = async () => {
      var token = await messaging().getToken();
      if (token) {
         setFcmToken(token);
      } 
    }
   
    checkToken();
  }, []);


  return (
    <View style={styles.container}>
     <Header/>

      <WebView
        source={{
          uri: `https://casacare.in/home/appindex?isMobile=true&mobileNumber=${phoneNumber}&fcm=${fcmToken}`,
        }}
        style={styles.webview}
      />

      {/*Footer*/}
      <Footer navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 60,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  menuIcon: {
    padding: 10,
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    width: 80,
    height: 40,
  },
  webview: {
    flex: 1,
  },

  menuDropdown: {
    width: 500,
    alignContent: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    elevation: 3,
  },
  menuItem: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  menuItemText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;

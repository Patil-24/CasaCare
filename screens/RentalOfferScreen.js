import React from 'react';
import {View, StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';
import Header from '../components/Header';
import Footer from '../components/Footer';

const RentalOfferScreen = () => {
  return (
    <View style={styles.container}>
      <Header />

      <WebView
        source={{uri: 'https://casacare.in/admin/dashboard/view_tenent'}}
        style={styles.webview}
      />
      <Footer />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default RentalOfferScreen;

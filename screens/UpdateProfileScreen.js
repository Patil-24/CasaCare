import React from 'react';
import {View, StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';
import Header from '../components/Header';
import Footer from '../components/Footer';

const UpdateProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Header />

      <WebView
        source={{uri: 'https://casacare.in/admin/dashboard/edit_profile'}}
        // source={{uri: 'https://casacare.in/'}}
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

export default UpdateProfileScreen;

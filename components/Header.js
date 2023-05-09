import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
// import AsyncStorage from '@react-native-async-storage/async-storage';

import {useNavigation} from '@react-navigation/native';
import {DrawerActions} from '@react-navigation/drawer';

const Header = () => {
  const navigation = useNavigation();
  // const [isSliderOpen, setIsSliderOpen] = useState(false);

  // const toggleSlider = () => {
  //   setIsSliderOpen(!isSliderOpen);
  // };

  // const navigateToHomeScreen = () => {
  //   navigation.navigate('Home');
  //   setIsSliderOpen(false);
  // };

  // const navigateToAboutScreen = () => {
  //   navigation.navigate('About');
  //   setIsSliderOpen(false);
  // };

  // const navigateToPropertiesScreen = () => {
  //   navigation.navigate('Properties');
  //   setIsSliderOpen(false);
  // };

  // const navigateToTestimonialScreen = () => {
  //   navigation.navigate('Testimonial');
  //   setIsSliderOpen(false);
  // };

  // const navigateToServicesScreen = () => {
  //   navigation.navigate('Services');
  //   setIsSliderOpen(false);
  // };

  // const navigateToNewsScreen = () => {
  //   navigation.navigate('News');
  //   setIsSliderOpen(false);
  // };

  // const navigateContactScreen = () => {
  //   navigation.navigate('Contact');
  //   setIsSliderOpen(false);
  // };

  const navigateToNotificationScreen = () => {
    navigation.navigate('Notification');
    // setIsSliderOpen(false);
  };
  const Drawer = () => {
    navigation.openDrawer();
    // navigation.dispatch(DrawerActions.toggleDrawer());

    // navigation.dispatch(DrawerActions.toggleDrawer());

    // setIsSliderOpen(false);
  };
  // const navigateToProfileScreen = () => {
  //   navigation.navigate('Profile');
  //   setIsSliderOpen(false);
  // };

  // const handleSignOut = async () => {
  //   try {
  //     await AsyncStorage.removeItem('user');
  //     navigation.reset({
  //       index: 0,
  //       routes: [{ name: 'Login' }],
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={Drawer}>
        <Icon name="menu" size={24} color="black" />
      </TouchableOpacity>
      <View style={styles.logoContainer}>
        <Image source={require('../assests/logo.png')} style={styles.logo} />
      </View>
      <TouchableOpacity
        style={styles.notificationButton}
        onPress={navigateToNotificationScreen}>
        <Icon name="notifications" size={24} color="black" />
      </TouchableOpacity>
      {/* {isSliderOpen && (
        <TouchableOpacity onPress={toggleSlider} style={styles.sliderBackdrop}>
          <View style={styles.slider}>
            <TouchableOpacity
              onPress={navigateToHomeScreen}
              style={styles.sliderItem}>
              <Icon name="home" size={24} color="#ffffff" />
              <Text style={styles.sliderItemText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={navigateToAboutScreen}
              style={styles.sliderItem}>
              <Icon name="info" size={24} color="#ffffff" />
              <Text style={styles.sliderItemText}>About Us</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={navigateToServicesScreen}
              style={styles.sliderItem}>
              <Icon name="build" size={24} color="#ffffff" />
              <Text style={styles.sliderItemText}>Services</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={navigateToPropertiesScreen}
              style={styles.sliderItem}>
              <Icon name="location-city" size={24} color="#ffffff" />
              <Text style={styles.sliderItemText}>Properties</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={navigateToTestimonialScreen}
              style={styles.sliderItem}>
              <Icon name="star" size={24} color="#ffffff" />
              <Text style={styles.sliderItemText}>Testimonial</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={navigateToNewsScreen}
              style={styles.sliderItem}>
              <Icon name="announcement" size={24} color="#ffffff" />
              <Text style={[styles.sliderItemText, {marginLeft: 10}]}>
                News
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={navigateContactScreen}
              style={styles.sliderItem}>
              <Icon name="mail" size={24} color="#ffffff" />
              <Text style={styles.sliderItemText}>Contact</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={navigateToProfileScreen}
              style={styles.sliderItem}>
              <Icon name="person" size={24} color="#ffffff" />
              <Text style={styles.sliderItemText}>Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={navigateToNotificationScreen}
              style={styles.sliderItem}>
              <Icon name="notifications" size={24} color="#ffffff" />
              <Text style={styles.sliderItemText}>Notifications</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleSignOut}
              style={styles.sliderItem}>
              <Icon name="logout" size={24} color="#ffffff" />
              <Text style={styles.sliderItemText}>Sign Out</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      )} */}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    height: 55,
    backgroundColor: '#ffffff',
    zIndex: 1,
    elevation: 2,
  },
  sliderButton: {
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
  notificationButton: {
    padding: 10,
  },
  sliderBackdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '55%',
    height: '50%',
    zIndex: 0,
  },
  slider: {
    position: 'absolute',
    top: 55,
    left: 0,
    width: '90%',
    backgroundColor: '#333',
    paddingVertical: 0,
    paddingHorizontal: 0,
    zIndex: 1,
    elevation: 2,
  },
  sliderItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingLeft: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ffffff',
  },
  sliderItemIcon: {
    marginRight: 10,
  },
  sliderItemText: {
    marginLeft: 10,
    fontSize: 19,
    fontWeight: 'bold',
    color: '#f8be2e',
  },
});

export default Header;

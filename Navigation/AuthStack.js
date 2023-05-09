import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import CustomDrawer from '../components/CustomDrawer';

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import AboutScreen from '../screens/AboutScreen';
import PropertiesScreen from '../screens/PropertiesScreen';
import TestimonialScreen from '../screens/TestimonialScreen';
import ServicesScreen from '../screens/ServicesScreen';
import NewsScreen from '../screens/NewsScreen';
import ContactScreen from '../screens/ContactScreen';
import UpdateProfileScreen from '../screens/UpdateProfileScreen';
import NotificationScreen from '../screens/NotificationScreen';
import DashboardScreen from '../screens/DasboardScreen';
import RentalOfferScreen from '../screens/RentalOfferScreen';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

const Root = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: '#FFCC2A',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333',
        drawerLabelStyle: {
          marginLeft: -25,
          fontFamily: 'Roboto-Medium',
          fontSize: 15,
        },
      }}>
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="person-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="laptop-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Properties"
        component={PropertiesScreen}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Account Statement"
        component={AboutScreen}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="chatbox-ellipses-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Services Request"
        component={ServicesScreen}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="timer-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Property Documents"
        component={NewsScreen}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="document-text-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Images"
        component={ContactScreen}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="image-outline" size={22} color={color} />
            // <FontAwesome5 name="fa-solid fa-image" size={22} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="Rental Offer"
        component={RentalOfferScreen}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="pricetags-outline" size={22} color={color} />
          ),
        }}
      />
      {/* <Drawer.Screen
        name="Notifications"
        component={NotificationScreen}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="settings-outline" size={22} color={color} />
          ),
        }}
      /> */}
      <Drawer.Screen
        name="Update Profile"
        component={UpdateProfileScreen}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="person-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons
              name="notifications-circle-outline"
              size={22}
              color={color}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};
const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={Root}
        options={{headerShown: false}}
      />
      {/* <Stack.Screen name="Home" component={Root} options={{
        header: () => <Header />,
        footer: () => <Footer />,
      }} /> */}
      {/* <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      /> */}
      {/* <Stack.Screen
        name="Profile"
        component={Root}
        options={{headerShown: false}}
      /> */}
      {/* <Stack.Screen
        name="UpdateProfile"
        component={Root}
        options={{headerShown: false}}
      /> */}
      {/* <Stack.Screen
        name="About"
        component={AboutScreen}
        options={{headerShown: false}}
      /> */}
      {/* <Stack.Screen
        name="Properties"
        component={PropertiesScreen}
        options={{headerShown: false}}
      /> */}
      {/* <Stack.Screen
        name="Testimonial"
        component={TestimonialScreen}
        options={{headerShown: false}}
      /> */}
      {/* <Stack.Screen
        name="Services"
        component={ServicesScreen}
        options={{headerShown: false}}
      /> */}
      {/* <Stack.Screen
        name="News"
        component={NewsScreen}
        options={{headerShown: false}}
      /> */}
      {/* <Stack.Screen
        name="Contact"
        component={ContactScreen}
        options={{headerShown: false}}
      /> */}
      {/* <Stack.Screen
        name="Update Profile"
        component={UpdateProfileScreen}
        options={{headerShown: false}}
      /> */}
      {/* <Stack.Screen
        name="Notification"
        component={Root}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UpdateProfile"
        component={Root}
        options={{headerShown: false}}
      /> */}
      {/* <Stack.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{headerShown: false}}
      /> */}
      {/* <Stack.Screen
        name="Search"
        component={Root}
        options={{headerShown: false}}
      /> */}
    </Stack.Navigator>
  );
};
export default AuthStack;

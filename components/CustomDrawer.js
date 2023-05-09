import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CustomDrawer = (props) => {
  const navigation = useNavigation();
  const colorScheme = useColorScheme();
  const handleSignOut = async () => {
    console.log("Hello");
    try {
      await AsyncStorage.removeItem('user');
      navigation.reset({
        index: 0,
        routes: [{ name: 'Login' }],
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: '#FFCC2A'}}>
        <Image
          source={require('../assests/ccapp.png')}
          style={{
            height: 80,
            width: 80,
            borderRadius: 40,
            marginBottom: 10,
            marginLeft: 15,
          }}
        />
        <Text
          style={{
            color: colorScheme === 'dark' ? '#000' : '#fff',
            fontSize: 18,
            fontFamily: 'Roboto-Medium',
            marginBottom: 5,
            fontWeight: 'bold',
            marginLeft: 15,
          }}>
          Casa Care
        </Text>
        <View style={{flexDirection: 'row'}}>
          {/* <Text
            style={{
              color: '#fff',
              fontFamily: 'Roboto-Regular',
              marginLeft: 15,
              marginRight: 5,
            }}>
            Admin Name
          </Text>
          <FontAwesome5 name="coins" size={14} color="#fff" /> */}
        </View>
        <View
          style={{flex: 1,  backgroundColor: colorScheme === 'dark' ? '#fff' : '#fff', paddingTop: 10}}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View
        style={{padding: 1, borderTopWidth: 2, borderTopColor: '#ccc'}}>
        <TouchableOpacity
          onPress={handleSignOut}
          style={{paddingVertical: 15}}>
          <View
            style={{flexDirection: 'row', alignItems: 'center', marginLeft: 20,}}>
            <Ionicons name="exit-outline" size={22} />
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'Roboto-Medium',
                marginLeft: 5,
                color: colorScheme === 'dark' ? '#000' : '#000',
              }}>
              Sign Out
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;

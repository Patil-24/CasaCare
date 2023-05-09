import React, { useState } from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

const Footer = () => {
  const navigation = useNavigation();
  const [isSliderOpen, setIsSliderOpen] = useState(false);


  const goToHome = () => {
    navigation.navigate('Home');
    setIsSliderOpen(!isSliderOpen);
    
  };
  

  const goToProfile = () => {
    navigation.navigate('Profile');
  };
  const goToProperties = () => {
    navigation.navigate('Properties');
  };

  return (
    <View style={styles.footer}>
      <TouchableOpacity onPress={goToHome} style={styles.icon}>
        <Icon name="home" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={goToProfile} style={styles.icon}>
        <Icon name="person" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={goToProperties} style={styles.icon}>
        <Icon name="search" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  // footer: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-around',
  //   alignItems: 'center',
  //   height: 50,
  //   backgroundColor: '#ffffff',
    
    
  // },
  footer: {
    position: 'absolute',
    flexDirection: 'row',
    bottom: 0,
    width: '100%',
    height: 55,
    backgroundColor: 'white',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  icon: {
    alignItems: 'center',
  },
});

export default Footer;
// import React, { useState } from 'react';
// import {View, StyleSheet, TouchableOpacity, Platform} from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import {useNavigation} from '@react-navigation/native';

// const Footer = () => {
//   const navigation = useNavigation();
//   const [isSliderOpen, setIsSliderOpen] = useState(false);

//   const goToHome = () => {
//     navigation.navigate('Home');
//     setIsSliderOpen(!isSliderOpen);
//   };

//   const goToProfile = () => {
//     navigation.navigate('Profile');
//   };

//   const goToProperties = () => {
//     navigation.navigate('Properties');
//   };

//   return (
//     <View style={styles.footer}>
//       <TouchableOpacity onPress={goToHome} style={styles.icon}>
//         <Icon name="home" size={28} color="black" />
//       </TouchableOpacity>
//       <TouchableOpacity onPress={goToProfile} style={styles.icon}>
//         <Icon name="person" size={28} color="black" />
//       </TouchableOpacity>
//       <TouchableOpacity onPress={goToProperties} style={styles.icon}>
//         <Icon name="search" size={28} color="black" />
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   footer: {
//     position: 'absolute',
//     flexDirection: 'row',
//     bottom: 0,
//     width: '100%',
//     height: 55,
//     backgroundColor: '#ffffff',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//     ...Platform.select({
//       ios: {
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: -1 },
//         shadowOpacity: 0.2,
//         shadowRadius: 1,
//       },
//       android: {
//         elevation: 5,
//       },
//     }),
//   },
//   icon: {
//     alignItems: 'center',
//     marginVertical: 5,
//   },
// });

// export default Footer;

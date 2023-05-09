// // import React, { useState, useEffect } from 'react';
// // import {StyleSheet,Image, View, Text, TouchableOpacity,useColorScheme } from 'react-native';
// // import AsyncStorage from '@react-native-async-storage/async-storage';
// // import auth from '@react-native-firebase/auth';
// // import Header from '../components/Header';
// // import Footer from '../components/Footer';

// // const ProfileScreen = ({ navigation }) => {
// // const colorScheme = useColorScheme();
// // const currentUser = auth().currentUser;
// // const number = currentUser ? currentUser.phoneNumber.replace('+91', '') : '';
// // const uriProfile=`https://casacare.in/admin/login/getUserDetails`;
// // console.log(uriProfile);
// // const handleSignOut = async () => {
// //   try {
// //     await AsyncStorage.removeItem('user');
// //     navigation.reset({
// //       index: 0,
// //       routes: [{ name: 'Login' }],
// //     });
// //   } catch (error) {
// //     console.log(error);
// //   }
// // };
// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: colorScheme === 'dark' ? '#000' : '#fff',

// //   },
// //   header: {
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //     marginTop: 20,
// //   },
// //   avatar: {
// //     width: 120,
// //     height: 120,
// //     borderRadius: 60,
// //   },
// //   name: {
// //     fontSize: 22,
// //     fontWeight: 'bold',
// //     marginTop: 10,
// //     color: colorScheme === 'dark' ? '#fff' : '#000',
// //   },
// //   email: {
// //     fontSize: 18,
// //     color: '#777',
// //     marginTop: 5,
// //     color: colorScheme === 'dark' ? '#fff' : '#000',
// //   },
// //   buttonContainer: {
// //     marginTop: 30,
// //     width: '100%',
// //     flexDirection: 'row',
// //     justifyContent: 'space-around',
// //     color: colorScheme === 'dark' ? '#fff' : '#000',
// //   },
// //   button: {
// //     backgroundColor: '#FFCC2A',
// //     padding: 10,
// //     borderRadius: 5,
// //   },
// //   buttonText: {
// //     color: '#fff',
// //     fontSize: 18,
// //     fontWeight: 'bold',
// //     color: colorScheme === 'dark' ? '#fff' : '#000',
// //   },
// // });
// //   return (
// //     <View style={styles.container}>
// //       <Header/>
// //       <View style={styles.header}>
// //         <Image style={styles.avatar} source={require('../assests/user.png')}/>
// //         <Text style={styles.name}>Name : Casa Care</Text>
// //         <Text style={styles.name}>Mobile no : {number}</Text>
// //         <Text style={styles.name}>Email : casacare@gmail.com</Text>
// //       </View>
// //       <View style={styles.buttonContainer}>
// //         <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('UpdateProfile')}>
// //           <Text style={styles.buttonText}>Update Profile</Text>
// //         </TouchableOpacity>
// //         <TouchableOpacity style={styles.button} onPress={handleSignOut}>
// //           <Text style={styles.buttonText}>Sign Out</Text>
// //         </TouchableOpacity>
// //       </View>
// //       <Footer/>
// //     </View>
// //   );
// // }

// // export default ProfileScreen;

// // import React, {useState, useEffect} from 'react';
// // import {
// //   StyleSheet,
// //   Image,
// //   View,
// //   Text,
// //   TouchableOpacity,
// //   useColorScheme,
// // } from 'react-native';
// // import AsyncStorage from '@react-native-async-storage/async-storage';
// // import auth from '@react-native-firebase/auth';
// // import Header from '../components/Header';
// // import Footer from '../components/Footer';

// // const ProfileScreen = ({navigation}) => {
// //   const colorScheme = useColorScheme();
// //   const currentUser = auth().currentUser;
// //   const number = currentUser ? currentUser.phoneNumber.replace('+91', '') : '';
// //   const [userDetails, setUserDetails] = useState({
// //     name: 'Casa Care',
// //     number: number,
// //     email: 'casacare@gmail.com',
// //     city: '',
// //   });
// //   const uriProfile = `https://casacare.in/admin/login/getUserDetails`;

// //   useEffect(() => {
// //     fetch(uriProfile)
// //       .then(response => response.json())
// //       .then(data =>
// //         setUserDetails({
// //           name: data.client_name,
// //           number: data.client_mobile,
// //           email: data.client_email,
// //           city: data.client_resi,
// //         }),
// //       )
// //       .catch(error => console.log(error));
// //   }, []);

// //   const handleSignOut = async () => {
// //     try {
// //       await AsyncStorage.removeItem('user');
// //       navigation.reset({
// //         index: 0,
// //         routes: [{name: 'Login'}],
// //       });
// //     } catch (error) {
// //       console.log(error);
// //     }
// //   };

// //   const styles = StyleSheet.create({
// //     container: {
// //       flex: 1,
// //       backgroundColor: colorScheme === 'dark' ? '#000' : '#fff',
// //     },
// //     header: {
// //       alignItems: 'center',
// //       justifyContent: 'center',
// //       marginTop: 20,
// //     },
// //     avatar: {
// //       width: 120,
// //       height: 120,
// //       borderRadius: 60,
// //     },
// //     name: {
// //       fontSize: 22,
// //       fontWeight: 'bold',
// //       marginTop: 10,
// //       color: colorScheme === 'dark' ? '#fff' : '#000',
// //     },
// //     email: {
// //       fontSize: 18,
// //       color: '#777',
// //       marginTop: 5,
// //       color: colorScheme === 'dark' ? '#fff' : '#000',
// //     },
// //     buttonContainer: {
// //       marginTop: 30,
// //       width: '100%',
// //       flexDirection: 'row',
// //       justifyContent: 'space-around',
// //       color: colorScheme === 'dark' ? '#fff' : '#000',
// //     },
// //     button: {
// //       backgroundColor: '#FFCC2A',
// //       padding: 10,
// //       borderRadius: 5,
// //     },
// //     buttonText: {
// //       color: '#fff',
// //       fontSize: 18,
// //       fontWeight: 'bold',
// //       color: colorScheme === 'dark' ? '#fff' : '#000',
// //     },
// //   });

// //   return (
// //     <View style={styles.container}>
// //       <Header />
// //       <View style={styles.header}>
// //         <Image style={styles.avatar} source={require('../assests/user.png')} />
// //         <Text style={styles.name}>Name: {userDetails.name}</Text>
// //         <Text style={styles.name}>Mobile no: {userDetails.number}</Text>
// //         <Text style={styles.name}>Email: {userDetails.email}</Text>
// //         <Text style={styles.name}>City: {userDetails.city}</Text>
// //       </View>
// //       <View style={styles.buttonContainer}>
// //         <TouchableOpacity
// //           style={styles.button}
// //           onPress={() => navigation.navigate('UpdateProfile')}>
// //           <Text style={styles.buttonText}>Update Profile</Text>
// //         </TouchableOpacity>
// //         <TouchableOpacity style={styles.button} onPress={handleSignOut}>
// //           <Text style={styles.buttonText}>Sign Out</Text>
// //         </TouchableOpacity>
// //       </View>
// //       <Footer />
// //     </View>
// //   );
// // };

// // export default ProfileScreen;
// import React, {useState, useEffect} from 'react';
// import {
//   StyleSheet,
//   Image,
//   View,
//   Text,
//   TouchableOpacity,
//   useColorScheme,
// } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// // import auth from '@react-native-firebase/auth';
// import Header from '../components/Header';
// import Footer from '../components/Footer';
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
// const ProfileScreen = ({navigation}) => {
//   const colorScheme = useColorScheme();
//   // const currentUser = auth().currentUser;
//   // const number = currentUser ? currentUser.phoneNumber.replace('+91', '') : '';
//   const [userDetails, setUserDetails] = useState({
//     name: '',
//     number:'' ,
//     email: '',
//     city: '',
//   });
//   const uriProfile = `https://casacare.in/admin/login/getUserDetails`;
//   console.log(uriProfile);

//   useEffect(() => {
//     fetch(uriProfile)
//       .then(response => response.json())
//       .then(data =>
//         setUserDetails({
//           name: data.client_name,
//           number: data.client_mobile,
//           email: data.client_email,
//           city: data.client_resi,
//         }),
//       )
//       .catch(error => console.log(error));
//   }, []);

//   const handleSignOut = async () => {
//     try {
//       await AsyncStorage.removeItem('user');
//       navigation.reset({
//         index: 0,
//         routes: [{name: 'Login'}],
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: colorScheme === 'dark' ? '#000' : '#fff',
//     },
//     profileContainer: {
//       paddingVertical: 20,
//       paddingHorizontal: 30,
//     },
//     avatar: {
//       width: 120,
//       height: 120,
//       borderRadius: 60,
//       alignSelf: 'center',
//     },
//     userName: {
//       fontSize: 24,
//       fontWeight: 'bold',
//       textAlign: 'center',
//       marginTop: 20,
//       color: colorScheme === 'dark' ? '#fff' : '#000',
//     },
//     detailContainer: {
//       marginTop: 20,
//       flexDirection: 'row',
//       alignItems: 'center',
//       justifyContent: 'space-between',
//       paddingHorizontal: 20,
//     },
//     detailLabel: {
//       flex: 1,
//       fontSize: 15,
//       color: colorScheme === 'dark' ? '#fff' : '#000',
//       fontWeight:'bold',
//     },
//     detailValue: {
//       flex: 2,
//       fontSize: 15,
//       fontWeight:'bold',
//       color: colorScheme === 'dark' ? '#fff' : '#000',
//     },
//     buttonContainer: {
//       marginTop: 20,
//       width: '100%',
//       flexDirection: 'column',
//       alignItems: 'center',
//     },
//     button: {
//       backgroundColor: '#FFCC2A',
//       padding: 10,
//       borderRadius: 5,
//       marginVertical: 5,
//       width: '80%',
//       alignItems: 'center',
//     },
//     buttonText: {
//       color: '#fff',
//       fontSize: 18,
//       fontWeight: 'bold',
//       color: colorScheme === 'dark' ? '#fff' : '#000',
//     },
//   });

//   return (
//     <View style={styles.container}>
//       <Header />
//       <View style={styles.profileContainer}>
//         <Image style={styles.avatar} source={require('../assests/user.png')} />
//         <Text style={styles.userName}>{userDetails.name}</Text>
//         <View style={styles.detailContainer}>
//           <Text style={styles.detailLabel}>Mobile no  :</Text>
//           <Text style={styles.detailValue}>{userDetails.number}</Text>
//         </View>
//         <View style={styles.detailContainer}>
//           <Text style={styles.detailLabel}>Email  :</Text>
//           <Text style={styles.detailValue}>{userDetails.email}</Text>
//         </View>
//         <View style={styles.detailContainer}>
//           <Text style={styles.detailLabel}>City  :</Text>
//           <Text style={styles.detailValue}>{userDetails.city}</Text>
//         </View>
//       </View>
//       <View style={styles.buttonContainer}>
//         <TouchableOpacity
//           style={styles.button}
//           onPress={() => navigation.navigate('UpdateProfile')}>
//           <Text style={styles.buttonText}>Edit Profile</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={styles.button}
//           onPress={() => navigation.navigate('Dashboard')}>
//           <Text style={styles.buttonText}>Dashboard</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={styles.button}
//           onPress={handleSignOut}>
//           <Text style={styles.buttonText}>Logout</Text>
//         </TouchableOpacity>
//       </View>
//       <Footer/>
//     </View>
//   );
// };
// export default ProfileScreen;
import React, { useState, useEffect, useCallback } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { useFocusEffect } from '@react-navigation/native';

const ProfileScreen = ({ navigation }) => {
  const colorScheme = useColorScheme();

  const [userDetails, setUserDetails] = useState({
    name: '',
    number: '',
    email: '',
    city: '',
  });

  // const uriProfile = `https://casacare.in/admin/login/getUserDetails`;

  // useEffect(() => {
  //   fetch(uriProfile)
  //     .then((response) => response.json())
  //     .then((data) =>
  //       setUserDetails({
  //         name: data.client_name,
  //         number: data.client_mobile,
  //         email: data.client_email,
  //         city: data.client_resi,
  //       })
  //     )
  //     .catch((error) => console.log(error));
  // }, []);
  const uriProfile = `https://casacare.in/admin/login/getUserDetails`;

  const fetchUserDetails = useCallback(() => {
    fetch(uriProfile)
      .then((response) => response.json())
      .then((data) =>
        setUserDetails({
          name: data.client_name,
          number: data.client_mobile,
          email: data.client_email,
          city: data.client_resi,
        })
      )
      .catch((error) => console.log(error));
  }, []);

  useFocusEffect(fetchUserDetails);


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colorScheme === 'dark' ? '#fff' : '#fff',
    },
    profileContainer: {
      paddingVertical: 20,
      paddingHorizontal: 30,
    },
    logo: {
      width: 100,
      height: 100,
      alignSelf: 'center',
    },
    userName: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop: 20,
      color: colorScheme === 'dark' ? '#000' : '#000',
    },
    table: {
      marginTop: 20,
      marginHorizontal: 20,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 10,
    },
    tableRow: {
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
      paddingVertical: 10,
      paddingHorizontal: 5,
    },
    tableLabel: {
      flex: 1,
      fontWeight: 'bold',
      color: colorScheme === 'dark' ? '#000' : '#000',
    },
    tableValue: {
      flex: 2,
      color: colorScheme === 'dark' ? '#000' : '#000',
    },
  });

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.profileContainer}>
        <Image
          style={styles.logo}
          source={require('../assests/user.png')}
        />
        <Text style={styles.userName}>{userDetails.name}</Text>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <Text style={styles.tableLabel}>Mobile no:</Text>
            <Text style={styles.tableValue}>{userDetails.number}</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableLabel}>Email:</Text>
            <Text style={styles.tableValue}>{userDetails.email}</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableLabel}>City:</Text>
            <Text style={styles.tableValue}>{userDetails.city}</Text>
          </View>
        </View>
      </View>
      <Footer />
    </View>
  );
};

export default ProfileScreen;

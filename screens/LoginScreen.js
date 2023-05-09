import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
  Image,
  Alert,
  useColorScheme,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
const LoginScreen = ({navigation}) => {
  const colorScheme = useColorScheme();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [confirm, setConfirm] = useState(null);
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Check for persisted session
    checkSession();
  }, []);

  const checkSession = async () => {
    try {
      const user = await AsyncStorage.getItem('user');
      if (user) {
        navigation.reset({
          index: 0,
          routes: [{name: 'Home'}],
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleSendCode = async () => {
    if (!/^[0-9]{10}$/.test(phoneNumber)) {
      Alert.alert(
        'Invalid Phone Number',
        'Please enter a valid 10-digit phone number',
      );
      return;
    }

    try {
      setLoading(true);
      const response = await axios.get(
        `https://casacare.in/login/getappotp?mobilenumber=${phoneNumber}`,
      );
      const confirmation = response.data.otp.toString();
      setConfirm(() => ({confirm: () => response}));

      ToastAndroid.show('OTP Sent', ToastAndroid.SHORT);
    } catch (error) {
      console.error(error);
      Alert.alert('Failed to generate OTP', 'Try Again');
    } finally {
      setLoading(false);
    }
  };

  const handleConfirmCode = async () => {
    if (!/^[0-9]{6}$/.test(code)) {
      Alert.alert(
        'Invalid Verification Code',
        'Please enter a valid 6-digit verification code',
      );
      return;
    }

    try {
      setLoading(true);
      console.log(code);

      const confirmResult = await confirm.confirm(code);

      if (confirmResult.data) {
        await AsyncStorage.setItem('user', 'true');
        await AsyncStorage.setItem('phoneNumber', phoneNumber);
        navigation.reset({
          index: 0,
          routes: [{name: 'Home'}],
        });
      }
    } catch (error) {
      console.log(error);
      Alert.alert(
        'Invalid Verification Code',
        'Please enter a valid verification code',
      );
    } finally {
      setLoading(false);
    }
  };
  const handleUseAnotherNumber = () => {
    setPhoneNumber('');
    setConfirm(false);
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colorScheme === 'dark' ? '#000' : '#fff',
    },
    logo: {
      marginBottom: 50,
      height: 100,
      width: 200,

      borderRadius: 20,
      marginTop: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 25,
      color: colorScheme === 'dark' ? '#fff' : '#000',
    },
    input: {
      width: '80%',
      height: 48,
      borderWidth: 1,
      borderColor: colorScheme === 'dark' ? '#fff' : '#000',
      borderRadius: 8,
      paddingHorizontal: 16,
      marginBottom: 10,
      fontSize: 18,
    },
    button: {
      width: '80%',
      height: 48,
      backgroundColor: '#FFCC2A',
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10,
    },
    buttonText: {
      fontSize: 18,
      color: colorScheme === 'dark' ? '#fff' : '#000',
    },
    useAnotherNumberButton: {
      width: '80%',
      height: 48,
      backgroundColor: '#FFCC2A',
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10,
    },
    useAnotherNumberButtonText: {
      fontSize: 18,
      color: colorScheme === 'dark' ? '#fff' : '#000',
    },
  });

  // return (
  //   <View style={styles.container}>
  //     <Image source={require('../assests/logo.png')} style={styles.logo} />
  //     <Text style={styles.title}>Sign In</Text>
  //     <TextInput
  //       style={styles.input}
  //       placeholder="Enter Your Mobile Number"
  //       value={phoneNumber}
  //       onChangeText={setPhoneNumber}
  //       keyboardType="phone-pad"
  //     />
  //     {!confirm ? (
  //       <TouchableOpacity style={styles.button} onPress={handleSendCode} disabled={loading}>
  //         {loading ? (
  //           <Text style={styles.buttonText}>Loading...</Text>
  //         ) : (
  //           <Text style={styles.buttonText}>Send OTP</Text>
  //         )}
  //       </TouchableOpacity>
  //     ) : (
  //       <>
  //         <TextInput
  //           style={styles.input}
  //           placeholder="Enter OTP here"
  //           value={code}
  //           onChangeText={setCode}
  //           keyboardType="numeric"
  //         />
  //         <TouchableOpacity style={styles.button} onPress={handleConfirmCode} disabled={loading}>
  //           {loading ? (
  //             <Text style={styles.buttonText}>Loading...</Text>
  //           ) : (
  //             <Text style={styles.buttonText}>Confirm Code</Text>
  //           )}
  //         </TouchableOpacity>
  //       </>
  //     )}
  //   </View>
  // );
  return (
    <View style={styles.container}>
      <Image source={require('../assests/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Sign In</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Your Mobile Number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="phone-pad"
        editable={!confirm}
      />
      {!confirm ? (
        <TouchableOpacity
          style={styles.button}
          onPress={handleSendCode}
          disabled={loading}>
          {loading ? (
            <Text style={styles.buttonText}>Loading...</Text>
          ) : (
            <Text style={styles.buttonText}>Send OTP</Text>
          )}
        </TouchableOpacity>
      ) : (
        <>
          <TextInput
            style={styles.input}
            placeholder="Enter OTP here"
            value={code}
            onChangeText={setCode}
            keyboardType="numeric"
          />
          <TouchableOpacity
            style={styles.button}
            onPress={handleConfirmCode}
            disabled={loading}>
            {loading ? (
              <Text style={styles.buttonText}>Loading...</Text>
            ) : (
              <Text style={styles.buttonText}>Confirm Code</Text>
            )}
          </TouchableOpacity>
        </>
      )}
      {confirm && (
        <TouchableOpacity
          style={styles.useAnotherNumberButton}
          onPress={handleUseAnotherNumber}>
          <Text style={styles.useAnotherNumberButtonText}>
            Use Another Number
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default LoginScreen;

// import React, {useState, useEffect} from 'react';
// import {
//   StyleSheet,
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   Image,
//   Alert,
//   useColorScheme,
// } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import axios from 'axios';

// const LoginScreen = ({navigation}) => {
//   const colorScheme = useColorScheme();
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [confirm, setConfirm] = useState(false);
//   const [otp, setOtp] = useState('');
//   const [code, setCode] = useState('');
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     // Check for persisted session
//     checkSession();
//   }, []);

//   const checkSession = async () => {
//     try {
//       const user = await AsyncStorage.getItem('user');
//       if (user) {
//         navigation.reset({
//           index: 0,
//           routes: [{name: 'Home'}],
//         });
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleSendCode = async () => {
//     if (phoneNumber.length !== 10) {
//       Alert.alert(
//         'Invalid Phone Number',
//         'Please enter a valid 10-digit phone number',
//       );
//       return;
//     }

//     if (!/^\d+$/.test(phoneNumber)) {
//       Alert.alert('Invalid Phone Number', 'Please enter a valid phone number');
//     }
//     try {
//       setLoading(true);
//       const response = await axios.get(
//         `https://casacare.in/login/getappotp?mobilenumber=${phoneNumber}`,
//       );
//       const {otp} = response.data.otp;
//       setOtp(otp);
//       setConfirm(true); // set confirm state to true after OTP is sent
//     } catch (error) {
//       console.log(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleConfirmCode = async () => {
//     if (otp.length !== 6) {
//       Alert.alert(
//         'Invalid Verification Code',
//         'Please enter a valid 6-digit verification code',
//       );
//       return;
//     }
//     if (otp !== code) {
//       Alert.alert(
//         'Invalid Verification Code',
//         'Please enter a valid verification code',
//       );
//       return;
//     }
//     try {
//       setLoading(true);
//       await AsyncStorage.setItem('user', 'true');
//       navigation.reset({
//         index: 0,
//         routes: [{name: 'Home'}],
//       });
//     } catch (error) {
//       console.log(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center',
//       backgroundColor: colorScheme === 'dark' ? '#000' : '#fff',
//     },
//     logo: {
//       marginBottom: 50,
//       height: 100,
//       width: 200,
//       borderRadius: 20,
//       marginTop: 20,
//     },
//     title: {
//       fontSize: 24,
//       fontWeight: 'bold',
//       marginBottom: 25,
//       color: colorScheme === 'dark' ? '#fff' : '#000',
//     },
//     input: {
//       width: '80%',
//       height: 48,
//       borderWidth: 1,
//       borderColor: colorScheme === 'dark' ? '#fff' : '#000',
//       borderRadius: 8,
//       paddingHorizontal: 16,
//       marginBottom: 10,
//       fontSize: 18,
//       color: colorScheme === 'dark' ? '#fff' : '#000',
//     },
//     button: {
//       width: '80%',
//       height: 48,
//       backgroundColor: '#FFCC2A',
//       borderRadius: 8,
//       justifyContent: 'center',
//       alignItems: 'center',
//       marginTop: 10,
//     },
//     buttonText: {
//       fontSize: 18,
//       color: colorScheme === 'dark' ? '#fff' : '#000',
//     },
//   });
//   return (
//     <View style={styles.container}>
//       <Image source={require('../assests/logo.png')} style={styles.logo} />
//       <Text style={styles.title}>Sign In</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Enter Your Mobile Number"
//         value={phoneNumber}
//         onChangeText={setPhoneNumber}
//         keyboardType="phone-pad"
//       />
//       {!confirm ? (
//         <TouchableOpacity
//           style={styles.button}
//           onPress={handleSendCode}
//           disabled={loading}>
//           {loading ? (
//             <Text style={styles.buttonText}>Loading...</Text>
//           ) : (
//             <Text style={styles.buttonText}>Send OTP</Text>
//           )}
//         </TouchableOpacity>
//       ) : (
//         <>
//           <TextInput
//             style={styles.input}
//             placeholder="Enter OTP here"
//             value={code}
//             onChangeText={setCode}
//             keyboardType="numeric"
//           />
//           <TouchableOpacity
//             style={styles.button}
//             onPress={handleConfirmCode}
//             disabled={loading}>
//             {loading ? (
//               <Text style={styles.buttonText}>Loading...</Text>
//             ) : (
//               <Text style={styles.buttonText}>Confirm Code</Text>
//             )}
//           </TouchableOpacity>
//         </>
//       )}
//     </View>
//   );
// };
// export default LoginScreen;
// import React, { useState, useEffect } from 'react';
// import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert, ToastAndroid,colorScheme } from 'react-native';
// import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const LoginScreen = ({ navigation }) => {
//   const colorScheme  =useColorScheme();
//   const [mobileNumber, setMobileNumber] = useState('');
//   const [Confirm, setConfirm] = useState(null);
//   const [code, setcode] = useState('');
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     // Check for persisted session
//     checkSession();
//   }, []);

//   const checkSession = async () => {
//     try {
//       const user = await AsyncStorage.getItem('user');
//       if (user) {
//         navigation.reset({
//           index: 0,
//           routes: [{ name: 'Home' }],
//         });
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleGenerateOtp = async () => {
//     if (!mobileNumber || !/^[0-9]{10}$/.test(mobileNumber)) {
//       ToastAndroid.show('Please enter a valid mobile number', ToastAndroid.SHORT);
//       return;
//     }

//     try {
//       setLoading(true);
//       const response = await axios.get(`https://casacare.in/login/getappotp?mobilenumber=${mobileNumber}`);
//       setConfirm(response.data.otp.toString());
//       ToastAndroid.show('OTP has been sent to your mobile number', ToastAndroid.SHORT);
//     } catch (error) {
//       console.error(error);
//       ToastAndroid.show('Failed to generate OTP', ToastAndroid.SHORT);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleLogin = async () => {
//     if (otp === '') {
//       ToastAndroid.show('Please generate OTP first', ToastAndroid.SHORT);
//       return;
//     }

//     if (otp === enteredOtp) {
//       ToastAndroid.show('Login successful', ToastAndroid.SHORT);
//       try {
//         await AsyncStorage.setItem('user', 'true');
//         navigation.reset({
//           index: 0,
//           routes: [{ name: 'Home' }],
//         });
//       } catch (error) {
//         console.log(error);
//       }
//     } else {
//       ToastAndroid.show('Invalid OTP', ToastAndroid.SHORT);
//     }
//   };
//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center',
//       backgroundColor: colorScheme === 'dark' ? '#000' : '#fff',
//     },
//     logo: {
//           marginBottom: 50,
//           height:100,
//           width:200,

//           borderRadius: 20,
//           marginTop: 20,
//         },
//     title: {
//       fontSize: 24,
//       fontWeight: 'bold',
//       marginBottom: 25,
//       color: colorScheme === 'dark' ? '#fff' : '#000',
//     },
//     input: {
//       width: '80%',
//       height: 48,
//       borderWidth: 1,
//       borderColor: colorScheme === 'dark' ? '#fff' : '#000',
//       borderRadius: 8,
//       paddingHorizontal: 16,
//       marginBottom: 10,
//       fontSize: 18,
//     },
//     button: {
//       width: '80%',
//       height: 48,
//       backgroundColor: '#FFCC2A',
//       borderRadius: 8,
//       justifyContent: 'center',
//       alignItems: 'center',
//       marginTop: 10,
//     },
//     buttonText: {
//       fontSize: 18,
//       color: colorScheme === 'dark' ? '#fff' : '#000',
//       },
//       });

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Login</Text>
//       <TextInput
//         placeholder="Mobile Number"
//         style={styles.input}
//         onChangeText={setMobileNumber}
//         value={mobileNumber}
//         keyboardType="numeric"
//         maxLength={10}
//       />
//       <TouchableOpacity onPress={handleGenerateOtp} style={styles.button}>
//         <Text style={styles.buttonText}>Generate OTP</Text>
//       </TouchableOpacity>
//       {otp !== '' && (
//         <View style={styles.inputContainer}>
//           <TextInput
//             placeholder="OTP"
//             style={styles.input}
//             onChangeText={setEnteredOtp}
//             value={enteredOtp}
//             keyboardType="numeric"
//             maxLength={6}
//           />
//         </View>
//       )}
//       <TouchableOpacity onPress={handleLogin} style={[styles.button, { backgroundColor: 'green', marginTop: 20 }]}>
//         <Text style={styles.buttonText}>Login</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };
// export default LoginScreen;

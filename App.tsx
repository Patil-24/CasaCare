import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import AuthStack from './Navigation/AuthStack';
import AppStack from './Navigation/AppStack';


const Stack = createStackNavigator();
const App = () =>{
  
  return (
  
  <NavigationContainer>
    {/* <AppStack/> */}
    <AuthStack/>
      
    
    </NavigationContainer>
  
  );
}
export default App;
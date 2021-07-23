/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Text,View,Button} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Landing from './Components/Landing';
import Login from './Components/Login';
import Register from './Components/Register';
import Home from './Components/Home';

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();


const App = ({navigation}) => {


  return (

    <NavigationContainer>

      <Stack.Navigator screenOptions={{
      headerShown: false
      }}>

        <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={Home} />

      </Stack.Navigator>

    </NavigationContainer>

  );
  
};


export default App;

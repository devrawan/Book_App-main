import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, Text, View, ScrollView, TextInput, Button, TouchableOpacity, StyleSheet, TouchableOpacityBase } from 'react-native';
const Stackk = createStackNavigator();
import HomeScreen from '../src/Screens/HomeScreen';
import Details from '../src/Screens/Details';
const HomeStack = () => {
  return (
 
 <Stackk.Navigator>
   <Stackk.Screen name='HomeScreen' component={HomeScreen} options={{headerShown:false}}/>
   <Stackk.Screen name='Details' component={Details} 
    options={{ headerShown: false }}
   />
  
 </Stackk.Navigator>

  )}
  export default HomeStack;
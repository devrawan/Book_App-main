import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import HelloScreen from '../src/screens/HelloScreen';
import HomeStack from './HomeStack';
import AboutUsScreen from '../src/Screens/AboutUsScreen';
import ContactScreen from '../src/Screens/ContactScreen';
import Tabbs from './Tabbs';

const Stacke = createStackNavigator();

const MainStack = () => {
  return (
    <NavigationContainer>
    <Stacke.Navigator>
      <Stacke.Screen
        name="HelloScreen"
        component={HelloScreen}
        options={{headerShown: false}}
      />
    
      <Stacke.Screen
        name="Tabbs"
        component={Tabbs}
        options={{headerShown: false}}
      />
    </Stacke.Navigator>
  </NavigationContainer>
  );
};
export default MainStack;

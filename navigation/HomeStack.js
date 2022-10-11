import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
const Stackk = createStackNavigator();
import HomeScreen from '../src/Screens/HomeScreen';
import Details from '../src/Screens/Details';
const HomeStack = () => {
  return (
    <Stackk.Navigator>
      <Stackk.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stackk.Screen
        name="Details"
        component={Details}
        options={{headerShown: false}}
      />
    </Stackk.Navigator>
  );
};
export default HomeStack;

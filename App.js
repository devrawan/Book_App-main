import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HelloScreen from './src/Screens/HelloScreen';
import AboutUsScreen from './src/Screens/AboutUsScreen';
import ContactScreen from './src/Screens/ContactScreen';
import Tabbs from './navigation/Tabbs';
import HomeStack from './navigation/HomeStack';

const Stack = createStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HelloScreen"
          component={HelloScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeStack}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AboutUsScreen"
          component={AboutUsScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen 
        name="ContactScreen" 
        component={ContactScreen}
        options={{headerShown: false}}
        />
        <Stack.Screen
          name="Tabbs"
          component={Tabbs}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

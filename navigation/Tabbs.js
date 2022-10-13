import React from 'react';
import {
  View,
  Text,
  useWindowDimensions,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import AboutUsScreen from '../src/Screens/AboutUsScreen';
import ContactScreen from '../src/Screens/ContactScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeStack from './HomeStack';
const Stackk = createStackNavigator();

const Tab = createBottomTabNavigator();

const Tabbs = ({navigation}, props) => {
  const {height, width} = useWindowDimensions();

  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color}) => {
          let iconName;
          let txt;

          if (route.name === 'Call') {
            iconName = focused ? 'call-sharp' : 'call-outline';
            txt = 'اتصل بنا ';
          } else if (route.name === 'AboutUs') {
            iconName = focused ? 'document-text' : 'document-text-outline';
            txt = ' من نحن';
          } else if (route.name === 'HomeScreen') {
            iconName = focused ? 'home' : 'home-outline';
            txt = 'الرئيسية';
          }

          return (
            <View
              style={{
                width: 80,
                justifyContent: 'center',
                alignItems: 'center',
                paddingVertical: 5,
                marginTop: 10,
              }}>
              <Ionicons name={iconName} size={30} color={color} />
              <Text style={{color: 'black'}}>{txt}</Text>
            </View>
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: 'black',
        inactiveTintColor: 'gray',
        showLabel: false,
        style: {
          height: height * 0.09,
          paddingHorizontal: 10,
        },
      }}>
      <Tab.Screen name="Call" component={ContactScreen} />

      <Tab.Screen name="AboutUs" component={AboutUsScreen} />

      <Tab.Screen name="HomeScreen" component={HomeStack} />
    </Tab.Navigator>
  );
};
export default Tabbs;

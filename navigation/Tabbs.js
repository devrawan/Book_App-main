import React from 'react';
import {View, Text, Image, TouchableOpacity,useWindowDimensions} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../src/Screens/HomeScreen';
import Icon from 'react-native-vector-icons/AntDesign';
import { createStackNavigator } from '@react-navigation/stack';
import AboutUsScreen from '../src/Screens/AboutUsScreen';
import ContactScreen from '../src/Screens/ContactScreen';
import Iconn from 'react-native-vector-icons/Feather';
import AboutIcon from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';

//Feather
//phone-call
//FontAwesome
//gitlab
//text-document
//Entypo

const Stackk = createStackNavigator();

const  HomeStackScreen = ()=> {
  return (
    <Stackk.Navigator>
      <Stackk.Screen
       name='HomeScreenn'
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </Stackk.Navigator>
  );
}

const Tab = createBottomTabNavigator();
const Tabbs = ({navigation}, props ) => {

  const {height, width} = useWindowDimensions();

  return (
 
    <Tab.Navigator
    initialRouteName='HomeScreen'
    screenOptions={({ route }) => ({
      
      tabBarIcon: ({ focused, color}) => {
        let iconName;
        let txt ;
        
        if (route.name === 'Call') {
          iconName = focused  ? 'call-sharp'  : 'call-outline';
          txt ="اتصل بنا "
        } else if (route.name === 'AboutUs') {
          iconName = focused ? 'document-text' : 'document-text-outline';
          txt =" من نحن"
        }else if (route.name === 'HomeScreen') {
          iconName = focused  ? 'home'  : 'home-outline';
          txt ="الريسية "
        }
    
    return (
        <View style={{width:80,justifyContent:'center',alignItems:'center',paddingVertical:5,marginTop:10}}>
        <Ionicons name={iconName} size={30} color={color}  />
        <Text style={{color:'black'}}>{txt}</Text>
          </View>
      )
   },
 })}
 tabBarOptions={{
   activeTintColor: 'black',
   inactiveTintColor: 'gray',
   showLabel:false,
   style:{
    // backgroundColor:'pink',
    height:height*0.09,
    paddingHorizontal:10
   }

 }}>
      <Tab.Screen
      
          name="Call"
          component={ContactScreen}
   
        />

       <Tab.Screen
          name="AboutUs"
          component={AboutUsScreen}
        />


       
           <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
        />
          
      </Tab.Navigator>
  
  );
};
export default Tabbs;

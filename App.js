
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, Text, View, ScrollView, TextInput, Button, TouchableOpacity, StyleSheet, TouchableOpacityBase } from 'react-native';
const Stack = createStackNavigator();
import HelloScreen from './src/Screens/HelloScreen';
import HomeScreen from './src/Screens/HomeScreen';
import AboutUsScreen from './src/Screens/AboutUsScreen';
import ContactScreen from './src/Screens/ContactScreen';
import Tabbs from './navigation/Tabbs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Details from './src/Screens/Details';
import HomeStack from './navigation/HomeStack';
const App = () => {

  return (
  
     <NavigationContainer>
       <Stack.Navigator>
         <Stack.Screen name='HelloScreen' component={HelloScreen} options={{headerShown:false}}/>
         <Stack.Screen name='HomeScreen' component={HomeStack} 
          options={{ headerShown: false }}
         />
         <Stack.Screen name='AboutUsScreen' component={AboutUsScreen}
         options={{headerShown:false}}
         />
         <Stack.Screen  name ='ContactScreen' component={ContactScreen} />
         <Stack.Screen  name ='Tabbs' component={Tabbs}     options={{headerShown: false}}/>
       </Stack.Navigator>
     </NavigationContainer>


  




  );
}

export default App;



// import 'react-native-gesture-handler';
// import React, { useState, useEffect } from 'react';

// import { createStackNavigator } from '@react-navigation/stack';
// import {  ScrollView, SafeAreaView, Image, StyleSheet, Button, Text, FlatList, View, TouchableOpacity, TouchableOpacityBase, TextInput } from 'react-native';
// import NewHome from './src/Screens/NewHome';


// const Stack = createStackNavigator();
// const St = createStackNavigator();

// const Stc = createStackNavigator();
// const App = () => {
// return(
//     <SafeAreaView style={{ backgroundColor:'white',flex:1,justifyContent:'center',height:'100%',width:'100%'}}>
// <View style={{ height:50, marginLeft:20,marginRight:20,backgroundColor:'pink',borderRadius:15,marginVertical:5}}>

//   <Text style={{fontSize:22}}>
//     fff
//   </Text>
// </View>
//   </SafeAreaView>

//   );
// }

// export default App;

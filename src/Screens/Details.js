import React from 'react';
import {
  ImageBackground,
    Text,
    Pressable,
    View,
    FlatList,
    Keyboard,
    SafeAreaView,
    TouchableWithoutFeedback,
    KeyboardAvoidingView,
    useWindowDimensions,
    TouchableOpacity,
    StyleSheet,
    StatusBar,
    ScrollView,
    Image
    
  } from 'react-native';
  import {images} from './../../constants/index'

const Details =({navigation , route} )=>{
    const Card = route.params.item;
  
        return(
          <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <View 
          key={Card.key} 
          style={{
              marginHorizontal:8,
              marginVertical:5,
              backgroundColor:"white",
              height:160,
              width:'45%',justifyContent:'center',alignItems:'center',paddingHorizontal:5,paddingVertical:10,borderRadius:12,shadowColor: "#000",
              shadowOffset: {
                  width: 0,
                  height: 4,
              },
              shadowOpacity: 0.32,
              shadowRadius: 5.46,
              elevation: 7}}>
              <View style={{
                // backgroundColor:'gray',
              height:"50%",width:"100%",justifyContent:'center',justifyContent:'center',alignItems:'center'}}>

                <View style={{marginBottom:7,borderWidth:1,borderColor:'#CED4E3',width:70,height:70,justifyContent:'center',alignItems:'center',borderRadius:50}}> 
                    <Image source={Card.uri} style={{backgroundColor:'white',width:40,height:40,resizeMode:'contain'}}/>
              </View>
              </View>
              <Text style={{textAlign:'center',fontSize:16,fontFamily:"Cairo-SemiBold"}}>{Card.title}</Text>
            
          
              </View>
              </View>
            )
        }

export default Details;
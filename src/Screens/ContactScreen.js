import React, {useState, useEffect} from 'react';
import {
  ImageBackground,
    Image,
  Text,
  Pressable,
  View,
  Keyboard,
  SafeAreaView,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  useWindowDimensions,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  ScrollView,
} from 'react-native';
import {images} from './../../constants/index';

const ContactScreen  = () => {
    const {height, width} = useWindowDimensions();
  return(

  <View style={[styles.container,{  width:width,height:height}]}>

          {/* <View style={{
          height : 170,
              width : "100%",
              transform : [ { scaleX : 2} ],
              borderBottomStartRadius : 300,
              borderBottomEndRadius : 300,
              overflow : 'hidden',
            
              }}>
            <View style={{ 
              flex : 1,
              transform : [ { scaleX : 0.7 } ],
              backgroundColor : '#7380a1',
              alignItems : 'center',
              justifyContent : 'center'}}>
                <Text style={{fontSize:25 ,color:'white',alignSelf:'center',fontFamily:'Cairo-Bold'}}> تواصل معنا </Text>
            </View>
        </View> */}
  <ImageBackground source={images.image} style={{width:width,height:140,justifyContent:"flex-end",alignItems:'center',paddingBottom:30}}>
        <Text style={{fontSize:25 ,color:'white',alignSelf:'center',fontFamily:'Cairo-Bold'}}>تواصل معنا   </Text>
        </ImageBackground>


          <View style={{paddingVertical:10,marginTop:20,width:"100%",lexDirection:'row',justifyContent:'center',alignItems:'center'}}>
            <Image source={images.ren} style={{width:220,height:220}}/>
          </View>
          <View style={{paddingVertical:15,marginTop:35,paddingHorizontal:20,width:'100%',flexDirection:'row',justifyContent:'flex-end'}}>
            <Text style={{fontSize:25,fontWeight:'500'}}> تواصل معنا علي : </Text>
          </View> 
          <View style={{paddingVertical:5,marginTop:5,paddingHorizontal:20,width:'100%',flexDirection:'row',justifyContent:'flex-end'}}>
          <Text style={{fontSize:18,textDecorationLine:'underline'}}>infa@afaa8.com</Text>
          </View>
          <View style={{paddingVertical:5,marginTop:5,paddingHorizontal:20,width:'100%',flexDirection:'row',justifyContent:'flex-end'}}>
          <Text style={{fontSize:18,textDecorationLine:'underline'}}>0096652709005</Text>
          </View>
          <View style={{paddingVertical:5,marginTop:5,paddingHorizontal:20,width:'100%',flexDirection:'row',justifyContent:'flex-end'}}>

          <Text style={{fontSize:18,textDecorationLine:'underline'}}>العنوان : المملكة العربية السعودية </Text>
          </View>
           </View>
        
        
)}

export default ContactScreen;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:"#E8E8E8",
      marginTop: 0,
    //   justifyContent:'center',
      alignItems:'center',
      paddingHorizontal:20,
      // paddingBottom:30
    
    },
    parent : {
      height : '80%',
      width : '100%',
      transform : [ { scaleX : 2 } ],
      borderBottomStartRadius : 200,
      borderBottomEndRadius : 200,
      overflow : 'hidden',
  },
  child : {
      flex : 1,
      transform : [ { scaleX : 0.5 } ],

      backgroundColor : 'yellow',
      alignItems : 'center',
      justifyContent : 'center'
  }
  
  
  
  
  })
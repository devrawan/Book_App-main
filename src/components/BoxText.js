
import React from 'react';
import {Text, View, StyleSheet,Image} from 'react-native';

const BoxText = (props) => {
  return (
    <View style={styles.viewStyle}>
    <Text style={[styles.txtStyle,{textDecorationLine : `${props.underlin ? 'underline': "none"}` }]}>{props.text}</Text>
    </View>
  );
};
export default BoxText;

const styles = StyleSheet.create({
viewStyle:{
  paddingVertical:5,marginTop:5,paddingHorizontal:20,width:'100%',flexDirection:'row',justifyContent:'flex-end'
},
txtStyle:{
  fontSize:18}
})
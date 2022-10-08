import React, {useState, useEffect} from 'react';
import {
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
  Image,
} from 'react-native';

const ContText =(props)=>{
    return(
        <View
        style={{
            
          marginVertical: 5,
          paddingVertical:10,
          paddingHorizontal: 15,
        //   backgroundColor: 'black',
          width: '100%',
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
        }}>
        <Text
          style={{
            color: '#676767',
            fontSize: 18,
            textAlign: 'right',
            lineHeight: 30,
          }}>
            {props.title}
          {/* نقوم بتنفيذ جميع مقاولات واعمال البناء بجميع المراحل بداية من اعمال
          الحفر للأساسات مرورا بجميع المراحل وحتى اعمال تركيب الكهرباء والسباكة
          والنجارة واعمال السيراميك والرخام والواجهات والدهانات. */}
        </Text>
      </View>
    )
}
export default ContText;
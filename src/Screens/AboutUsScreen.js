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
import {images} from './../../constants/index';
import ContText from '../components/ContText';
const AboutUsScreen = () => {
  const {height, width} = useWindowDimensions();
  return (
    <SafeAreaView
      style={[
        styles.container,
        {width: width, height: height, paddingHorizontal: 20},
      ]}>
        <ScrollView style={{paddingBottom:40}}>
      <View
        style={{
            paddingVertical:20,
          width: '100%',
        //   height: '30%',
        //   backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image source={images.group} style={{width:170,height:180,resizeMode:'contain'}}/>
      </View>
      <View
        style={{
        //   paddingVertical: 10,
          width: '100%',
        //   backgroundColor: 'red',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'flex-end',
          marginBottom:15,
          marginTop:20
        }}>
        <Text style={{color: '#848698', fontSize: 25, fontWeight: '600'}}>
          {' '}
          من نحن{' '}
        </Text>
      </View>

      <ContText  title ={" نقوم بتنفيذ جميع مقاولات واعمال البناء بجميع المراحل بداية من اعمال لحفر للأساسات مرورا بجميع المراحل وحتى اعمال تركيب الكهرباء والسباكة   والنجارة واعمال السيراميك والرخام والواجهات والدهانات."}/>
      <ContText  title={"نقدم مجموعة كبيرة ومتميزة من الافكار والتصميمات لتشطيب العقارات والوحدات السكنية والشركات والهيئات والمؤسسات الحكومية وغيرها من لوحدات وتركيب كافة الخدمات واعمال التشطيبات الكاملة."}/>
      <ContText  title={" نقدم كافة الخدمات الخاصة بتصميم الديكورات وفق احدث الاساليب المتطورة  والاشكال العصرية"  } />
      </ScrollView>
    </SafeAreaView>
  );
};

export default AboutUsScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'pink',
    marginTop: StatusBar.currentHeight,
    alignItems: 'center',
  },
});

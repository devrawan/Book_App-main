import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  useWindowDimensions,
  StyleSheet,
  StatusBar,
  ScrollView,
  Image,
} from 'react-native';
import {images} from './../../constants/index';
//import ContText from '../components/ContText'; 
import {ContText} from '../components/index'; 
const AboutUsScreen = () => {
  const {height, width} = useWindowDimensions();

  return (
    <SafeAreaView
      style={[
        styles.container,
        {width: width, height: height, paddingHorizontal: 20},
      ]}>
      <ScrollView style={styles.scrollStyle}>

        <View style={styles.imageView}>
          <Image source={images.group} style={styles.imageStyle} />
        </View>

        <View style={styles.textView}>
          <Text style={styles.txtStyle}> من نحن </Text>
        </View>

        <ContText
          title={
            ' نقوم بتنفيذ جميع مقاولات واعمال البناء بجميع المراحل بداية من اعمال لحفر للأساسات مرورا بجميع المراحل وحتى اعمال تركيب الكهرباء والسباكة   والنجارة واعمال السيراميك والرخام والواجهات والدهانات.'
          }
        />
        <ContText
          title={
            'نقدم مجموعة كبيرة ومتميزة من الافكار والتصميمات لتشطيب العقارات والوحدات السكنية والشركات والهيئات والمؤسسات الحكومية وغيرها من لوحدات وتركيب كافة الخدمات واعمال التشطيبات الكاملة.'
          }
        />
        <ContText
          title={
            ' نقدم كافة الخدمات الخاصة بتصميم الديكورات وفق احدث الاساليب المتطورة  والاشكال العصرية'
          }
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default AboutUsScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    alignItems: 'center',
  },
  scrollStyle: {
    paddingBottom: 40,
  },
  imageView: {
    paddingVertical: 20,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    width: 170,
    height: 180,
    resizeMode: 'contain',
  },
  textView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginBottom: 15,
    marginTop: 20,
  },
  txtStyle: {
    color: '#848698',
    fontSize: 25,
    fontWeight: '600',
  },
});

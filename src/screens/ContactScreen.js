import React from 'react';
import {
  Image,
  Text,
  View,
  useWindowDimensions,
  StyleSheet,
  ScrollView,
} from 'react-native';
import BoxText from '../components/BoxText';
import {images} from './../../constants/index';

const ContactScreen = () => {
  const {height, width} = useWindowDimensions();

  return (
    <View style={[styles.container, {width: width, height: height}]}>
      <View style={styles.parent}>
        <View style={styles.child}>
          <Text style={styles.titleStyle}>تواصل معنا </Text>
        </View>
      </View>

      <ScrollView style={styles.scrollStyle}>
        <View style={styles.imagView}>
          <Image source={images.ren} style={styles.imSty} />
        </View>
        <BoxText text="تواصل معنا علي :" underlin={false} />
        <BoxText text=" infa@afaa8.com " underlin={true} />
        <BoxText text=" 0096652709005 " underlin={true} />
        <BoxText text=" العنوان : المملكة العربية السعودية  " underlin={true} />
      </ScrollView>
    </View>
  );
};

export default ContactScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8E8E8',
    marginTop: 0,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  parent: {
    height: 180,
    width: '100%',
    transform: [{scaleX: 2}],
    borderBottomStartRadius: 300,
    borderBottomEndRadius: 300,
    overflow: 'hidden',
    zIndex: 1,
    position: 'absolute',
    top: -20,
    marginBottom: 10,
  },
  child: {
    flex: 1,
    transform: [{scaleX: 0.7}],
    backgroundColor: '#7380a1',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  scrollStyle: {
    paddingBottom: 40,
  },
  titleStyle: {
    fontSize: 25,
    color: 'white',
    alignSelf: 'center',
    // fontFamily: 'Cairo-Bold',
    marginBottom: 40,
  },
  imagView: {
    paddingVertical: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 180,
    marginBottom:30

  },
  imSty: {
    width: 220,
    height: 220,
  },
});

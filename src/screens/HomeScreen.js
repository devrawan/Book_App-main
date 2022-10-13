import React from 'react';
import {
  Text,
  Pressable,
  View,
  FlatList,
  useWindowDimensions,
  StyleSheet,
  Image,
} from 'react-native';
import {images} from './../../constants/index';
import {useNavigation} from '@react-navigation/native';

const Data = [
  {key: 0, title: 'متطلبات تأسيس منشاة مقاولات', uri: images.group3},
  {key: 1, title: 'التعريف بقطاع المقاولات', uri: images.not},
  {key: 2, title: 'قواعد وإجراءات أساسية بشأن التعاقد', uri: images.business},
  {key: 3, title: 'تراخيص مزاولة نشاط المقاولات', uri: images.filee},
  {key: 4, title: 'منصات الكترونية في خدمة المقاول', uri: images.contract},
  {key: 5, title: 'الجهات المختصة ذات العلاقات  ', uri: images.filee},
  {key: 6, title: 'آليات تسليم مشاريع المقاولات', uri: images.business},
  {key: 7, title: 'أنظمة عقود المقاولات', uri: images.bank},
  {key: 8, title: 'انظمة عقود المقاولات  ', uri: images.group3},

  {key: 9, title: 'الجانب الاجتماعي والوطني', uri: images.not},
  {key: 10, title: 'لجنة المقاولات رسالتها – إنجازاتها ', uri: images.social},
  {key: 11, title: 'آليات تسليم مشاريع المقاولات', uri: images.contract},
];

const Hed = () => {
  return (
    <View style={styles.hedBoxStyle}>
      <Text style={styles.hedTextStyle}> الفهرس </Text>
    </View>
  );
};

const HomeScreen = () => {
  const {height, width} = useWindowDimensions();
  const {navigate} = useNavigation();

  const renderItem = ({item}) => (
    <Pressable
      onPress={() => {
        navigate('Details', {item});
      }}
      key={item.key}
      style={styles.itemBoxStyle}>
      <View style={styles.itemViewStyle}>
        <View style={styles.itemViewImage}>
          <Image source={item.uri} style={styles.itemImage} />
        </View>
      </View>

      <Text style={styles.itemtitle}>{item.title}</Text>
    </Pressable>

    
  );

  return (
    <View style={[styles.container, {width: width, height: height}]}>
      <View style={styles.hedShapeStyle}>
        <View style={styles.hedView}>
          <Text style={styles.hedTit}>المقاولات </Text>
        </View>
      </View>
      <FlatList
        centerContent={true}
        style={[styles.flatStyle,{width: width}]}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        data={Data}
        renderItem={renderItem}
        keyExtractor={item => item.key}
        ListHeaderComponent={<Hed />}
      />
    </View>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8E8E8',
    marginTop: 0,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  hedBoxStyle: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 5,
  },

  hedTextStyle: {
    fontSize: 20,
    color: 'black',
    fontFamily: 'Cairo-Bold',
  },
  itemBoxStyle: {
    marginHorizontal: 5,
    alignSelf: 'flex-end',
    marginBottom: 15,
    backgroundColor: 'white',
    height: 160,
    width: '45%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 10,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 7,
  },
  itemViewStyle: {
    height: '50%',
    width: '100%',
    justifyContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemViewImage: {
    marginBottom: 7,
    borderWidth: 1,
    borderColor: '#CED4E3',
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  itemImage: {
    backgroundColor: 'white',
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  itemtitle: {
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'Cairo-SemiBold',
  },
  hedShapeStyle: {
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
  hedView: {
    flex: 1,
    transform: [{scaleX: 0.7}],
    backgroundColor: '#7380a1',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  hedTit: {
    fontSize: 25,
    color: 'white',
    alignSelf: 'center',
    // fontFamily: 'Cairo-Bold',
    marginBottom: 40,
  },
  flatStyle: {
    paddingBottom: 10,
    paddingTop: 160,
    paddingHorizontal: 10,
  },
});

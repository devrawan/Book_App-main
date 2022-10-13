import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

const Details = ({route}) => {
  const itemData = route.params.item;
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View key={itemData.key} style={styles.itemBoxStyle}>
        <View style={styles.itemViewStyle}>
          <View style={styles.itemViewImage}>
            <Image source={itemData.uri} style={styles.itemImage} />
          </View>
        </View>

        <Text style={styles.itemtitle}>{itemData.title}</Text>
      </View>
    </View>
  );
};
//details Screen ..

export default Details;

const styles = StyleSheet.create({
  itemBoxStyle: {
    marginHorizontal: 5,
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
});

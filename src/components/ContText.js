import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const ContText = props => {
  return (
    <View style={styles.boxStyle}>
      <Text style={styles.textStyle}>{props.title}</Text>
    </View>
  );
};
export default ContText;

const styles = StyleSheet.create({
  boxStyle: {
    marginVertical: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  textStyle: {
    color: '#676767',
    fontSize: 18,
    textAlign: 'right',
    lineHeight: 30,
  },
});

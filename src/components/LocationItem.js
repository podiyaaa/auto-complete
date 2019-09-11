import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { width } from '../utils';

export default LocationItem = ({ title }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    width: width - 20,
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
  }
})
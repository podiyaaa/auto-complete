import React from 'react'
import { View, TextInput, StyleSheet, Text } from 'react-native'
import { width, height } from '../utils';
import Icon from 'react-native-vector-icons/FontAwesome'

export default SearchTextInput = ({ value, onChange }) => {
  return (
    <View style={styles.textViewContainer}>
      <View style={styles.textViewSubContainer} >
        {/* <Icon name="search" size={20} color="gray" /> */}
      </View>
      {/* <TextInput
        style={styles.searchTextInput}
        onChangeText={text => onChange(text)}
        value={value}
      /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  textViewContainer: {
    flexDirection: 'row',
    height: 2 / 15 * height,
    width: width,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 20
  },
  textViewSubContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'lightgray',
  },
  searchImage: {
    flex: 1,
    padding: 5
  },
  searchTextInput: {
    flex: 8,
    backgroundColor: 'lightgray',
    paddingHorizontal: 20,
    borderRadius: 10
  }
})

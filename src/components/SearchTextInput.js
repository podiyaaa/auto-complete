import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { width } from '../utils';
import Icon from 'react-native-vector-icons/FontAwesome'

export default SearchTextInput = ({ value, onChange }) => {
  return (
    <View style={styles.textViewContainer}>
      <View style={styles.textViewSubContainer} >
        <View style={styles.searchImage}>
          <Icon name='search' size={20} color='gray' />
        </View>
        <TextInput
          placeholder={'Search place'}
          style={styles.searchTextInput}
          onChangeText={text => onChange(text)}
          value={value}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  textViewContainer: {
    flexDirection: 'row',
    flex: 3,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  textViewSubContainer: {
    height: 50,
    flexDirection: 'row',
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderRadius: 14,
    width: '90%'
  },
  searchImage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchTextInput: {
    height: 40,
    flex: 8,
  }
})

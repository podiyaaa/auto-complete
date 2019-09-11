import React from 'react'
import { FlatList, StyleSheet } from 'react-native'
import LocationItem from '../components/LocationItem';

export default SearchList = ({ locations }) => {
  return (
    <FlatList
      contentContainerStyle={styles.tableViewContainer}
      data={locations}
      renderItem={({ item }) => <LocationItem title={item.description} />}
      keyExtractor={item => item.id}
    />
  )
}

const styles = StyleSheet.create({
  tableViewContainer: {
    backgroundColor: 'red',
  }
})

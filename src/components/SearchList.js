import React from 'react'
import { FlatList, StyleSheet, View, Text } from 'react-native'
import LocationItem from '../components/LocationItem';
import Icon from 'react-native-vector-icons/FontAwesome'

export default SearchList = ({ locations }) => {

  noPlacesFound = () => {
    return (
      <View style={styles.center}>
        <Icon name='globe' size={100} color='gainsboro' />
        <Text style={styles.text}>No places found</Text>
      </View>
    )
  }

  placesTable = () => {
    return (
      <View>
        <FlatList
          data={locations}
          renderItem={({ item }) => <LocationItem title={item.description} />}
          keyExtractor={item => item.id}
        />
      </View>
    )
  }

  return (
    <View style={[styles.tableViewContainer, styles.center]}>
      {locations.length == 0 ? this.noPlacesFound() : this.placesTable()}
    </View>
  )
}

const styles = StyleSheet.create({
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'gainsboro'
  },
  tableViewContainer: {
    flex: 27,
    backgroundColor: 'white',
  }
})

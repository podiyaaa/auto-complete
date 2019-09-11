import React from 'react'
import { FlatList, StyleSheet, View, Text } from 'react-native'
import LocationItem from '../components/LocationItem';
import Icon from 'react-native-vector-icons/FontAwesome'

export default SearchList = ({ locations }) => {

  noPlacesFound = () => {
    return (
      <View style={styles.noPlaceFound}>
        <Icon name='globe' size={100} color='gainsboro' />
        <Text style={styles.text}>No places found</Text>
      </View>
    )
  }

  placesTable = () => {
    return (
      <View style={styles.tableView}>
        <FlatList
          data={locations}
          renderItem={({ item }) => <LocationItem title={item.description} />}
          keyExtractor={item => item.id}
        />
      </View>
    )
  }

  return (
    <View style={styles.tableViewContainer}>
      {locations.length == 0 ? this.noPlacesFound() : this.placesTable()}
    </View>
  )
}

const styles = StyleSheet.create({
  noPlaceFound: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  },
  text: {
    color: 'gainsboro'
  },
  tableViewContainer: {
    flex: 27,
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
  },
  tableView: {
    width: '100%',
  }
})

import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

interface RestaurantItemProps {
  id: string
  name: string
  address: string
}

class RestaurantItem extends React.Component<RestaurantItemProps, {}> {
  state = {
    isFavourite: false
  }

  setFavourite = () => {
    this.setState({
      isFavourite: !this.state.isFavourite
    })
  }

  render() {
    const { name, address } = this.props

    return (
      <TouchableOpacity onPress={this.setFavourite}>
        <View style={styles.restaurantItem}>
          <Text
            style={{
              ...styles.name,
              color: this.state.isFavourite ? '#ef2917' : undefined
            }}
          >
            {name}
          </Text>
          <Text style={styles.address}>{address}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  restaurantItem: {
    padding: 16
  },
  name: {
    fontSize: 18
  },
  address: {
    fontSize: 12
  }
})

export default RestaurantItem

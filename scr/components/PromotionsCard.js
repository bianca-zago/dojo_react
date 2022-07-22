
import React, { useState } from 'react'

import { SafeAreaView, Text, StyleSheet, View, FlatList, TouchableOpacity } from 'react-native'
import promotions from '../api/promotions'
import { Card, Button, Icon } from 'react-native-elements';


export default () => {

  const [expandir, setExpandir] = useState(true)

  const promotionsRender = ({ item }) => (
    <View  >

      <Card containerStyle={{ backgroundColor: item.background_color, width: 170, height: 200, borderRadius: 10 }}>
        <View style={{ flexDirection: 'column', justifyContent: 'space-between', }} >


          <Text style={{ marginBottom: 10, color: item.font_color }}>{item.text}</Text>

          <View style={{ flexDirection: 'row' }} >
            <Text style={{ marginBottom: 10, color: "gray" }}>Guia Bolso + </Text>
            <Text style={{ marginBottom: 10, color: item.font_color }}>PicPay</Text>
          </View>
          <Icon name={item.icon} />
          <Text style={{ color: item.font_color, paddingTop: 20 }}>{item.type}</Text>
        </View>

      </Card>

    </View>

  )
  return (
    <View>
      <Text style={{ padding: (10, 0, 0, 10), color: "gray" }}>Para Você</Text>
      <View style={styles.container}>
        <FlatList horizontal={true} data={promotions} renderItem={promotionsRender} />
      </View>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'

  }
})


import React, { useState } from 'react'

import { SafeAreaView, Text, StyleSheet, View, FlatList, TouchableOpacity } from 'react-native'
import promotions from '../api/promotions'
import { Card, Button, Icon } from 'react-native-elements';


export default () => {

  const [expandir, setExpandir] = useState(true)

  const promotionsRender = ({ item }) => (
    <View  >
      <Card containerStyle={{ height: 160, borderRadius: 10 }}>

        <View style={{ flexDirection: 'column' }} >
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 10 }} >

            <Text  style={{ color: "grey", fontSize: 16, fontWeight: "bold" }}>Planejamento do mês:</Text>
            <Icon name="more-vert"></Icon>
          </View>

          <Text style={{ color: "grey" }}>Renda </Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 5 }} >

            <Text style={{ color: "grey", fontSize: 16, fontWeight: "bold" }}>R$ 100,00</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 0 }} >

              <Text style={{ fontSize: 11, color: "grey" }}>Planejados: </Text>
              <Text style={{ color: "grey", fontSize: 12, fontWeight: "bold" }}>R$ 500,00 </Text>

            </View>

          </View>
          <View style={{ height: 15, width: 150, shadowOpacity: 1, shadowColor: '#000', shadowOffset: { width: 10, height: 10 }, shadowRadius: 5, elevation: 5, borderWidth: 0.5, borderColor: "white", backgroundColor: "rgba(255, 255, 255, 1)", padding: (5, 10, 5, 10) }} >
          </View>
          <View style={{ flexDirection: 'row' }} >

            <Text style={{ color: "grey", fontSize: 12, fontWeight: "bold" }}>R$ 400,00 </Text>
            <Text style={{ fontSize: 11, color: "grey" }}>para alcaçar o planejado </Text>

          </View>
        </View>

      </Card>
      <Card containerStyle={{ height: 160, borderRadius: 10 }}>

        <View style={{ flexDirection: 'column' }} >
          <Text style={{ paddingBottom: 5 }}>Descubra o valor do emprétimo que você pode levar agora mesmo:</Text>
          <View style={{ height: 15, width: 150, shadowOpacity: 1, shadowColor: '#000', shadowOffset: { width: 10, height: 10 }, shadowRadius: 5, elevation: 5, borderWidth: 0.5, borderColor: "white", backgroundColor: "rgba(255, 255, 255, 1)", padding: (15, 5, 5, 10) }} >
          </View>
          <Text style={{ color: "pink" }}>Descubra o valor </Text>
        </View>

      </Card>

    </View>

  )
  return (<View style={styles.container}>

    <FlatList data={promotions} renderItem={promotionsRender} />

  
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center'

  }

})

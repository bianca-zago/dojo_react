
import React, { useState } from 'react'

import { SafeAreaView, Text, StyleSheet, View, FlatList, TouchableOpacity } from 'react-native'
import accountCards from '../api/accountCards'
import { Button, Icon } from 'react-native-elements';


export default () => {

  const [expandir, setExpandir] = useState(true)

  function caculaTotal(accountCards){
    var total = 0
    accountCards.forEach(element => {
      total = total + element.amount
    });
    return total;
}

  const itemsRender = ({ item }) => {
    return (
    <View  >
      <View style={styles.item}>
        <Text style={styles.text}>{item.name}</Text>
        <Text style={styles.text}>{item.amount}</Text>
      </View>

    </View>

  )

}
  return (<View style={styles.container}>

    <TouchableOpacity onPress={() => { setExpandir(!expandir) }}>
      <Text style={styles.text_mes}>Junho</Text>
    </TouchableOpacity>

    <View style={styles.container, { display: expandir ? 'flex' : 'none', padding: (0, 0, 0, 5) }}>
      <View style={styles.item}>
        <Text style={styles.title}>Contas e Cartão</Text>
        <Icon name="visibility-off"></Icon>
      </View>
      
      <FlatList data={accountCards} renderItem={itemsRender} />

      <View style={styles.item}>
        <Text style={styles.text}>Total</Text>
        <Text style={styles.text}>R${caculaTotal(accountCards)}</Text>
      </View>
      <View style={styles.item}>
        <Text style={{ padding: (0, 0, 0, 3), color: 'pink', fontSize: 12 }}>Ir para contas e cartão</Text>
      </View>
    </View>

  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    padding: 5,
    backgroundColor: 'purple',

  },
  text: {
    color: 'white',
    fontSize: 12,
  },
  title: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text_mes: {
    color: 'pink',
    fontSize: 16,
  }

})

import React from 'react'

import { SafeAreaView, Text, StyleSheet, View, ScrollView } from 'react-native'
import AccountCards from './scr/components/AccountCards'
import Bottom from './scr/components/Bottom'
import Cards from './scr/components/Cards'
import PromotionsCard from './scr/components/PromotionsCard'


export default () => (
  <SafeAreaView>
    <View>
      <AccountCards />
    </View>
    <View >

      <ScrollView>
        <View >
          <PromotionsCard />
        </View>
        <View>
          <Cards />
        </View>
      </ScrollView>
      <View style={{ paddingBottom: 100 }}>
        <Bottom />
      </View>
    </View>

  </SafeAreaView>
)


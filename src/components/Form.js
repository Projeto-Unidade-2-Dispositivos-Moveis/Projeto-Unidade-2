import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { theme } from '../theme/theme';

export function Form() {
  return (
    <View style={styles.container}>
      <Text>Form</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.fundo_principal
  }
})
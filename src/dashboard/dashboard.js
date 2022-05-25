import React, {Component} from 'react'
import {
  StyleSheet,
  View,
  Text,
  Button,
} from 'react-native'

export default function Dashboard() {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Hello</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 35,
    backgroundColor: '#3fb24e',
  },
  textStyle: {
    fontSize: 15,
    marginBottom: 20,
  },
})

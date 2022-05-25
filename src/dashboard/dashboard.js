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
      <View style={styles.gasContainer}>
        <View style={styles.gasContainerRow}>
          <Text>Gas1</Text>
        </View>
        <View style={styles.gasContainerRow}>
          <Text>Gas2</Text>
        </View>
        <View style={styles.gasContainerRow}>
          <Text>Gas2</Text>
        </View>
      </View>
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
  gasContainer: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    marginTop: '20px',
    padding: '10px',
    justifyContent: 'center',
  },
  gasContainerRow: {
    padding: '5px',
    display: 'flex',
    backgroundColor: 'red',
    color: '#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

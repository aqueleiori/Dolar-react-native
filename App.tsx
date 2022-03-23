import React, { useState, useEffect } from "react"
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [name, setName] = useState("")
  const [bid, setBid] = useState("")

  useEffect(() => {
      fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL")
      .then(response => response.json().then(res => {
            setName(res.USDBRL.name)
            setBid(parseFloat(res.USDBRL.bid).toFixed(2))
      }))
      })
  return (
    <View style={styles.container}>
      <Text style={styles.title}>USD TO BRL</Text>
      <Text style={styles.subTitle}>{bid}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight:'bold',
    fontSize: 50,
  },
  subTitle: {
    fontWeight:'bold',
    fontSize: 35,

  }
});

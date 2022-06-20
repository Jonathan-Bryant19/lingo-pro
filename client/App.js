import React from 'react';
import { useState, useEffect } from "react";
import {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';



export default function App() {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    fetch("http://localhost:3000/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {count}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 50,
    textAlign: 'center',
    marginTop: 50
  }
})  

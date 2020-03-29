import React from "react"
import { Button, View, Text, StyleSheet } from "react-native"

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Button
        title="Characters"
        onPress={() => {
          navigation.navigate("Characters")
        }}
      />
      <Button
        title="Episodes"
        onPress={() => {
          navigation.navigate("Characters")
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    justifyContent: "center",
    flex: 1,
    paddingTop: 1
  }
})

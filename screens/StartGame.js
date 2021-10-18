import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

const StartGame = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Start a new game.</Text>
      <Text>Select a new number</Text>
      <TextInput style={styles.textInp} />
      <View style={styles.buttonContainer}>
        <Button title="Reset" onPress={() => {}} />
        <Button title="Confirm" onPress={() => {}} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
//   textInp: {
//     margin: "10",
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//   },
});
export default StartGame;

import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import globalStyles from "../styles/globalStyles";

const StartGame = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={globalStyles.txtPrim}>Start a new game.</Text>
      <Text style={globalStyles.txtSec}>Select a new number</Text>
      <View style={styles.inputContainer}>
        <TextInput />
      </View>
      
      <View style={styles.btnContainer}>
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
    justifyContent: "center",
    padding: 10,
  },

  btnContainer: {
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-evenly"
  },
});
export default StartGame;

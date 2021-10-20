import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const InputDef = (props) => {
  return (
    <TextInput
      style={{ ...styles.input, ...props.style }}
      blurOnSubmit
      keyboardType="number-pad" 
      maxLength={2}
    />
  );
};

export default InputDef;

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomColor: "#000000",
    borderBottomWidth: 1,
    width: "100%",
  },
});

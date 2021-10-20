import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import InputDef from "../components/InputDef";
import globalStyles from "../styles/globalStyles";

const StartGame = (props) => {
  const [val, setVal] = useState("");

  const numInpHandler = (inp) => {
    setVal(inp.replace(/[^0-9]/g, ""));
  };
  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
      <View style={styles.screen}>
        <View style={[styles.main, globalStyles.shodef]}>
          <Text style={globalStyles.txtPrim}>Start a new game.</Text>
          <Text style={[globalStyles.txtSec, globalStyles.mt1]}>
            Select a new number
          </Text>
          <View style={styles.inputContainer}>
            <InputDef
              style={styles.inpsty}
              onChangeText={numInpHandler}
              value={val}
            />
          </View>

          <View style={styles.btnContainer}>
            <View style={styles.btn}>
              <Button title="Reset" onPress={() => {}} />
            </View>
            <View style={styles.btn}>
              <Button title="Confirm" onPress={() => {}} />
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  btnContainer: {
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-evenly",
  },
  btn: {
    width: "40%",
  },
  main: {
    width: "90%",
    alignItems: "center",
    padding: 20,
  },
  inpsty: {
    width: 50,
    marginBottom: 20,
    textAlign: "center",
    fontSize: 30,
    fontWeight: "900",
  },
});
export default StartGame;

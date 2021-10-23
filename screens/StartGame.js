import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import InputDef from "../components/InputDef";
import globalStyles from "../styles/globalStyles";

const StartGame = (props) => {
  const [value, setValue] = useState("");
  const [selectedNumBer, setSelectedNumBer] = useState(0);
  const [confirm, setConfirm] = useState(false);
  const [ranNum, setranNum] = useState(null);

  const numInpHandler = (inp) => {
    setValue(inp.replace(/[^0-9]/g, ""));
  };
  const resetHandler = () => {
    setValue("");
    setConfirm(false);
  };

  const confirmHandler = () => {
    const chosenNumber = parseInt(value);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid Number!", "Number has to be between 1 - 99", [
        { text: "Okay", style: "destructive", onPress: resetHandler },
      ]);
      return;
    }
    setConfirm(true);
    setSelectedNumBer(chosenNumber);
    setValue("");
  };

  const getRandomArbitrary = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  useEffect(() => {
    const randomNumber = getRandomArbitrary(1, 99);
    console.log(randomNumber);
  }, [ranNum]);

  let confirmOutPut;

  if (confirm) {
    confirmOutPut = (
      <View style={[styles.std, globalStyles.shodef]}>
        <Text>Your number is:</Text>
        <Text style={styles.gnum}>{selectedNumBer}</Text>
        <Button title="Start Game" />
      </View>
    );
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <View style={[styles.main]}>
          <Text style={globalStyles.txtPrim}>Start a new game.</Text>
          <Text style={[globalStyles.txtSec, globalStyles.mt1]}>
            Select a new number
          </Text>
          <View style={styles.inputContainer}>
            <InputDef
              style={styles.inpsty}
              onChangeText={numInpHandler}
              value={value}
            />
          </View>

          <View style={styles.btnContainer}>
            <View style={styles.btn}>
              <Button title="Reset" onPress={resetHandler} />
            </View>
            <View style={styles.btn}>
              <Button title="Confirm" onPress={confirmHandler} />
            </View>
          </View>
        </View>
        {confirmOutPut}
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
    backgroundColor: "white",
    borderRadius: 10,
  },
  inpsty: {
    width: 50,
    marginBottom: 20,
    textAlign: "center",
    fontSize: 30,
    fontWeight: "900",
  },
  std: {
    borderColor: "black",
    marginVertical: 20,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
  },
  gnum: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
    borderWidth: 1,
    borderColor: "blue",
    marginVertical: 20,
    borderRadius: 10,
  },
});
export default StartGame;

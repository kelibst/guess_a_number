import { StyleSheet } from "react-native";

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  txtPrim: {
    fontSize: 30,
    fontWeight: "900",
  },
  txtSec: {
    fontSize: 18,
  },
  mb2: {
    marginBottom: 20,
  },
  mt1: {
    marginTop: 10,
  },
  shodef: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 6.62,

    elevation: 4,
  },
  borderRounded1: {
    borderRadius: 10
  }
});

export default globalStyles;

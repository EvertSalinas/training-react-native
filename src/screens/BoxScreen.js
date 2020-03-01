import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.textOneStyle}></View>
      <View style={styles.textTwoStyle}></View>
      <View style={styles.textThreeStyle}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    height: 100,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  textOneStyle: {
    borderWidth: 1,
    borderColor: "black",
    height: 50,
    width: 50,
    backgroundColor: "green",
  },
  textTwoStyle: {
    borderWidth: 1,
    borderColor: "black",
    height: 50,
    width: 50,
    backgroundColor: "blue",
    alignSelf: "flex-end",
    marginTop: 10,
    // ...StyleSheet.absoluteFillObject
  },
  textThreeStyle: {
    borderWidth: 1,
    borderColor: "black",
    height: 50,
    width: 50,
    backgroundColor: "red",
    // alignSelf: "flex-end"
  }
});

export default BoxScreen;

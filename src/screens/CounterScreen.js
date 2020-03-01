import React, { useReducer } from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const INCREMENT = 1;

const reducer = (state, action) => {
  switch (action.type) {
    case "increase_counter":
      return { ...state, counter: state.counter + action.payload };
    case "decrease_counter":
      return { ...state, counter: state.counter + action.payload };
    default:
      state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });

  return (
    <View>
      <Button
        title="Increase"
        onPress={function() {
          dispatch({ type: "increase_counter", payload: INCREMENT });
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          dispatch({ type: "decrease_counter", payload: -1 * INCREMENT });
        }}
      />
      <Text>Current Count:</Text>
      <Text>{state.counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;

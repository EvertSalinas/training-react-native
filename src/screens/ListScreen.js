import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

const ListScreen = function() {
  const friends = [
    { name: "Friend #1", age: 24 },
    { name: "Friend #2", age: 25 },
    { name: "Friend #3", age: 27 },
    { name: "Friend #4", age: 23 },
    { name: "Friend #5", age: 21 },
    { name: "Friend #6", age: 20 }
  ];
  return (
    <FlatList
      keyExtractor={friend => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - Age {item.age}
          </Text>
        );
      }}
    ></FlatList>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 5
  }
});

export default ListScreen;

import React from "react";
import { Text, StyleSheet, Button, View } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Hi there!</Text>
      <Button
        title="Components screen"
        onPress={() => navigation.navigate("Components")}
      />
      <Button
        title="Go to List screen"
        onPress={() => navigation.navigate("List")}
      />
      <Button
        title="Go to Image screen"
        onPress={() => navigation.navigate("Image")}
      />
      <Button
        title="Go to Counter screen"
        onPress={() => navigation.navigate("Counter")}
      />
      <Button
        title="Go to color screen"
        onPress={() => navigation.navigate("Color")}
      />
      <Button
        title="Go to square screen"
        onPress={() => navigation.navigate("Square")}
      />
      <Button
        title="Go to text screen"
        onPress={() => navigation.navigate("Text")}
      />
      <Button
        title="Go to box screen"
        onPress={() => navigation.navigate("Box")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;

import React from "react";
import { Text, StyleSheet, View } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title="Forest"
        imageSrc={require("../../assets/forest.jpg")}
        score={0}
      />
      <ImageDetail
        title="Beach"
        imageSrc={require("../../assets/beach.jpg")}
        score={6}
      />
      <ImageDetail
        title="Mountain"
        imageSrc={require("../../assets/mountain.jpg")}
        score={9}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;

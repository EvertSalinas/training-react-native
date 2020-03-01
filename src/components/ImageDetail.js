import React from "react";
import { Text, StyleSheet, Image, View } from "react-native";

const ImageDetail = ({ title, imageSrc, score }) => {
  return (
    <View>
      <Text>{title}</Text>
      <Image source={imageSrc} />
      <Text>{score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageDetail;

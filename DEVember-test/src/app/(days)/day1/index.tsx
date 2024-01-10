import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const index = () => {
  return (
    <View>
      <Stack.Screen options={{ title: "Day 1" }} />
      <Text style={{ fontFamily: "AmaticBold", fontSize: 100 }}>
        Day 1 Details Screen
      </Text>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});

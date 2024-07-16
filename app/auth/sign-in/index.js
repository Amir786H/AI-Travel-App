import { View, Text, TextInput, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "expo-router";
import { Colors } from "@/constants/Colors";

export default function Login() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View
      style={{
        padding: 25,
        paddingTop: 60,
        height: "100%",
        backgroundColor: Colors.WHITE,
      }}
    >
      <Text style={{ fontFamily: "outfit-bold", fontSize: 26 }}>
        Let's Sign You In
      </Text>
      <Text
        style={{
          fontFamily: "outfit",
          fontSize: 24,
          color: Colors.GRAY,
          marginTop: 15,
        }}
      >
        Welcome Back
      </Text>
      <Text
        style={{
          fontFamily: "outfit",
          fontSize: 24,
          color: Colors.GRAY,
          marginTop: 10,
        }}
      >
        You'ev been missed!
      </Text>

      {/* Email */}
      <View style={{ marginTop: 30}}>
        <Text style={{ fontFamily: "outfit"}}>Email</Text>
        <TextInput style={styles.input} placeholder="Enter your email" />
      </View>
      {/* Password */}
      <View style={{ marginTop: 30}}>
        <Text style={{ fontFamily: "outfit"}}>Password</Text>
        <TextInput style={styles.input} placeholder="Enter your password" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: Colors.GRAY,
    fontFamily: "outfit"
  }
})

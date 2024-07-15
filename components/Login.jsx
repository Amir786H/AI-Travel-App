import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";

export default function Login() {
  const router = useRouter();
  return (
    <View>
      <Image
        source={require("../assets/images/travel1.jpg")}
        style={{ width: "100%", height: 500 }}
      />
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 24,
            fontFamily: "outfit-bold",
            textAlign: "center",
            marginTop: 10,
          }}
        >
          AI Travel Planner
        </Text>
        <Text
          style={{
            fontSize: 17,
            fontFamily: "outfit",
            textAlign: "center",
            color: Colors.GRAY,
            marginTop: 15,
          }}
        >
          Discover your next adventure effortlessly.
        </Text>

        <Pressable onPress={() => router.push("/auth/sign-in")}>
          <View style={styles.button}>
            <Text
              style={{
                color: Colors.WHITE,
                textAlign: "center",
                fontFamily: "outfit",
                fontSize: 17,
              }}
            >
              Get Started
            </Text>
          </View>
        </Pressable>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    marginTop: -20,
    height: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 15,
  },
  button: {
    padding: 15,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 99,
    marginTop: "25%",
  },
});

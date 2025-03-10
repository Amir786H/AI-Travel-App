import { View, Text, Pressable } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../../constants/Colors";
import { useRouter } from "expo-router";

export default function StartNewTripCard() {
  const router = useRouter();
  return (
    <View
      style={{
        padding: 20,
        marginTop: 50,
        display: "flex",
        alignItems: "center",
        gap: 20,
      }}
    >
      <Ionicons name="location-sharp" size={24} color="black" />
      <Text
        style={{
          fontSize: 25,
          fontFamily: "outfit-medium",
        }}
      >
        No trips planned yet.
      </Text>
      <Text
        style={{
          fontSize: 20,
          fontFamily: "outfit",
          textAlign: "center",
          color: Colors.GRAY,
        }}
      >
        Looks like it's time to plan a new travel experience! Get started below
      </Text>

      <Pressable
        style={{
          padding: 15,
          backgroundColor: Colors.PRIMARY,
          borderRadius: 15,
          paddingHorizontal: 30,
        }}
        onPress={() => router.push("/create-trip/search-place")}
      >
        <Text
          style={{
            color: Colors.WHITE,
            fontFamily: "outfit-medium",
            fontSize: 17,
          }}
        >
          Start a new trip
        </Text>
      </Pressable>
    </View>
  );
}

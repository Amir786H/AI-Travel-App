import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { useNavigation, useRouter } from "expo-router";

export default function SignUp() {
  const navigation = useNavigation();
  const router = useRouter();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View
      style={{
        padding: 25,
        paddingTop: 40,
      }}
    >
      <Text style={{ fontFamily: "outfit-bold", fontSize: 26 }}>
        Create New Account
      </Text>
    </View>
  );
}

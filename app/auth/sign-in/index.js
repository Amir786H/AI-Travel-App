import { View, Text, TextInput, StyleSheet, Pressable, ToastAndroid } from "react-native";
import React, { useEffect } from "react";
import { useNavigation, useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../configs/FirebaseConfig";

export default function Login() {
  const navigation = useNavigation();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const OnSignIn = () => {
    if (!email && !password) {
      ToastAndroid.show("Please enter email & password", ToastAndroid.SHORT);
      return; 
    }
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        if(errorCode === "auth/user-not-found"){
          ToastAndroid.show("User not found", ToastAndroid.SHORT); 
        }
      });
  };

  return (
    <View
      style={{
        padding: 25,
        paddingTop: 40,
        height: "100%",
        backgroundColor: Colors.WHITE,
      }}
    >
      <Ionicons
        name="arrow-back"
        size={24}
        color="black"
        onPress={() => router.back()}
      />
      <Text style={{ fontFamily: "outfit-bold", fontSize: 26 }}>
        Let's Sign You In
      </Text>
      <Text
        style={{
          fontFamily: "outfit",
          fontSize: 24,
          color: Colors.GRAY,
          marginTop: 25,
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
      <View style={{ marginTop: 30 }}>
        <Text style={{ fontFamily: "outfit" }}>Email</Text>
        <TextInput onChangeText={(value) => setEmail(value)} style={styles.input} placeholder="Enter your email" />
      </View>
      {/* Password */}
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontFamily: "outfit" }}>Password</Text>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          onChangeText={(value) => setPassword(value)}
          placeholder="Enter your password"
        />
      </View>

      {/* Sign-In button */}
      <Pressable onPress={OnSignIn}>
        <View
          style={{
            padding: 18,
            backgroundColor: Colors.PRIMARY,
            borderRadius: 15,
            marginTop: 40,
          }}
        >
          <Text style={{ color: Colors.WHITE, textAlign: "center" }}>
            Sign In
          </Text>
        </View>
      </Pressable>
      {/* Create Account Button */}
      <Pressable onPress={() => router.replace("/auth/sign-up")}>
        <View
          style={{
            padding: 18,
            backgroundColor: Colors.WHITE,
            borderRadius: 15,
            marginTop: 20,
            borderWidth: 1,
          }}
        >
          <Text style={{ color: Colors.PRIMARY, textAlign: "center" }}>
            Create Account
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: Colors.GRAY,
    fontFamily: "outfit",
  },
});

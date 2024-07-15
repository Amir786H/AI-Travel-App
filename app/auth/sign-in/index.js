import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from 'expo-router';

export default function Login() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, []);

  return (
    <View style={{
      padding: 25
    }}>
      <Text>Let's Sign You In</Text>
    </View>
  )
}
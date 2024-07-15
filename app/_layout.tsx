import { useFonts } from "expo-font";
import { Stack } from "expo-router";

export default function RootLayout() {

  useFonts({
    'outfit': require('../assets/fonts/Outfit-Regular.ttf'),
    'outfit-bold': require('../assets/fonts/Outfit-Bold.ttf'),
    'outfit-medium': require('../assets/fonts/Outfit-Medium.ttf'),
    'playwrite': require('../assets/fonts/PlaywriteCU-Regular.ttf'),
  })
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }}/>
    </Stack>
  );
}
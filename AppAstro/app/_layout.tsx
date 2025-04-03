import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, View } from 'react-native';

const backgroundImage = require('@/assets/images/title-background.jpg');

export default function RootLayout() {
  return (
    // Wrapping content in ImageBackground to set a background image for the layout does not work had to use background image everywhere
    //<ImageBackground source={backgroundImage} style={styles.background} resizeMode="cover">
    <>
      <StatusBar style="auto" />
      <Stack screenOptions={{
        animation: "fade",
      }}>
        <Stack.Screen name="index" options={{
          headerShown: false,
          headerLeft: () => <></>
        }} />
        <Stack.Screen name="menu" options={{
          headerShown: false,
          headerLeft: () => <></>
        }} />
        <Stack.Screen name="explore" options={{
          headerShown: false,
          headerLeft: () => <></>
        }} />
        <Stack.Screen name="login" options={{
          headerShown: false,
          headerLeft: () => <></>
        }} />
        <Stack.Screen name="utils" options={{
          headerShown: false,
          headerLeft: () => <></>
        }} />
        <Stack.Screen name="constellations" options={{
          headerShown: false,
          headerLeft: () => <></>
        }} />
        <Stack.Screen name="(tabs)" options={{
          headerShown: false,
          headerLeft: () => <></>
        }} />
        <Stack.Screen name="+not-found" options={{
          headerTitle: "Not Found"
        }} />
      </Stack>
    </>
    //</ImageBackground>
  );
}

/*
const styles = StyleSheet.create({
  background: {
    borderRadius: 0,
    position: "absolute",
    width: "100%",
    height: "100%",
    opacity: 1,
  },
});
*/

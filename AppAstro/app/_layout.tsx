import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Colors } from '@/constants/Colors';
import {
  ActivityIndicator,
  ImageBackground,
  StyleSheet,
  View
} from 'react-native';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useEffect, useState } from "react";
import FlashMessage from "react-native-flash-message";
import { AuthProvider } from '@/hooks/authContext';

// IMPORT from your firebase.ts
import {
  auth,
  onAuthStateChanged,
  type User,
} from '@/firebase';
import { useInitializeUserProgress } from "@/hooks/useInitializeUserProgress";

const backgroundImage = require('@/assets/images/title-background.jpg');

function InitializeUserProgressWrapper() {
  useInitializeUserProgress();
  return null; // it doesn’t render anything
}

export default function RootLayout() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (initializing) setInitializing(false);
    });
    return unsubscribe;
  }, [initializing]);

  if (initializing) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: Colors.dark.darkBlue,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ActivityIndicator size={80} />
      </View>
    )
  }


  return (
    // If the application later will use gestures <GestureHandlerRootView> already wraps the whole app with it. Delete to use it in a module by module basis

    // Wrapping content in ImageBackground to set a background image for the layout does not work had to use background image everywhere and constant colors
    // really tried a millions different options Stack simply won't accept the image and renders its own white background, tried to override that as well
    // the thing just won't listen, if you manage to find a solution do let me know. Otherwise I have plans to make it a separate module to be more DRY
    <AuthProvider>
      <GestureHandlerRootView style={styles.background}>
        <StatusBar style="auto" />
        <ImageBackground
          source={backgroundImage}
          resizeMode="cover"
          style={styles.background}
        >
          <FlashMessage position="top" />
          {user != null && <InitializeUserProgressWrapper />}
          <Stack screenOptions={{
            animation: "fade",
            headerShown: false,
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
        </ImageBackground>
      </GestureHandlerRootView>
    </AuthProvider>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: Colors.dark.darkBlue,
  },
});
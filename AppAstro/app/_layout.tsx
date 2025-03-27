import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="auto" />
      <Stack>
        <Stack.Screen name="(tabs)" options={{
          headerShown: false,
          headerLeft: () => <></>
        }} />
        <Stack.Screen name="+not-found" options={{
          headerTitle: "Not Found"
        }} />
      </Stack>
    </>
  );
}

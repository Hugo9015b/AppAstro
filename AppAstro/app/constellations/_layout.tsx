import React from 'react';
import { Stack } from 'expo-router';

export default function ConstellationsLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        headerLeft: () => <></>,
      }}
    />
  );
}
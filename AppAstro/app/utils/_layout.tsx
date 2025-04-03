import React from 'react';
import { Stack } from 'expo-router';

export default function UtilsLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        headerLeft: () => <></>,
      }}
    />
  );
}
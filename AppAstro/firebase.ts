// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    initializeAuth,
    getReactNativePersistence,
    onAuthStateChanged as onAuthStateChangedWeb,
    signInWithEmailAndPassword as signInWithEmailAndPasswordWeb,
    createUserWithEmailAndPassword as createUserWithEmailAndPasswordWeb,
    updateProfile as updateProfileWeb,
    type User as FirebaseUser,
} from "firebase/auth";
import {
  initializeFirestore,
  CACHE_SIZE_UNLIMITED,
} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { firebaseConfig } from './firebaseConfig'; // Config from Firebase console web app registration
import AsyncStorage from '@react-native-async-storage/async-storage'; // Native AsyncStorage adapter for persistance of user log in

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth with React Native persistence:
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

// Initialize Firestore
export const db = initializeFirestore(app, {
  cacheSizeBytes: CACHE_SIZE_UNLIMITED, // Allow unlimited cache size in bytes
  experimentalForceLongPolling: true,  // Work around RN network layers
  ignoreUndefinedProperties: true, // Ignore undefined properties in your data objects
});

// Re‑export the Web SDK functions you need
export const onAuthStateChanged = onAuthStateChangedWeb;
export const signInWithEmailAndPassword = signInWithEmailAndPasswordWeb;
export const createUserWithEmailAndPassword = createUserWithEmailAndPasswordWeb;
export const updateProfile = updateProfileWeb;
export type User = FirebaseUser;
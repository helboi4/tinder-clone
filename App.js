import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {useTailwind} from "tailwind-rn";
import StackNavigator from './StackNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './hooks/UseAuth';
import React from 'react';
import {firebaseConfig, firebaseApp} from "./FirebaseService"
import * as WebBrowser from 'expo-web-browser';

const app = firebaseApp;

WebBrowser.maybeCompleteAuthSession();

export default function App() {
  const tw = useTailwind();

  return (
    <NavigationContainer>
      <AuthProvider>
        <StackNavigator/>
      </AuthProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

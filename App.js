import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {  SafeAreaView, Text, View } from 'react-native';
import Header from './components/Header';
import globalStyles from './styles/globalStyles';

export default function App() {
  return (
    <SafeAreaView style={globalStyles.container}>
      <Header title="Guess a number" />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}


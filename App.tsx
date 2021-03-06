import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter'
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components';
import { theme } from './src/global/styles/theme';
import { Routes } from './src/routes';


export default function App() {
  const [fontsloaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  })
  if (!fontsloaded) {
    return <AppLoading />
  }

  return (
      <>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent={true} /><ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
      </>

  );
}

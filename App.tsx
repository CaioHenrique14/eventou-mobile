import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components";
import theme from "./src/shared/theme/theme";
import { AppContainer } from "./App.styled";
import Routes from "./src/app/navigation/Routes";
import useFonts from "./src/shared/hooks/useFonts";
import React, { useCallback, useEffect, useState } from "react";
import * as SplashScreen from 'expo-splash-screen'

export default function App() {
  const [IsReady, setIsReady] = useState(false);
  
  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await useFonts();
      } catch (e) {
        console.warn(e);
      } finally {
        setIsReady(true);
        await SplashScreen.hideAsync()
      }
    }

    prepare();
  }, []);

  if (!IsReady) {
    return null;
  }
  
  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <Routes />
        <StatusBar style="auto" />
      </AppContainer>
    </ThemeProvider>
  );
}

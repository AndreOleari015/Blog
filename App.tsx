import {StatusBar } from 'react-native';

import { useFonts } from 'expo-font';
import { Inter_400Regular, Inter_500Medium } from "@expo-google-fonts/inter";
import { Lexend_400Regular,Lexend_300Light } from "@expo-google-fonts/lexend";
import LoadingPage from './src/components/LoadingPage';
import Home from './src/screens/Home';

export default function App() {
  const [fontsLoading] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Lexend_300Light,
    Lexend_400Regular,
  })
  if (!fontsLoading) {
    return <LoadingPage />
  }
  return (
    <>
      <StatusBar
        barStyle="default"
        backgroundColor="transparent"
        translucent />
      <Home />
    </>
  );
}

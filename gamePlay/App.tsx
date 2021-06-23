import React from 'react';
import { StatusBar } from 'react-native';
import { useFonts } from 'expo-font';

import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';

import AppLoading from 'expo-app-loading';


// importando as telas
import { Routes } from './src/Routes';

// component de background
import { Background } from './src/components/Background';

export default function App() {

  const [fonstsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  });

  // enquanto as fontes n carregarem ele fica na splash
  if(!fonstsLoaded){
    return <AppLoading/>
  }

  return (
    // fragment <>, ele deixa usar dois elementos
    <Background>
    <StatusBar barStyle='light-content'
               backgroundColor='transparent'
               translucent
    />
    <Routes />
    </Background>
  );
}

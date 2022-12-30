import React from 'react'
import 'react-native-gesture-handler';
import { Text, } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './src/navigation/Navigation';
import { HomeScreen } from './src/screens/HomeScreen';

const App = () => {
  return (
    <NavigationContainer>
      <Navigation/>
    </NavigationContainer>
  )
}

export default App

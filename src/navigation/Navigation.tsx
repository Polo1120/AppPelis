
import { createStackNavigator } from '@react-navigation/stack';
import { DatailScreen } from '../screens/DatailScreen';
import { HomeScreen } from '../screens/HomeScreen';
import React from 'react';
import { Movie } from '../interfaces/movieInterfaces';

export type RootStackParams ={
  HomeScreen : undefined,
  DatailScreen: Movie;
}

const Stack = createStackNavigator();


export const Navigation =()=> {
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle:{
        backgroundColor: "white"
      }
    }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DatailScreen" component={DatailScreen} />
    </Stack.Navigator>
  );
}
import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import {Dimensions, Image, StyleSheet, ScrollView,View, Text, ActivityIndicator } from 'react-native'
import { RootStackParams } from '../navigation/Navigation'
import Icon from "react-native-vector-icons/Ionicons"
import { useMovieDatails } from '../hooks/useMovieDatails'

const screenHeight =Dimensions.get("screen").height

interface Props extends StackScreenProps <RootStackParams , "DatailScreen">{}

export const DatailScreen = ({route}:Props) => {

  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

   const {isLoading, cast, movieFull}=useMovieDatails(movie.id)

   console.log({cast})

  return (

    <ScrollView>
    <View style={styles.imageContainer}>
      <View style = {styles.imagenBorder}>

      <Image
      source={{uri}}
      style={styles.posterImage}
      />
      </View>
    </View>

    <View style={styles.marginContainer}>

    <Text style={styles.subTitle}>{movie.original_title}</Text>
    <Text style={styles.title}>{movie.title}</Text>
    </View>

    <View style ={styles.marginContainer}>

      {
        isLoading
        ?<ActivityIndicator size={30} color ="grey" style ={{marginTop:20}}/>
        :<Text>hola</Text>
      }
    </View>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  imageContainer: {
    /* overflow: 'hidden', */
    width: '100%',
    height: screenHeight * 0.7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.50,
    shadowRadius: 3.84,

    elevation: 10,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
    
  }  
  ,
  posterImage:{
      flex: 1,
      
    },
  imagenBorder:{
    flex: 1,
    overflow: 'hidden',
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  marginContainer:{
    marginHorizontal: 20,
    marginTop: 20,
  },
  subTitle:{

    fontSize: 16,
    opacity: 0.8
  },
  title:{
    fontSize: 20,
    fontWeight: 'bold',
  }

});

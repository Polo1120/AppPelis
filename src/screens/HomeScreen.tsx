import React, {useEffect}from 'react'
import { View,Text, ActivityIndicator, Dimensions, FlatList, ScrollView } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import { HorizontalSlider } from '../components/HorizontalSlider';

import { MoviePoster } from '../components/MoviePoster';
import { useMovies } from '../hooks/useMovies'

const {width: windowWidth } = Dimensions.get("window")

export const HomeScreen = () => {
  
  const {nowPlaying, popular, topRated, upcoming, isLoading}= useMovies();
  const {top} = useSafeAreaInsets();
  

  if (isLoading) {
    return(
      <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
        <ActivityIndicator color={"red"} size={50}></ActivityIndicator>
      </View>
    )
  }
  
  return (

    <ScrollView>

    
    <View style ={{marginTop:top + 20}}>
      
      <View style ={{
        height:440
      }}>

      {/* Carosel Principal */}
      <Carousel
      data={nowPlaying}
      renderItem ={({item}:any) => <MoviePoster movie={item} /> }
      sliderWidth = {windowWidth}
      itemWidth ={300}
      inactiveSlideOpacity ={0.9}
      />
      </View>

      {/* Peliculas populares */}
      <HorizontalSlider title='Popular' movies={popular}/>
      <HorizontalSlider title='Top Rated' movies={topRated}/>
      <HorizontalSlider title='Uncoming' movies={upcoming}/>
     


    </View>

    </ScrollView>
  )
}



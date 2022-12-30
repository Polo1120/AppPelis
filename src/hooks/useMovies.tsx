import { useEffect, useState } from "react"
import movieDB from "../api/movieDB"
import { Movie, MovieBDMoviesResponse,  } from "../interfaces/movieInterfaces"

interface MoviesState{
nowPlaying: Movie[];
popular: Movie[];
topRated: Movie[];
upcoming: Movie[];
}

export const useMovies = () => {
  

  const [isLoading, setIsLoading] = useState(true)

  const [moviesState, setMoviesSate] = useState<MoviesState>({
    nowPlaying:[],
    popular: [],
    topRated: [],
    upcoming: [],
  })





  const getMovies = async () =>{
    const nowPlayingPromise = movieDB.get<MovieBDMoviesResponse>("/now_playing");
    const popularPromise = movieDB.get<MovieBDMoviesResponse>("/popular");
    const topRatedPromise = movieDB.get<MovieBDMoviesResponse>("/top_rated");
    const uncomingPromise = movieDB.get<MovieBDMoviesResponse>("/upcoming");

    const response = await Promise.all([nowPlayingPromise,popularPromise,topRatedPromise,uncomingPromise])


    setMoviesSate({
    nowPlaying: response[0].data.results,
    popular: response[1].data.results,
    topRated: response[2].data.results,
    upcoming: response[3].data.results,
    })


    setIsLoading(false);
  }
  
  
  useEffect(()=>{
    //now playing
    getMovies()
  
  },[]) 
  
  return {
    ...moviesState,
    isLoading
  }
}


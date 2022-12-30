import {useState, useEffect} from "react"
import movieDB from "../api/movieDB";
import { Cast, CreditsResponse } from "../interfaces/creditsInterfaces";
import { MovieFull } from "../interfaces/movieInterfaces";


interface useMovieDatails{
  isLoading: boolean;
  movieFull?: MovieFull;
  cast:Cast[];
}

export const useMovieDatails = (movieId:number) => {

  const [state, setState] = useState<useMovieDatails>({
    isLoading: true,
    movieFull: undefined,
    cast:[]
  });


  const getMovieDetails = async ()=>{
   const movieDetailsPromise = await movieDB.get<MovieFull>(`/${movieId}`);
   const castPromise = await movieDB.get<CreditsResponse>(`/${movieId}/credits`);

  const [movieDetailsResp, castPromiseResp] = await Promise.all([movieDetailsPromise,castPromise])

    setState({
      isLoading: false,
      movieFull: movieDetailsResp.data,
      cast: castPromiseResp.data.cast
    })

  }

  useEffect(()=>{
    getMovieDetails();
  },[])

  return{
    ...state
  }
  
}


import axios from "axios";


const movieDB = axios.create({
  baseURL:"https://api.themoviedb.org/3/movie",
  params:{
    api_key:"8c6564738f8ac9e23da14d05da1ba66b",
    language:"es-ES"
  }
  
});

export default movieDB;
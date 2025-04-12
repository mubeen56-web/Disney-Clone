import axios from "axios";
   const movieBaseUrl='https://api.themoviedb.org/3'
   const api_Key='027e8dc50d129e47fb1bd378831ea0fd'
   const movieByGenreBaseURl='https://api.themoviedb.org/3/discover/movie?api_key=027e8dc50d129e47fb1bd378831ea0fd'
  //https://api.themoviedb.org/3/trending/all/day?api_key=2ec0d66f5bdf1dd12eefa0723f1479cf
   const getTrendingVideos=axios.get(movieBaseUrl+'/trending/all/day?api_key='+api_Key);
   const getMovieByGenreId=(id)=>axios.get(movieByGenreBaseURl+'&with_genres='+id)

   export default {
    getTrendingVideos,
    getMovieByGenreId
   };
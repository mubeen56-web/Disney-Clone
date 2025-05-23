import React from 'react'
const IMAGE_BASE_URL='https://image.tmdb.org/t/p/original';
const MovieCard = ({movie}) => {
  return (
    <div>
        <img src={IMAGE_BASE_URL+movie.poster_path} className='max-w-[200px] rounded-lg hover:border-[3px] cursor-pointer border-gray-400 hover:scale-110 transition-all duration-150 ease-in'/>
    </div>
  )
}

export default MovieCard
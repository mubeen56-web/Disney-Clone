import React from 'react'
const IMAGE_BASE_URL='https://image.tmdb.org/t/p/original';
const HrMovieList = ({movie}) => {
  return (
    <div className='hover:scale-110 transition-all duration-150 ease-in'>
        <img src={IMAGE_BASE_URL+movie.backdrop_path} className='max-w-[260px] rounded-lg hover:border-[3px] cursor-pointer border-gray-400 '/>
        <h2 className='max-w-[260px] text-white mt-3'>{movie.title}</h2>
    </div>
  )
}

export default HrMovieList
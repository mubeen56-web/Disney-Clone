import React, { useEffect, useState ,useRef } from 'react'
import GlobalApi from '../Services/GlobalApi'
import {HiChevronLeft,HiChevronRight}from 'react-icons/hi2';
const IMAGE_BASE_URL='https://image.tmdb.org/t/p/original';
const screenWidth=window.innerWidth;
const Slider = () => {
     const [movieList,setMovieList]=useState([])
     const elementRef=useRef();
    useEffect(() => {
        getTrendingVideos();
    }, []);

    const getTrendingVideos = () => {
        GlobalApi.getTrendingVideos.then(resp => {
            setMovieList (resp.data.results)
        })
    };
    const sliderRight=(element)=>{
         element.scrollLeft+=screenWidth-110
    }
    const sliderLeft=(element)=>{
        element.scrollLeft-=screenWidth-110
   }

    return (
        <div>
            <HiChevronLeft className='hidden md:block text-white text-[30px] cursor-pointer absolute mx-8 mt-[155px]' onClick={()=>sliderLeft(elementRef.current)}/>
            <HiChevronRight className='text-white hidden md:block text-[30px] right-0 cursor-pointer absolute mx-8 mt-[155px]' onClick={()=>sliderRight(elementRef.current)} />
        <div className='flex overflow-x-auto w-full py-4 px-16 scrollbar-none scroll-smooth' ref={elementRef}>
            {movieList.map((item,index)=>(
                <img src={IMAGE_BASE_URL+item.backdrop_path} alt="" className='min-w-full  object-cover md:h-[310px] object-left-top rounded-md mr-5 hover:border-[4px] border-gray-400 transition-all duration-100 ease-in' />
            ))}
        </div>
        </div>
    )
}

export default Slider

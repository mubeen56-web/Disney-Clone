import React, { useEffect, useState ,useRef} from "react";
import GlobalApi from "../Services/GlobalApi";
import MovieCard from "./MovieCard";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import HrMovieList from "./HrMovieList";
const screenWidth = window.innerWidth;

const MovieList = ({ genreid ,index_ }) => {
  const elementRef = useRef();
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    getMovieByGenreId();
  }, []);
  const getMovieByGenreId = () => {
    GlobalApi.getMovieByGenreId(genreid).then((resp) => {
      //console.log(resp.data.results)
      setMovieList(resp.data.results);
    });
  };
  const sliderRight = (element) => {
    element.scrollLeft += screenWidth - 110;
  };
  const sliderLeft = (element) => {
    element.scrollLeft -= screenWidth - 110;
  };
  return (
    <div className="relative">
      <HiChevronLeft
        className={`${index_%3==0?'mt-[88px]':'mt-[155px]'} hidden md:block text-white text-[30px] cursor-pointer absolute z-10`}
        onClick={() => sliderLeft(elementRef.current)}
      />
      <div className=" flex overflow-x-auto gap-8 py-5 px-3 scrollbar-none scroll-smooth" ref={elementRef}>
        {movieList.map((item, index) => (
          <>
         {index_%3==0? <HrMovieList movie={item}/>: <MovieCard movie={item} />}
          </>
        ))}
      </div>
      <HiChevronRight
        className={`text-white hidden md:block text-[30px] right-0 cursor-pointer absolute mx-12 z-10 ${index_%3==0?'mt-[-140px]':'mt-[-165px]'}`}
        onClick={() => sliderRight(elementRef.current)}
      />
    </div>
  );
};

export default MovieList;

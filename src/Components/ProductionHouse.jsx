import React from 'react'
import disney from '../assets/images/disney.png'
import marvel from '../assets/images/marvel.png'
import nationalG from '../assets/images/nationalG.png'
import pixar from '../assets/images/pixar.png'
import starwar from '../assets/images/starwar.png'

import starwarV from '../assets/videos/star-wars.mp4'
import disneyV from '../assets/videos/disney.mp4'
import marvelV from '../assets/videos/marvel.mp4'
import nationgeographicV from '../assets/videos/national-geographic.mp4'
import pixarV from '../assets/videos/pixar.mp4'
const ProductionHouse = () => {
    const productionHouseList=[
        {
            id:1,
            image:disney,
            video:disneyV,
        },
        {
            id:2,
            image:marvel,
            video:marvelV,
        },
        {
            id:3,
            image:nationalG,
            video:nationgeographicV,
        },
        {
            id:4,
            image:pixar,
            video:pixarV,
        },
        {
            id:5,
            image:starwar,
            video:starwarV,
        },
    ]
  return (
    <div className='flex gap-2 md:gap-5 p-2 px-5 md:px-16'>
        {productionHouseList.map((item)=>(
            <div className='border-[2px] border-gray-600 rounded-lg hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer relative shadow-xl shadow-black'>
                <video src={item.video} autoPlay loop muted className='absolute z-0 top-0 rounded-md opacity-0 hover:opacity-50'/>
                <img src={item.image} alt="" className='w-full' />
            </div>
        ))}
    </div>
  )
}

export default ProductionHouse
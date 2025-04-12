import React from 'react'

const Headeritem = ({name,Icon}) => {
  return (
    <div className='text-white pt-2 flex gap-2 items-center font-semibold cursor-pointer text-[13px] hover:underline underline-offset-8'>
      <Icon className='text-10px'/>
      <h2 className=''>{name}</h2>
    </div>
  )
}

export default Headeritem
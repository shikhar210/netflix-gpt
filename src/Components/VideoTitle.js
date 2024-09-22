import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='pt-[20%] px-24 absolute w-screen aspect-video text-white bg-gradient-to-r from-black'>
        <h1 className='text-5xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/4'>{overview}</p>
        <div>
            <button className='p-4 px-12 mx-2 bg-gray-400 text-white opacity-50 rounded-lg text-xl'>▶️Play</button>
            <button className='p-4 px-12 mx-2 bg-gray-400 text-white opacity-50 rounded-lg text-xl'>ℹ️More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle
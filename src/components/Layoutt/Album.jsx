import React from 'react'
import album from '../../assets/Album.png'

const Album = () => {
  return (
    <>
    <div className='p-2 rounded-xl flex flex-col justify-between w-[283px] h-[312px]  absolute top-[896px] left-[413px] bg-center bg-cover' style={{ backgroundImage: `url(${album})` }}>
        <h3 className='text-2xl font-bold text-white'>The Sound of Silence</h3>
        <div className='flex p-2 rounded-xl bg-white/30 backdrop-blur-sm'>
            <div className='p-1 w-1/3 flex flex-col items-center'>
                <p className='text-white'>Shares</p>
                <p className='font-bold text-white'>317</p>
            </div>
            <div className='p-1 w-1/3 flex flex-col items-center'>
                <p className='text-white'>Offered</p>
                <p className='font-bold text-white'>75%</p>
            </div>
            <div className='p-1 w-1/3 flex flex-col items-center'>
                <p className='text-white'>Raised</p>
                <p className='font-bold text-white'>$9510</p>
            </div>
        </div>
    </div>
      
    </>
  )
}

export default Album

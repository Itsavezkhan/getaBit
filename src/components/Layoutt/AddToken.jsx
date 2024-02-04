import React from 'react'
import token from '../../assets/token.png'

const AddToken = () => {
  return (
    <>
    <div className='p-2 rounded-xl flex flex-col w-[283px] h-[312px]  absolute top-[896px] left-[87px] bg-[#EDEDED] opacity-70 place-items-center'>
        <img src={token} className='w-8 absolute top-36'/>
        <p className='font-normal text-md text-[#A0A0A0] absolute bottom-4 left-2'>You haven’t uploaded any videos with aBit yet. Add now!</p>
    </div>
      
    </>
  )
}

export default AddToken

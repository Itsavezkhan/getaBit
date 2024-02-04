import React from 'react'

const DashStats = () => {
  return (
    <>
     <div className='h-[75px] w-[1240px] absolute top-[753px] left-[86px] flex justify-between'>
        <div className='flex flex-col'>
            <h2 className='font-nromal text-3xl'>Releases</h2>
            <p className='font-normal italic text-base text-[#565656]'>Videos that you upload in collaboration with aBit appear here.</p>
        </div>
        <div className='flex gap-8'>
            <div className='border-l-[0.5px] border-[#7A7A7A] p-2'>
                <div>
                    <h4 className='font-bold text-base'>1</h4>
                    <p className='text-sm'>Shared videos</p>
                </div>
            </div>
            <div className='border-l-[0.5px] border-[#7A7A7A] p-2'>
                <div>
                    <h4 className='font-bold text-base'>$9510</h4>
                    <p className='text-sm'>Funds Raised</p>
                </div>
            </div>
            <div className='border-l-[0.5px] border-[#7A7A7A] p-2'>
                <div>
                    <h4 className='font-bold text-base'>317</h4>
                    <p className='w-[77px] text-sm'>Co-owner community</p>
                </div>
            </div>
            <div className='border-l-[0.5px] border-[#7A7A7A] p-2'>
                <div className='w-[]'>
                    <h4 className='font-bold text-base'>$3804</h4>
                    <p className='text-sm'>Co-owner Earnings</p>
                </div>
            </div>
        </div>

     </div>
    </>
  )
}

export default DashStats

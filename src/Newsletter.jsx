import React from 'react'

const Newsletter = () => {
  return (
    <div>
      <div className='container mx-auto py-16 flex flex-col items-center justify-between gap-8 my-8 bg-slate-200 rounded-lg'>
        <h2 className='text-center'>Subscribe to our Newsletter to get exciting offers,deals,coupons,Etc.</h2>
        <div className=' border-black border'>
        <input type='text' className='outline-none p-2'/>
        <button className='p-2 px-4 bg-black text-white font-semibold'>Subscribe</button>
        </div>
      </div>
    </div>
  )
}

export default Newsletter
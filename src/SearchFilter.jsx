import React, { useContext, useState } from 'react'
import { ProductData } from './Context';
import { IoClose } from "react-icons/io5";
import { Link } from 'react-router-dom';


const SearchFilter = () => {
    const products = useContext(ProductData)
    const[filter,setFilter]=useState("")

    console.log(filter);
  
  return (
    <div className='flex flex-col justify-center'>
      <div className='flex items-center justify-center'>
      <input value={filter} className='outline-none  p-2 min-w-80  border-black border border-r-0 my-5' placeholder='Search Products...' type="text" onChange={(e)=>setFilter(e.target.value)} />
      <div className='border border-black p-2 border-l-0 '>
      <IoClose onClick={()=>setFilter("")} className='size-6 fill-gray-400 hover:fill-black'/>
      </div>
      </div>
      <div className='flex px-5 overflow-x-auto gap-5 my-5'>
      {products.filter((data)=> filter.toLowerCase()==="" ? null : data.title.toLowerCase().includes(filter.toLowerCase()))
      .map((data)=>{
        return(
          <Link to= {`/products/${data.id}`}>
          <div className='min-w-72 border border-black p-5'>
            <img src={data.thumbnail} alt="" />
            <div>
            <div className='flex flex-col gap-4 p-2'>
          <div className='flex flex-col gap-2'>
            <h2 className='text-xl font-bold'>{data.title}</h2>
            <h3 className='text-slate-900 font-semibold text-lg'>${data.price}</h3>
            <h3 className='text-gray-600 font-semibold text-lg capitalize'>Category: {data.category}</h3>
            <h3 className='text-green-600 font-semibold'>Rating: {data.rating} /5</h3>
          </div>
          <div>
            <button className='px-6 py-2 bg-gray-300 text-lg font-semibold hover:bg-black hover:text-white'>Add to Cart</button>
          </div>
          </div>
            </div>
          </div>
          </Link>
          
        )
      })
      }
      </div>
    </div>
  )
}

export default SearchFilter
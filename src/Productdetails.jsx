import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FaStar } from "react-icons/fa6";

const Productdetails = () => {

  
    useEffect(()=>{
        window.scrollTo(0, 0);
      },[])

  const params = useParams();
  const[data,setData]=useState([])


    useEffect(()=>{
      fetch(`https://dummyjson.com/products/${params.id}`)
      .then(Response=>Response.json())
      .then(data=>setData(data))
    },[])
  
  return (
    <div>
      <div className='flex flex-col md:flex md:flex-row gap-5 items-center justify-center md:gap-16 mt-5  p-5'>
      <div className=''>
        <img className=' w-60 md:w-96 border' src={data.thumbnail} alt="" />
      </div>
      <div className='flex flex-col gap-8'>
        <div className='flex flex-col gap-2'>
        <h2 className='capitalize text-lg font-semibold text-gray-600'>{data.category}</h2>
        <h2 className='text-2xl font-bold'>{data.title}</h2>
        <h3 className='flex items-center gap-4'><FaStar className='fill-yellow-400'/>{data.rating} / 5 Rating</h3>
        <div className='flex items-center gap-5'>
        <h2 className='font-semibold text-lg text-slate-950'>$ {data.price} <span className='text-gray-600 line-through text-sm '>$ {((data.price * 100)/(100-data.discountPercentage)).toFixed(2)}</span></h2>
        <h2 className='bg-gray-300/50 px-4 py-1 rounded-full flex items-center gap-2'><span className='text-green-500'>&#x2022;</span> Discount : {data.discountPercentage} % </h2>
        </div>
        <h2 className='text-green-600 font-semibold'>Stock Availability: {data.stock} ({data.availabilityStatus})</h2>
        <h2 className=''>Shipping Details: {data.shippingInformation}</h2>
        <h2 className='max-w-96 text-justify text-gray-600'>Description: {data.description}</h2>
        </div>
        <div className='flex gap-4'>
          <button className='border border-black px-6 py-2 font-semibold'>Add to Cart</button>
          <button className='border border-gray-600 text-white bg-black px-6 py-2 font-semibold'>Buy Now</button>
          </div>
      </div>
    </div>
    </div>
  )
}

export default Productdetails
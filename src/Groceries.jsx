import React, { useContext, useEffect } from 'react'
import { ProductData } from './Context'
import { Link } from 'react-router-dom';

const Product = () => {
  useEffect(()=>{
      window.scrollTo(0, 0);
    },[])

  const products = useContext(ProductData)
  
  return (
   <div>
    <h2 className='text-2xl text-blue-600 px-10 py-5 font-semibold'>Groceries</h2>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5'>
    {products.filter((data)=>data.category.toLowerCase().includes("groceries"))
    .map((data)=>{
      return(
        <Link to= {`/products/${data.id}`}>
       <div className='min-w-[300px] h-[450px] border border-black flex flex-col items-center justify-between p-5 ' key={data.id}>
          <div className='w-40'>
            <img src={data.thumbnail} alt={data.thumbnail} />
          </div>
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
       </Link>
      )
    })}
   </div>
   </div>
  )
}

export default Product
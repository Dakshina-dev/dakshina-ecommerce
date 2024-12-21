import React, { useContext } from 'react'
import { ProductData } from './Context'
import { Link } from 'react-router-dom';

const Product = () => {

  const products = useContext(ProductData)
  console.log(products);
  
  return (
   <div>
    <h2 className='text-2xl text-blue-600 px-10 py-5 font-semibold'>Highly Rated Products <br /><span className='text-base font-normal text-gray-600'>( Ratings more than 4 )</span></h2>
    <div className='flex gap-5 p-5 lg:px-20 overflow-auto'>
    {products.filter((data)=>data.rating > 4)
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
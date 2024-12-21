import React, { createContext, useEffect, useState } from 'react'

export const ProductData = createContext()
const Context = ({children}) => {

  const[products,SetProducts]=useState([])

  useEffect(()=>{
    fetch('https://dummyjson.com/products')
    .then(Response=>Response.json())
    .then(data=>SetProducts(data.products))
  },[])

  return (
    <ProductData.Provider value={products}>
      {children}
    </ProductData.Provider>
  )
}

export default Context
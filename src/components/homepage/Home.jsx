import React from 'react'
import { useLocation } from 'react-router'
import Footer from '../Header/Footer'
import Header from '../Header/Header'
import ProductList from '../Products/productlist'
import Carousel from './Carousel'
import Slider from './Slider'

export default function Home(){
  const location = useLocation();
 console.log(location) ; 
  return (
    <div>
      <Header/>
      <Carousel/>
      
      <h2>BEST SELLERS</h2>
      <div className='homeproduct'>
        <ProductList/>
      </div>
     
    </div>
  )
}


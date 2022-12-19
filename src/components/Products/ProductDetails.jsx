import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useLocation } from 'react-router'
import { publicRequest } from '../../requestDetails';
import Header from '../Header/Header';

const ProductDetails = () => {

    const location=useLocation();
    const id = location.pathname.split("/")[2];
    const [Productdetails,setProductdetails] = useState({});

    useEffect(() => {
      const getProduct = async() => {
        try{
          const res = await publicRequest.get("/Productdetails/find/" + id);
          setProductdetails(res.data);
        
        }
        catch{}
      };
      getProduct()
    },[id]);
    return(
      <div className='Container'>
        <Header/>
      <div>
        <div className ='ImgContainer'>
          <img src = {Productdetails.display_images}/>
        </div>
        <div className ='bookname'>
          <h3>{Productdetails.Name}</h3>
          <h2>Author: {Productdetails.Authorname}</h2>
        </div>
          <p>Genre: {Productdetails.Genre}</p>
          <p>Availability: {Productdetails.availability}</p>
          <p>Price: {Productdetails.Price}</p>
        <div><button className='atc'>ADD TO CART</button>
          <button className='byenow'>BUY NOW</button>
        </div>
        <div className='brpli'>
            <p>Binding {Productdetails.Binding}</p>
            <p>Release Date {Productdetails.ReleaseDate}</p>
            <p>Publisher {Productdetails.Publisher}</p>
            <p>Language {Productdetails.Languages}</p>
            <p>ISBN {Productdetails.ISBN}</p>
        <div className='summary'>
            <h3>Summary</h3>
            <p>{Productdetails.Summary}</p>
        </div>  
        </div>

      </div>      
      </div>
    )
}

export default ProductDetails
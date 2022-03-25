import React, { useEffect, useState } from 'react';
import icon from '../../images/icon.png';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {
    const [products, setProducts]=useState([]);
    useEffect(()=>{
        fetch('productsDB.json')
            .then(res=>res.json())
            .then(data=>setProducts(data))
    },[]);

    return (
        <div>
            <div className='mt-5 d-flex justify-content-center align-items-center'>
                <img src={icon} alt="" className='me-2'/>
                <h1>Available Products in <span className='highlighted-text'>MOWAT Store</span></h1>
            </div>            
            <div className="container mt-5 mb-5">
                <div className="products-container mt-3 mb-5">
                    {
                        products.map(product=><Product product={product} key={product.id}></Product>)
                    }
                </div>
                <div className="cart-container">
                    <h3 className='text-center'>Order Summery</h3>
                </div>
            </div>
        </div>
    );
};

export default Products;
import React, { useEffect, useState } from 'react';
import icon from '../../images/icon.png';
import Cart from '../Cart/Cart';
import MsgModal from '../MsgModal/MsgModal';
import Product from '../Product/Product';
import './Products.css';

const Products = (props) => {
    const [products, setProducts]=useState([]);
    const [cart, setCart]=useState([]);
    useEffect(()=>{
        fetch('productsDB.json')
            .then(res=>res.json())
            .then(data=>setProducts(data))
    },[]);
    
    const addToCart=(product)=>{
        const newCart = [...cart,product];
        setCart(newCart);        
    }
    
    const chooseAgain = ()=>{
        const newCart = [];
        setCart(newCart);
    }

    const getOne = ()=>{
        const randomOne = cart[Math.floor(Math.random() * cart.length)];
        alert("This one will be best for you: " + randomOne.title);
        
    }
    
    return (
        <div>
            <div className='mt-5 d-flex justify-content-center align-items-center'>
                <img src={icon} alt="" className='me-2'/>
                <h1>Available Products in <span className='highlighted-text'>MOWAT Store</span></h1>
            </div>
            <div className="msg">
                <MsgModal getOne={getOne}></MsgModal>
            </div>
            <div className="container mt-5 mb-5">
                <div className="products-container mt-3 mb-5">
                    {
                        products.map(product=><Product product={product} addToCart={addToCart} key={product.id}></Product>)
                    }
                </div>
                <div className="cart-container">
                    <h3 className='text-center mt-2 mb-5'>Order Summery</h3>
                    <Cart addedProducts={cart} chooseAgain={chooseAgain} getOne={getOne}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Products;
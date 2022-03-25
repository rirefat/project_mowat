import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    const {img,title,price,rating,details}=props.product;
    return (
        <div className='product-card'>
            <div className="card-img pt-4">
                <img src={img} alt="" />
                <p className='ratings'>Rating: {rating}</p>
            </div>
            <div className="card-details p-3">
                <h4 className='product-title'>{title}</h4>
                <h6 className=' mt-5'>{details.slice(0,40)}<strong className='text-secondary'> ....More Details</strong></h6>
                <h6>Price: ${price}</h6>
            </div>
            <button className='btn btn-outline-primary w-100' onClick={()=>props.addToCart(props.product)}>Add to Cart <FontAwesomeIcon icon={faCartShopping} /></button>
        </div>
    );
};

export default Product;
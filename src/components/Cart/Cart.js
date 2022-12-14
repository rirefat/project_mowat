import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './Cart.css'
import List from '../List/List';

const Cart = (props) => {
    const {addedProducts, chooseAgain,getOne} = props;
    return (
        <div>
            <div className="ordered-list">
                {
                    addedProducts.map(product=><List product={product} key={product.id}></List>)
                }
            </div>
            <div className="btn-area text-center">
                <div className="btn btn-outline-primary m-2" onClick={getOne}>CHOOSE 1 FOR ME <FontAwesomeIcon icon={faArrowRight}/></div>
                <div className="btn btn-outline-danger m-2" onClick={chooseAgain}>CHOOSE AGAIN <FontAwesomeIcon icon={faTrash}/></div>
            </div>
        </div>
    );
};

export default Cart;
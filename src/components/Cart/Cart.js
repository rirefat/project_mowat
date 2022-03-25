import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './Cart.css'
import List from '../List/List';

const Cart = (props) => {
    const {addedProducts} = props;
    return (
        <div>
            <div className="ordered-list">
                {
                    addedProducts.map(product=><List product={product} key={product.id}></List>)
                }
            </div>
            <div className="btn-area text-center">
                <div className="btn btn-outline-success m-2">CHOOSE 1 FOR ME <FontAwesomeIcon icon={faArrowRight}/></div>
                <div className="btn btn-outline-danger m-2" onClick={props.chooseAgain}>CHOOSE AGAIN <FontAwesomeIcon icon={faTrash}/></div>
            </div>
        </div>
    );
};

// const chooseAgain = (data)=>{
//     console.log(data);
//     data.push(2);
//     data = [];
// }
export default Cart;
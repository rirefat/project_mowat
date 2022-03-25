import React from 'react';
import './List.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const List = (props) => {
    const {title, img} = props.product;
    return (
        <div className='cart-list mb-3'>
            <table>
                <tbody>
                <tr>
                    <td><img src={img} alt="" /></td>
                    <td><span>{title}</span></td>
                    <td className='dlt-item'> <FontAwesomeIcon icon={faTrash}/> </td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default List;
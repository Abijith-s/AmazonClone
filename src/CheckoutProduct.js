import React from 'react'
import './Checkoutproduct.css'
import StarBorderIcon from '@material-ui/icons/StarBorder';

function CheckoutProduct({id,image,title,price,rating}) {
    return (
        <div className="checkoutproduct">
            <img className="checkproduct_image" src={image} />
            <div className="checkoutproduct_info">
                <p className="checkoutproduct_title">{title}</p>
                <p className="checkoutproduct_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutproduct_rating">
                {Array(rating).fill().map((_,i)=>(
                <p><StarBorderIcon/></p>
            ))} 
                </div>
                <button>Remove from Cart</button>
            </div>
        </div>
    )
}

export default CheckoutProduct

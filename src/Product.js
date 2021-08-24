import React from 'react'
import './Product.css'
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { useStateValue } from './StateProvider';
function Product({id,title,image,price,rating}) {
    const[{cart},dispatch] = useStateValue()
    console.log(cart)
    const addToCart = ()=>{
        dispatch({
            type: 'ADD_TO_CART',
            items:{
                id: id,
                title:title,
                image:image,
                price:price,
                rating:rating
            }
        })
    }
    return (
        <div className="product">
        <div className="product_info">
            <p>{title}</p>
            <p className="product_price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="product_rating">
            {Array(rating).fill().map((_,i)=>(
                <p><StarBorderIcon/></p>
            ))} 
            </div>
        </div>
        <img src={image} alt="" />
        <button onClick={addToCart}>Add to cart</button>    
        </div>
    )
}

export default Product
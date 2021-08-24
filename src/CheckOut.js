import React from 'react'
import './Checkout.css'
import { useStateValue } from './StateProvider'
import SubTotal from './SubTotal'
import CheckoutProduct from './CheckoutProduct'

function CheckOut() {
    const[{cart},dispatch] = useStateValue()
    return (
        <div className="checkout">
            <div className="checkout_left">
                <img className="checkout_add" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668.jpg" alt="" />
            
                <div className="checkout_title">
                   <h2>Your Shopping Cart</h2>
                   {cart.map(item =>(
                       <CheckoutProduct
                       id={item.id}
                       title={item.title}
                       image={item.image}
                       price={item.price}
                       rate={item.rate}
                       />
                       
                   ))}

                </div>
            </div>
            <div className="chekout_right">
                <SubTotal/>
            </div>
        </div>
    )
}

export default CheckOut

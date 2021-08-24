import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useStateValue } from './StateProvider';
function Header() {
    const[{cart},dispatch] = useStateValue()
    
    return (
        <div className="header">
            <Link to="/">
            <img  className="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
            </Link>
            <div className="header_search">
                <input className="header_search_input" type="text" />
                <SearchIcon className="header_searchicon"/>
            </div>
            <div className="header_nav">
                <div className="header_option">
                    <span className="header_option_one">
                        Hello Guest
                    </span>
                    <span className="header_option_two">
                        Sign In
                    </span>
                </div>
                <div className="header_option">
                <span className="header_option_one">
                Returns
            </span>
            <span className="header_option_two">
                Orders
            </span>
                </div>
                <div className="header_option">
                <span className="header_option_one">
                Your
            </span>
            <span className="header_option_two">
                Prime
            </span>
                </div>
                <div className="header_optioncart">
                <Link to="/checkout">
                   <div className="header_optioncart">
                    <ShoppingCartIcon />
                   <span className="header_option_two header_cartcount" >{cart?.length}</span>
                   </div>
                </Link>
                </div>
            </div>
        </div>
    )
}

export default Header

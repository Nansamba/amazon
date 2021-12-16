import React from 'react';
import './Header.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const Header = () => {
    return <div className ="main">
        <img className ="logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" ></img>
        <div className ='location' >
        <h5 >
            makerere kikoni
           
        </h5>
        <h5> kampala uganda </h5>
        </div>
        
        <div class='search_bar'>
            <input type='text' placeholder = 'search for products'></input>
        </div>
        <div className = 'options'>
            <div className = 'login_details'>
                <small>log in</small>
                <small>sign up</small>
            </div>
            <div className ='cart_details'>
                <ShoppingCartIcon className='basket'></ShoppingCartIcon>

            </div>
        </div>

    </div>;
}



export default Header;
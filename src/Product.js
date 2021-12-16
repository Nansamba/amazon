import React from 'react';
import './Product.css';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

const product = () => {
    return <div className = 'product' >
            <div className = 'product_image'>
            <img src ='chicken.png'></img>

            </div>
            <div className = 'content_section'>
                <h4> ekikoko </h4>
                <h5> ugx 25000 shs</h5>
                <p>ffe twajja kulema era tetulina gyetulaga ebyo oli ku bibyo baby olimba, nekirala tolina kyogamba era gwe amanyi</p>
                
            </div>
            <div className = 'button_section'>
               
                <FavoriteBorderIcon className='icon_button'/>
            <button>Add To Cart</button>
           
            </div>
    </div>;
}


export default product;
import React from 'react';
import './CheckoutProduct.css';
import { Title } from '@mui/icons-material';

function checkoutProduct ()
{
    return (

        <div className="checkoutProduct">
            <img src="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg" alt="" className="checkoutProduct__image" />


            <div className="product__info">
                <p className="checkoutProduct__title">{Title}

                </p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>49</strong>

                </p>
                <div className="checkoutProduct__rating">
                  {/* {Array(rating) */}
                  {/* .fill() */}
                   {/* .map((_, i) => (  */}
                   {/* <p>⭐</p> */}
                  {/* ))} */}
                </div>
                <button> Remove from Basket</button>
            </div>
              </div>

)
}

export default checkoutProduct
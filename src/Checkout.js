import React from 'react';
import './Checkout.css';
import './CheckoutProduct';
import CheckoutProduct from './CheckoutProduct';


function Checkout ()
{
    return (
        <div className='checkout'>
            <div className="checkout__left">
                <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" className='checkout__ad'
                />
                <div>
                    <h2 className="checkout__title">
                        Your shopping Basket
                    </h2>
                    {CheckoutProduct}

                </div>
            </div>

            <div className="checkout__right"></div>
    </div>
)
}

export default Checkout
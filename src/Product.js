import React from 'react';
import './Product.css';

function Product ()
{
    return (
        <div>
            <div className="product">
                <div className="product__info">
                    <p>Backpack travel-bag Dark-colored, with brown leather</p>

                    <p className="product__price">
                        <small>$</small>
                        <strong>30</strong>
                    </p>
                    <div className="product__rating"> ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ </div>
                </div>


                <img src="https://cdn.pixabay.com/photo/2016/11/19/14/56/backpack-1839705_1280.jpg" alt="Product-image" />

                <button> Add to Basket </button>
            </div>

        </div>
    )
}

export default Product
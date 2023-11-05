import React from 'react';
import './Product.css';

function Product ()
{
    return (
        <div>
            <div className="product">
                <div className="product__info">
                    <p>Title</p>
                    <p className="product__price">$30
                    </p>
                    <div className="product__rating">⭐️⭐️⭐️</div>
                </div>


                <img src="https://cdn.pixabay.com/photo/2016/11/19/14/56/backpack-1839705_1280.jpg" alt="Productimage" />

                <button> Add to Basket </button>
            </div>

        </div>
    )
}

export default Product
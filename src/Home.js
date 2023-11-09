import React from 'react';
import './Home.css';
import Product from './Product';


function Home ( )
{
    return (
        <div className='home'>
            <div className="home__container">

                <img src="https://cdn.pixabay.com/photo/2016/11/22/21/57/apparel-1850804_1280.jpg" alt="" className="home__image" />

            <div className="home__row">
                    <Product
                    title = '' />
                    <Product/>
            </div>
            <div className="home__row">
                <Product/>
                <Product/>
                <Product/>
            </div>
            <div className="home__row">
                    <Product />



            </div>
           </div>
        </div>
    )
}

export default Home;
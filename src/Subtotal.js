import React from 'react';
import './Subtotal.css';
import  CurrencyFormat from 'react-currency-format';

function Subtotal ()
{
    return (
        <div className = 'Subtotal'>

            <CurrencyFormat
                renderText = { ( value ) => (
                    <>
                        <p>
                            subtotal(0 items): <strong>$0</strong>
                        </p>
                        <small className='subtotal__gift'>
                        <input type ='checkbox'/> This order contains a gift
                       </small>
                       </>
                ) }
                decimalScale = { 2};
                 value { 0};
            displayType={ 'text' }
            thousandSeperator = { true }

              />

        </div>



    )
}

export default Subtotal
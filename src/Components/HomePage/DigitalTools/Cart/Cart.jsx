import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';

const Cart = ({ selectedTools, setSelectedTools }) => {
    return (
        <div className='border-2 border-gray-300 rounded-xl p-10 space-y-2'>
            <h2 className='font-bold text-2xl text-[#101727]'>Your Cart</h2>

            <div>
                {selectedTools.length == 0 ?
                    <div className='text-gray-400 text-center'>
                        <FiShoppingCart className='text-[80px] block mx-auto'></FiShoppingCart>
                        <h2>Your Cart is Empty</h2>
                    </div>
                    : 
                    <div>
                        <h2>{selectedTools.length}</h2>
                    </div>
                }
            </div>
        </div>

    );
};

export default Cart;
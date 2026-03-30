import React from 'react';
import { MdShoppingCart } from 'react-icons/md';

const Cart = ({ selectedTools, setSelectedTools }) => {
    return (
        <div className='border-2 border-gray-400 rounded-xl p-10'>
            <h2 className='font-bold text-2xl text-[#101727]'>Your Cart</h2>

            <div>
                {selectedTools.length == 0 ?
                    <div>
                        <MdShoppingCart className='text-[200px]'></MdShoppingCart>
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
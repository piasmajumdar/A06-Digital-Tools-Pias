import React from 'react';

const CartItem = ({product, handleDelete}) => {
    return (
        <div className='flex-row sm:flex justify-between items-center bg-[#F9FAFC] p-3 rounded-2xl'>
            <div className='flex gap-2 items-center'>
                <div className='h-15 w-15 border border-gray-300 rounded-full flex justify-center items-center'>
                    <img className='h-8 w-8' src={product.icon} alt={product.name} />
                </div>
                <div>
                    <h2 className='text-[#101727] font-semibold text-xl'>{product.name}</h2>
                    <h4 className='font-medium text-[#627382]'>${product.price}</h4>
                </div>
            </div>
            <button
                onClick={() => handleDelete(product)}
                className='text-[#FF3980] btn btn-ghost rounded-full'>
                Remove
            </button>
        </div>
    );
};

export default CartItem;
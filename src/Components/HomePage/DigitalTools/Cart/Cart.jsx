import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { toast } from 'react-toastify';

const Cart = ({ selectedTools, setSelectedTools }) => {

    const handleDelete = (product) => {
        const filteredSelectedTools = selectedTools.filter(selectedTool => selectedTool.id != product.id);
        setSelectedTools(filteredSelectedTools);
        toast.success(`${product.name} Deleted Successfully`)
    }

    return (
        <div className='border-2 border-gray-300 rounded-xl p-6 md:p-8 lg:p-10 space-y-2'>
            <h2 className='font-bold text-2xl text-[#101727]'>Your Cart</h2>

            <div>
                {selectedTools.length == 0 ?
                    <div className='text-gray-400 text-center'>
                        <FiShoppingCart className='text-[80px] block mx-auto'></FiShoppingCart>
                        <h2>Your Cart is Empty</h2>
                    </div>
                    :
                    <div className='space-y-4'>
                        {selectedTools.map((product) => {
                            return <div key={product.id} className='flex-row sm:flex justify-between items-center bg-[#F9FAFC] p-3 rounded-2xl'>
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
                                    onClick={()=>handleDelete(product)}
                                    className='text-[#FF3980] btn btn-ghost rounded-full'>
                                    Remove
                                </button>
                            </div>
                        })}
                    </div>
                }
            </div>
        </div>

    );
};

export default Cart;
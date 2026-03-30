import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { Bounce, toast } from 'react-toastify';
import CartItem from './CartItem/CartItem';

const Cart = ({ selectedTools, setSelectedTools }) => {

    const handleDelete = (product) => {
        const filteredSelectedTools = selectedTools.filter(selectedTool => selectedTool.id != product.id);
        setSelectedTools(filteredSelectedTools);
        toast.error(`${product.name} Deleted Successfully`)
    }

    const handleCheckOut = () => {

        if (selectedTools.length < 1) {
            toast.error("Your Cart is Empty. Please Select Product")
            return;
        }

        setSelectedTools([]);
        toast.success('Checkout Successful', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
        })
    }

    return (
        <div className='border-2 border-gray-300 rounded-xl p-6 md:p-8 lg:p-10 space-y-6'>
            <h2 className='font-bold text-2xl text-[#101727]'>Your Cart</h2>

            <div>
                {selectedTools.length == 0 ?
                    <div className='text-gray-400 text-center'>
                        <FiShoppingCart className='text-[80px] block mx-auto'></FiShoppingCart>
                        <h2>Your Cart is Empty</h2>
                    </div>
                    :
                    <div className='space-y-6'>
                        <div className='space-y-4'>
                            {selectedTools.map((product) => <CartItem key={product.id} product={product} handleDelete={handleDelete}></CartItem>)}
                        </div>


                        <div className='flex justify-between items-center'>
                            <p className='text-[#627382]'>Total</p>
                            <h3 className='font-bold text-2xl text-[#101727]'>${selectedTools.reduce((acc, item) => acc + item.price, 0)}</h3>
                        </div>

                        <button
                            onClick={handleCheckOut}
                            className='btn w-full rounded-full text-white font-medium bg-linear-to-r from-[#4F39F6] to-[#9514FA] hover:scale-105'>
                            Proceed to Checkout
                        </button>

                    </div>
                }
            </div>




        </div>

    );
};

export default Cart;
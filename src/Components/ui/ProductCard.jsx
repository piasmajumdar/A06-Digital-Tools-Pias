import React, { useState } from 'react';
import { IoCheckmark } from 'react-icons/io5';
import { toast } from 'react-toastify';

const productCard = ({ product, selectedTools, setSelectedTools }) => {

    const [purchased, setPurchased] = useState(false);

    const handleBuyNow= (product)=>{
        const findDuplicate = selectedTools.find(p=> p.id === product.id);
        if(findDuplicate){
            toast.error("Already added in Cart")
            return;
        }

        setPurchased(true);
        setSelectedTools([...selectedTools, product]);
        toast.success("Successfully added to cart")
    }

    // console.log(selectedTools);

    // console.log(product)
    // {
    //     "id": 1,
    //     "name": "AI Writing Pro",
    //     "description": "Generate high-quality content, blogs, and marketing copy in seconds with advanced AI.",
    //     "price": 29,
    //     "period": "monthly",
    //     "tag": "Best Seller",
    //     "tagType": "best-seller",
    //     "features": [
    //       "Unlimited AI generations",
    //       "50+ writing templates",
    //       "Grammar checker"
    //     ],
    //     "icon": "https://i.ibb.co/rGskzQZK/writing-2327400-1.png"
    //   },


    return (
        <div className="card w-96 bg-base-100 shadow-sm mx-auto hover:shadow-purple-800 hover:scale-102">
            <div className="card-body">
                <div className='flex justify-end'>
                    <span className={`badge badge-soft badge-md rounded-full text-sm py-4 px-5 ${product.tagType === "best-seller" ? "badge-warning" : product.tagType === "new" ? "badge-success" : "badge-primary"}`}>{product.tag}</span>
                </div>
                <div className='h-15 w-15 border border-gray-300 rounded-full flex justify-center items-center'>
                    <img className='h-8 w-8' src={product.icon} alt="" />
                </div>
                <div className="space-y-2">
                    <h2 className="text-2xl text-[#101727] font-bold">{product.name}</h2>
                    <p className="text-[#627382]">{product.description}</p>
                    <h3 className="text-xl"><span className='font-bold text-2xl text-[#101727]'>${product.price}</span><span className='text-[#627382]'>/{product.period}</span></h3>
                </div>
                <ul className="mt-6 flex flex-col gap-2">
                    {product.features.map((feature, ind) => {
                        return (
                            <li key={ind}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span className='text-[#627382]'>{feature}</span>
                            </li>
                        )
                    })}
                </ul>
                <div className="mt-6">
                    {purchased === false ?
                        <button
                            onClick={() => handleBuyNow(product)}
                            className='btn w-full rounded-full text-white font-medium bg-linear-to-r from-[#4F39F6] to-[#9514FA] hover:scale-105'>
                            Buy Now
                        </button>
                        :
                        <button
                            className='btn bg-green-600 w-full rounded-full  text-white font-medium hover:scale-105'>
                            <IoCheckmark className='scale-150'/>Added to Cart!
                        </button>
                    }
                </div>
            </div>
        </div>
    );
};

export default productCard;
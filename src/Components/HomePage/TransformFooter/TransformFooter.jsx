import React from 'react';

const TransformFooter = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-30'>
            <div className='max-w-3/4 mx-auto text-white text-center space-y-10'>
                <div className='space-y-4'>
                    <h2 className='text-4xl font-extrabold'>Ready to Transform Your Workflow?</h2>
                    <p className='text-white/90 leading-6'>Join thousands of professionals who are already using Digitools to work smarter. <br /> Start your free trial today.</p>
                </div>

                <div className='space-y-4'>
                    <div className='flex justify-center items-center gap-4'>
                        <button className='btn rounded-full font-semibold hover:scale-105'><span className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-transparent bg-clip-text'>Explore Products</span></button>
                        <button className='btn btn-outline rounded-full font-semibold hover:scale-105'>View Pricing</button>
                    </div>
                    <p className='text-white/80'>14-day free trial • No credit card required • Cancel anytime</p>
                </div>


            </div>

        </div>
    );
};

export default TransformFooter;
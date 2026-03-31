import React from 'react';
import userImg from "../../../assets/user.png"
import rocketImg from "../../../assets/rocket.png"
import packageImg from "../../../assets/package.png"

const Steps = () => {
    return (
        <div className='bg-[#F9FAFC] py-30'>
            <div className='max-w-3/4 mx-auto space-y-10'>
                <div className='text-center space-y-4'>
                    <h1 className='font-bold text-5xl text-[#101727]'>Get Started in 3 Steps</h1>
                    <h4 className='text-[#627382]'>Start using premium digital tools in minutes, not hours.</h4>
                </div>


                {/* Steps 3 Cards */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    <div className='bg-white rounded-2xl border-2 border-[#F1F1F1] relative shadow-sm hover:shadow-purple-800'>
                        <div className='badge text-white h-10 w-10 rounded-full absolute top-2 right-2 bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>1</div>
                        <div className='flex flex-col justify-center items-center gap-2 text-center my-20 mx-6'>
                            <div className='h-25 w-25 rounded-full bg-purple-200 flex justify-center items-center'>
                                <img src={userImg} alt="" />
                            </div>
                            <h2 className='text-[#001931] font-bold text-2xl'>Create Account</h2>
                            <p className='text-[#627382]'>Sign up for free in seconds. No credit card required to get started.</p>
                        </div>
                    </div>
                    <div className='bg-white rounded-2xl border-2 border-[#F1F1F1] relative shadow-sm hover:shadow-purple-800'>
                        <div className='badge text-white h-10 w-10 rounded-full absolute top-2 right-2 bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>2</div>
                        <div className='flex flex-col justify-center items-center gap-2 text-center my-20 mx-6'>
                            <div className='h-25 w-25 rounded-full bg-purple-200 flex justify-center items-center'>
                                <img src={packageImg} alt="" />
                            </div>
                            <h2 className='text-[#001931] font-bold text-2xl'>Choose Products</h2>
                            <p className='text-[#627382]'>Browse our catalog and select the tools that fit your needs.</p>
                        </div>
                    </div>
                    <div className='bg-white rounded-2xl border-2 border-[#F1F1F1] relative shadow-sm hover:shadow-purple-800'>
                        <div className='badge text-white h-10 w-10 rounded-full absolute top-2 right-2 bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>3</div>
                        <div className='flex flex-col justify-center items-center gap-2 text-center my-20 mx-6'>
                            <div className='h-25 w-25 rounded-full bg-purple-200 flex justify-center items-center'>
                                <img src={rocketImg} alt="" />
                            </div>
                            <h2 className='text-[#001931] font-bold text-2xl'>Start Creating</h2>
                            <p className='text-[#627382]'>Download and start using your premium tools immediately.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Steps;
import React from 'react';
import BannerImg from "../../../assets/banner.png"
import BadgeCircle from "../../../assets/badge_circle.png"


const Banner = () => {
    return (
        <div>
            <div className='max-w-300 mx-auto'>
                <div className="py-20 min-h-screen">
                    <div className="flex items-center flex-col gap-10 md:flex-row-reverse justify-between">
                        {/* Banner Right */}
                        <div>
                            <img
                                src={BannerImg}
                                className="max-w-md w-full rounded-lg shadow-2xl"
                            />
                        </div>
                        {/* Banner left */}
                        <div className='max-w-150 space-y-4'>
                            <div className="badge badge-soft badge-primary py-4 px-4 rounded-full"><img src={BadgeCircle} alt="" /><p className='font-medium'>New: AI-Powered Tools Available</p></div>
                            <h1 className="text-4xl text-[#101727]/90 md:text-4xl lg:text-6xl font-bold">Supercharge Your Digital Workflows</h1>
                            <p className="pb-6 text-[#627382]">
                                Access premium AI tools, design assets, templates, and productivity
                                software—all in one place. Start creating faster today.
                                Explore Products
                            </p>
                            <div className='flex gap-2 items-center'>
                                <button className='btn rounded-full text-white font-medium bg-linear-to-r from-[#4F39F6] to-[#9514FA] hidden md:inline hover:-translate-y-1 hover:shadow-2xl hover:scale-105'>Explore Products</button>
                                <button className='btn btn-primary rounded-full font-medium bg-clip-text text-transparent bg-linear-to-r from-[#4F39F6] to-[#9514FA] hidden md:inline hover:-translate-y-1 hover:shadow-2xl hover:scale-105'>Watch Demo</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
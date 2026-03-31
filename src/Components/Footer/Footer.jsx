import React from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className='bg-[#101727] pt-30'>
            <div className='max-w-3/4 mx-auto space-y-20'>

                {/* Social Part */}
                <div className='flex flex-wrap md:grid grid-cols-9 gap-10'>

                    <div className='space-y-4 col-span-2'>
                        <h2 className='text-white text-3xl'>DigiTools</h2>
                        <p className='text-white/80'>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
                    </div>

                    <div className='flex flex-wrap md:grid grid-cols-3 col-span-5 gap-10'>
                        <div>
                            <h3 className='font-medium text-xl text-white mb-4'>Product</h3>
                            <ul className='space-y-4 text-white/80'>
                                <li>Features</li>
                                <li>Pricing</li>
                                <li>Templates</li>
                                <li>Integrations</li>
                            </ul>

                        </div>
                        <div>
                            <h3 className='font-medium text-xl text-white mb-4'>Company</h3>
                            <ul className='space-y-4 text-white/80'>
                                <li>About</li>
                                <li>Blog</li>
                                <li>Careers</li>
                                <li>Press</li>
                            </ul>

                        </div>
                        <div>
                            <h3 className='font-medium text-xl text-white mb-4'>Resources</h3>
                            <ul className='space-y-4 text-white/80'>
                                <li>Documentation</li>
                                <li>Help Center</li>
                                <li>Community</li>
                                <li>Contact</li>
                            </ul>
                        </div>



                    </div>

                    <div className='col-span-2'>
                        <div>
                            <h3 className='font-medium text-xl text-white mb-4'>Social Links</h3>

                            <ul className='flex gap-2 text-xl'>
                                <a href="">
                                    <div className='h-10 w-10 flex justify-center items-center rounded-full bg-white'>
                                        <AiFillInstagram></AiFillInstagram>
                                    </div>
                                </a>
                                <a href="">
                                    <div className='h-10 w-10 flex justify-center items-center rounded-full bg-white'>
                                        <FaFacebookSquare></FaFacebookSquare>
                                    </div>
                                </a>
                                <a href="">
                                    <div className='h-10 w-10 flex justify-center items-center rounded-full bg-white'>
                                        <FaXTwitter></FaXTwitter>
                                    </div>
                                </a>
                            </ul>

                        </div>

                    </div>
                </div>

                {/* Copyright Part */}
                <div className='flex flex-col md:flex-row gap-4 justify-between py-8 border-t-2 border-t-gray-400 text-white/50'>
                    <div>
                        <p>© 2026 Digitools. All rights reserved.</p>
                    </div>
                    <div className='flex gap-2'>
                        <a href="">Privacy Policy</a>
                        <a href="">Terms of Service</a>
                        <a href="">Cookies</a>
                    </div>

                </div>


            </div>
        </div>
    );
};

export default Footer;
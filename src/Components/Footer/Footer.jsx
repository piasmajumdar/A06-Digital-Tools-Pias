import React from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className='bg-[#101727] pt-30'>
            <div className='max-w-3/4 mx-auto'>
                <div className='grid grid-cols-9 gap-10'>

                    <div className='space-y-4 col-span-2'>
                        <h2 className='text-white text-3xl'>DigiTools</h2>
                        <p className='text-white/80'>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
                    </div>

                    <div className='grid grid-cols-3 col-span-5 gap-10'>
                        <div>
                            <h3 className='font-medium text-xl text-white mb-4'>Product</h3>
                            <ul className='space-y-4 text-white/80'>
                                <li>Integrations</li>
                                <li>Templates</li>
                                <li>Pricing</li>
                                <li>Features</li>
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
            </div>
        </div>
    );
};

export default Footer;
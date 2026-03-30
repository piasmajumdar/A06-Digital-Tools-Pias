import React from 'react';

const Navbar = ({ selectedTools }) => {
    return (
        <div className='border-b-2 border-b-gray-200'>
            <div className="navbar bg-base-100 max-w-300 mx-auto flex justify-between">
                {/* Left */}

                <div className="flex gap-1">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li className='hover:scale-105 cursor-pointer'><a href="">Products</a></li>
                            <li className='hover:scale-105 cursor-pointer'><a href="">Features</a></li>
                            <li className='hover:scale-105 cursor-pointer'><a href="">Pricing</a></li>
                            <li className='hover:scale-105 cursor-pointer'><a href="">Testimonials</a></li>
                            <li className='hover:scale-105 cursor-pointer'><a href="">FAQ</a></li>
                            <li className='hover:scale-105 cursor-pointer'><a href="">Login</a></li>
                        </ul>
                    </div>

                    <a className="btn btn-ghost text-2xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-transparent bg-clip-text">DigiTools</a>
                </div>


                {/* Middle */}
                <div>
                    <ul className='hidden lg:flex justify-between gap-8 font-semibold text-neutral/80'>
                        <li className='hover:scale-105 cursor-pointer'><a href="">Products</a></li>
                        <li className='hover:scale-105 cursor-pointer'><a href="">Features</a></li>
                        <li className='hover:scale-105 cursor-pointer'><a href="">Pricing</a></li>
                        <li className='hover:scale-105 cursor-pointer'><a href="">Testimonials</a></li>
                        <li className='hover:scale-105 cursor-pointer'><a href="">FAQ</a></li>
                    </ul>
                </div>

                {/* Right */}
                <div className="flex space-x-4">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
                                
                                {selectedTools.length > 0 ?
                                    <span className="badge badge-sm indicator-item h-5 w-5 bg-red-600 text-white rounded-full">{selectedTools.length}</span>
                                    : <span></span>
                                }
                            </div>
                        </div>
                        <div
                            tabIndex={0}
                            className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow">
                            <div className="card-body">
                                <span className="text-lg font-bold">{selectedTools.length} Items</span>
                                <span className="text-info">Subtotal: ${selectedTools.reduce((acc, item) => acc+item.price, 0)}</span>
                                <div className="card-actions">
                                    <button className="btn btn-primary btn-block">View cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className='hover:text-blue-900 font-semibold cursor-pointer hidden md:inline hover:scale-110'>Login</button>
                    <button className='btn rounded-full text-white font-medium bg-linear-to-r from-[#4F39F6] to-[#9514FA] hidden md:inline hover:scale-105'>Get Started</button>
                </div>
            </div>
        </div >
    );
};

export default Navbar;
import React from 'react';

const PricingSection = () => {
    return (
        <div className='max-w-3/4 mx-auto py-30 space-y-10'>
            <div className='text-center space-y-4'>
                <h2 className='font-bold text-5xl'>Simple, Transparent Pricing</h2>
                <p className='text-[#627382]'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>
            {/* Pricing Card */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                <div className="card bg-[#F9FAFC] shadow-lg border-2 border-[#F2F2F2] rounded-2xl hover:shadow-purple-800">
                    <div className="card-body">
                        <div className="">
                            <h2 className="text-2xl text-[#101727] font-bold">Starter</h2>
                            <p className='text-[#627382]'>Perfect for getting started</p>
                        </div>
                        <p className="text-xl text-[#627382]"><span className='font-bold text-4xl text-[#101727]'>$0</span>/Month</p>

                        <ul className="mt-4 grow flex flex-col gap-2 text-[#627382]">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Access to 10 free tools</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Basic templates</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Community support</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>1 project per month</span>
                            </li>

                        </ul>
                        <div className="mt-6">
                            <button className='btn grow w-full rounded-full text-white font-medium bg-linear-to-r from-[#4F39F6] to-[#9514FA] hover:scale-105'>Get Started Free</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-[#F9FAFC] text-white shadow-lg rounded-2xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] hover:shadow-red-800">
                    <div className="card-body">
                        <div className="badge badge-soft bg-[#FEF3C6] badge-warning rounded-full absolute -top-3 left-[50%] -translate-x-1/2 text-[#BB4D00]">Most Popular</div>
                        <div className="">
                            <h2 className="text-2xl ] font-bold">Pro</h2>
                            <p className=''>Best for professionals</p>
                        </div>
                        <h2 className="text-xl "><span className='font-bold text-4xl'>$29</span>/Month</h2>

                        <ul className="mt-4 flex flex-col gap-2">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Access to all premium tools</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Unlimited templates</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Priority support</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Unlimited projects</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Cloud sync</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Advanced analytics</span>
                            </li>

                        </ul>
                        <div className="mt-6">
                            <button className='btn w-full rounded-full font-bold hover:scale-105'><span className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-transparent bg-clip-text'>Start Pro Trial</span></button>
                        </div>
                    </div>
                </div>
                <div className="card bg-[#F9FAFC] shadow-lg border-2 border-[#F2F2F2] rounded-2xl hover:shadow-purple-800">
                    <div className="card-body">
                        <div className="">
                            <h2 className="text-2xl text-[#101727] font-bold">Enterprise</h2>
                            <p className='text-[#627382]'>For teams and businesses</p>
                        </div>
                        <p className="text-xl text-[#627382]"><span className='font-bold text-4xl text-[#101727]'>$99</span>/Month</p>

                        <ul className="mt-4 grow flex flex-col gap-2 text-[#627382]">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Everything in Pro</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Team collaboration</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Custom integrations</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Dedicated support</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>SLA guarantee</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Custom branding</span>
                            </li>

                        </ul>
                        <div className="mt-6">
                            <button className='btn w-full rounded-full text-white font-medium bg-linear-to-r from-[#4F39F6] to-[#9514FA] hover:scale-105'>Contact Sales</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PricingSection;
import React from 'react';

const Stats = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>
            <div className='max-w-3/4 mx-auto py-15 flex flex-wrap gap-4 justify-around text-center'>
                <div className='space-y-1 flex-1'>
                    <h1 className='text-white font-bold text-3xl md:text-6xl'>50K+</h1>
                    <h3 className='text-white/80 font-medium text-2xl'>Active Users</h3>
                </div>
                <div className='space-y-1 flex-1 sm:border-x-2 sm:border-x-gray-500'>
                    <h1 className='text-white font-bold text-3xl md:text-6xl'>200+</h1>
                    <h3 className='text-white/80 font-medium text-2xl'>Premium Tools</h3>
                </div>
                <div className='space-y-1 flex-1'>
                    <h1 className='text-white font-bold text-3xl md:text-6xl'>4.9</h1>
                    <h3 className='text-white/80 font-medium text-2xl'>Rating</h3>
                </div>
                
            </div>

        </div>
    );
};

export default Stats;
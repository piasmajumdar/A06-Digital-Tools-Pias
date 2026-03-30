import React, { use, useState } from 'react';
import Tab from './Tab/Tab';
import AvailableTools from './AvailableTools/AvailableTools';
import Cart from './Cart/Cart';

const DigitalTools = ({ promiseProduct, selectedTools, setSelectedTools }) => {

    const products = use(promiseProduct)
    // console.log(products)

    // console.log(selectedTools)

    const [tab, setTab] = useState('product')

    return (
        <div className='py-30 container max-w-300 mx-auto'>
            {/* Premium Tools Header */}
            <div className='max-w-130 mx-auto space-y-4 text-center'>
                <h2 className='font-bold text-5xl'>Premium Digital Tools</h2>
                <p className='text-[#627382]'>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>

                {/* Tabs- Product + Cart */}
                <Tab tab={tab} setTab={setTab}></Tab>
            </div>

            {tab === "product" ?
                <AvailableTools
                    products={products}
                    selectedTools={selectedTools}
                    setSelectedTools={setSelectedTools}>
                </AvailableTools>
                :
                <Cart></Cart>
            }
        </div>
    );
};

export default DigitalTools;
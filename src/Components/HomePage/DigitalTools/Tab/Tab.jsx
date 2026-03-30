import React from 'react';

const Tab = ({tab, setTab, selectedTools}) => {
    console.log(selectedTools);
    return (
        <div className='flex justify-center'>
            <div className="tabs tabs-box bg-white space-x-2">
                <input
                    type="radio"
                    name="my_tabs_1"
                    className={`tab rounded-full  ${tab === "product" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" : ""} `}
                    aria-label="Products"
                    onClick={()=>setTab("product")}
                    defaultChecked
                />
                <input
                    type="radio"
                    name="my_tabs_1"
                    className={`tab rounded-full  ${tab === "cart" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" : ""} `}
                    aria-label={`Cart(${selectedTools.length})`}
                    onClick={()=>setTab("cart")}
                />
            </div>
        </div>
    );
};

export default Tab;
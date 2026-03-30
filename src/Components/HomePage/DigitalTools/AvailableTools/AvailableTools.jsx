import React from 'react';
import ProductCard from './../../../ui/ProductCard';

const AvailableTools = ({ products }) => {

    // console.log(products)

    return (
        <div className='mt-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {products.map(product => <ProductCard key={product.id} product={product}></ProductCard>)}
            </div>
        </div>
    );
};

export default AvailableTools;
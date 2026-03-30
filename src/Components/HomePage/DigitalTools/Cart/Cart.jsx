import React from 'react';

const Cart = ({selectedTools, setSelectedTools}) => {
    return (
        <div>
            <h2>{selectedTools.map(tool=> tool.name)}</h2>
        </div>
    );
};

export default Cart;
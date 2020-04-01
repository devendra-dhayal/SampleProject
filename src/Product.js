import React from 'react';
import './App.css';

class Product extends React.Component {

    render() {
        return (
            <div>
                <ProductView />
            </div>
        );
    }
}


function ProductView() {
    return (
        <div className="Product">
            Hello
        </div>
    );
}

function BestPriceView() {
    return(
        <div className="BestPriceView">

        </div>
    );
}

export default Product;
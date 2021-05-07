import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { AddToCart } from './AddToCartComponent';

class Product extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let filterData = this.props.products.filter(

            (product) => product.description.toLowerCase().indexOf(this.props.filterText.toLowerCase()) !== -1
        )
        const menu = filterData.map((product) => {
            return (
                <div key={product.id} className="col-md-1">
                    <div className="row">
                        <div className="card" style={{'margin':'5%'}}>
                            <img src={"http://localhost:8085/executed/gray.jpg"}  alt="Avatar" style={{"width":"100%","height":"100%"}}/>
                            {product.id}
                        </div>
                    </div>
                </div>
            )
        })
        
        return(
            <div style={{'padding-left':'3%'}} >
                <div className="row">                    
                    {menu}
                </div>
            </div>
        );
    }

}

export default Product;
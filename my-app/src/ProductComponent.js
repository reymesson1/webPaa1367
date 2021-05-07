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
                <div key={product.id} className="col-md-4" style={{'padding-left':'34px'}} >
                    <div className="row">
                        <div className="card" style={{'margin-top':'10%'}}>
                            <div className="row" style={{'height':'150px','width':'450px'}}>
                                <div className="col-md-6">
                                    <img src={"http://localhost:8085/executed/gray.jpg"}  alt="Avatar" style={{"width":"94%","height":"93%","padding-left":"10px","padding-right":"10px"}}/>
                                </div>
                                <div className="col-md-6">
                                    <div className="row">
                                        <h5 >
                                            <i style={{'color':'gold'}} className="fa fa-star" aria-hidden="true"></i>
                                            <i style={{'color':'gold'}} className="fa fa-star" aria-hidden="true"></i>
                                            <i style={{'color':'gold'}} className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                        </h5>
                                    </div>
                                    <div className="row">
                                        <p>{product.description}</p>
                                    </div>
                                    <div className="row">
                                        <p>{'$'}{product.price}</p>
                                    </div>
                                    <div className="row">
                                        <AddToCart
                                            id={product.id}
                                            description={product.description}
                                            price={product.price}
                                            addToCart={this.props.addToCart.bind(this)}
                                        />
                                        {/* <button className="btn btn-primary" name="like" value={'{"id":'+product.id+',"press":""}'} ><i className="fa fa-shopping-cart" aria-hidden="true"></i> {'Add To Cart'}</button>                                     */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
        
        return(
            <div className="row">
                {menu}
            </div>
        );
    }

}

export default Product;
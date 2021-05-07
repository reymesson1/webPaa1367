import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { AddToCart } from './AddToCartComponent';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

class BreadcrumbComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        
        return(
            <div>
                <br/>
                <div className="row">
                    <div className="col-md-1">
                        <h1>
                            <i className="fa fa-bars" style={{'color':'#aaafaf'}} aria-hidden="true"></i>
                        </h1>
                    </div>
                    <div className="col-md-6">
                    <Breadcrumb tag="nav" listTag="div">
                        <BreadcrumbItem tag="a" href="#">Home</BreadcrumbItem>
                        <BreadcrumbItem tag="a" href="#">Browse</BreadcrumbItem>
                    </Breadcrumb>
                    </div>
                    <div className="col-md-5"></div>
                </div>
            </div>
        );
    }

}

export default BreadcrumbComponent;
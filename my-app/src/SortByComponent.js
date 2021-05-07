import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { AddToCart } from './AddToCartComponent';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Button, ButtonGroup } from 'reactstrap';

class SortByComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        
        return(
            <div>
                <div tag="a" href="#">Sort By: </div>
            </div>
        );
    }

}

export default SortByComponent;
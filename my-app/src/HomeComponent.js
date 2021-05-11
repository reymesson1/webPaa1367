import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { AddToCart } from './AddToCartComponent';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Button, ButtonGroup } from 'reactstrap';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

class HomeComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        
        return(
            <div className="row">
                <h1>Home</h1>
            </div>
        )
    }

}

export default HomeComponent;
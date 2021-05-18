import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { AddToCart } from './AddToCartComponent';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Button, ButtonGroup } from 'reactstrap';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

class PaginationComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        
        return(
            <div className="load_more">
                <p onClick={this.props.onClickPagination.bind(this)} >Load more...</p>
            </div>
        );
    }

}

export default PaginationComponent;
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
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <Pagination aria-label="Page navigation example">
                        <PaginationItem>
                            <PaginationLink first href="#" />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink previous href="#" />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">
                            1
                            </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">
                            2
                            </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">
                            3
                            </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">
                            4
                            </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">
                            5
                            </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink next href="#" />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink last href="#" />
                        </PaginationItem>
                    </Pagination>
                </div>
                <div className="col-md-4"></div>
            </div>
        );
    }

}

export default PaginationComponent;
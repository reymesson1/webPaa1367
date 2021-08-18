import React, { Component } from 'react';
import { Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Input, Media, Panel,   Card,
    CardBody,
    CardTitle,
    CardSubtitle } from 'reactstrap';

class CategoryComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchText: ""
        }  
    }

    onChangeField(event){

        this.setState({
            searchText: event.target.value
        })
    }

    render() {
        
        return(
            <div className="container">
                <br/>
                <div className="row">
                    <h1>Category</h1>
                </div>
            </div>
        );
    }

}

export default CategoryComponent; 
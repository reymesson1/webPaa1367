import React, { Component } from 'react';
import { Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Input, Media, Panel,   Card,
    CardBody,
    CardTitle,
    CardSubtitle } from 'reactstrap';

class LoadingModalComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchText: ""
        }  

        
    }
    
    render() {
        
        return(
            <div className="container">
                <h1>Hello world</h1>
            </div>
        );
    }

}

export default LoadingModalComponent; 
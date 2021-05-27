import React, { Component } from 'react';
import { Button, Col, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class CreateProductComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        
        return(
            <div className="container">
                <br/>
                <div className="row">
                    <h1>Create New Product</h1>
                </div>
                <br/>
                <div className="row">
                    <div className="col-md-8">
                    <Form onSubmit={this.props.onCreateProduct.bind(this)} enctype="multipart/form-data" >
                    {/* <Form > */}
                        <FormGroup row>
                            <Label for="description" sm={2}>Description</Label>
                            <Col sm={10}>
                            <Input type="text" name="description" id="description" placeholder="Description" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="price" sm={2}>Price</Label>
                            <Col sm={10}>
                            <Input type="number" name="price" id="price" placeholder="Price" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="company" sm={2}>Company</Label>
                            <Col sm={10}>
                            <Input type="text" name="company" id="company" placeholder="Company" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="style" sm={2}>Style</Label>
                            <Col sm={10}>
                            <Input type="text" name="style" id="style" placeholder="Style" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="style" sm={2}>Image</Label>
                            <Col sm={10}>
                            <Input type="file" name="single-file" id="single-file"  onChange={this.props.onCreateProductUpload.bind(this)} placeholder="Image" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="style" sm={2}>&nbsp;</Label>
                            <Col sm={10}>
                            <Input type="submit" className="btn btn-success" name="image" id="image" placeholder="Image" />
                            </Col>
                        </FormGroup>
                    </Form>
                    </div>
                </div>
            </div>    
        )
    }

}

export default CreateProductComponent;
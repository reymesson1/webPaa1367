import React, { Component } from 'react';
import { Button, Col, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class CreateProductComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        console.log(this.props.styles);

        let showUpload;

        if(this.props.fileUploaded){
            showUpload = <Input type="file" style={{'display':'none'}} name="single-file" id="single-file"  onChange={this.props.onCreateProductUpload.bind(this)} placeholder="Image" />
            showUpload = <label> Image selected </label>

        }else{
            showUpload = <Input type="file" name="single-file" id="single-file"  onChange={this.props.onCreateProductUpload.bind(this)} placeholder="Image" />
        }
        
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
                            <Label for="style" sm={2}>Image</Label>
                            <Col sm={10}>
                                {showUpload}
                            </Col>
                        </FormGroup>
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
                            <Label for="exampleSelect" sm={2}>Company</Label>
                            <Col sm={10}>
                                <Input type="select" name="company" id="company" placeholder="Company" >
                                {this.props.companies.map( 
                                    (data,index) => <option>{data.description}</option>
                                )}

                            </Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="exampleSelect" sm={2}>Style</Label>
                            <Col sm={10}>
                                <Input type="select" name="style" id="style" placeholder="Style" >
                                {this.props.styles.map( 
                                    (data,index) => <option>{data.description}</option>
                                )}
                            </Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="exampleSelect" sm={2}>Category</Label>
                            <Col sm={10}>
                                <Input type="select" name="category" id="category" placeholder="Category" >
                                    <option>{'Bracelet'}</option>
                                    <option>{'Rings'}</option>
                                    <option>{'Necklace'}</option>
                                    <option>{'Pendant'}</option>
                                    <option>{'Crowns'}</option>
                                    <option>{'Gems'}</option>
                            </Input>
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
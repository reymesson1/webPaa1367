import React, { Component } from 'react';
import { Button, Col, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Media, Panel,   Card,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter } from 'reactstrap';

class CreateProductComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            newCompanyModal: false,
            newStyleModal: false,
            newLoadingModal: true
        }
    }


    toggleModal = () => {
        this.setState({
            newCompanyModal: !this.state.newCompanyModal
        })
    }

    toggleModalStyle = () => {
        this.setState({
            newStyleModal: !this.state.newStyleModal
        })
    }

    openNewCompanyModal(){

        this.setState({

            newCompanyModal: true
        })
        // console.log('open modal');
    }

    openNewStyleModal(){

        this.setState({

            newStyleModal: true
        })
        // console.log('open modal');
    }

    render() {

        let showUpload;
        let hiddenBtnCheck;

        if(this.props.fileUploaded){
            showUpload = <Input type="file" style={{'display':'none'}} multiple name="single-file" id="single-file"  onChange={this.props.onCreateProductUpload.bind(this)} placeholder="Image" />
            showUpload = <label> Image selected </label>

        }else{
            showUpload = <Input type="file" multiple name="single-file" id="single-file"  onChange={this.props.onCreateProductUpload.bind(this)} placeholder="Image" />
        }

        if(!this.props.productHiddenBtn){

            hiddenBtnCheck = <Input type="submit" className="btn btn-success" name="image" id="image" placeholder="Image" />
        }else{
            
            hiddenBtnCheck = <Input type="submit" value="Loading..." className="btn btn-success" name="image" id="image" placeholder="Image" disabled />
        }

        
        return(
            <div className="container">
                <Modal isOpen={this.props.productLoadingModal}>
                    <ModalHeader>
                    <p>Message</p>
                    </ModalHeader>
                    <ModalBody>
                        <div className="row">
                            <h5>{this.props.productLoadingModalLabel}</h5>
                        </div>
                    </ModalBody>
                </Modal>
                <Modal isOpen={this.state.newStyleModal} toggle={this.toggleModalStyle}>
                    <ModalHeader>
                    <p>Create a new Style</p>
                    </ModalHeader>
                    <ModalBody>
                        <div className="row">
                                <Form onSubmit={this.props.onCreateStyle.bind(this)}>
                                    <FormGroup row>
                                        <Label for="description" sm={2}>Name</Label>
                                        <Col sm={10}>
                                        <Input type="text" name="description" id="description" placeholder="Name" />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="style" sm={2}>Notes</Label>
                                        <Col sm={10}>
                                        <Input type="textarea" name="notes" id="notes" placeholder="Notes" />
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
                    </ModalBody>
                    <ModalFooter>  
                    <button className="btn btn-white" onClick={this.toggleModalStyle} >Close</button>
                    </ModalFooter>
                </Modal>
                <Modal isOpen={this.state.newCompanyModal} toggle={this.toggleModal}>
                    <ModalHeader>
                    <p>Create a new Company</p>
                    </ModalHeader>
                    <ModalBody>
                        <div className="row">
                                <Form onSubmit={this.props.onCreateCompany.bind(this)}>
                                    <FormGroup row>
                                        <Label for="description" sm={2}>Name</Label>
                                        <Col sm={10}>
                                        <Input type="text" name="description" id="description" placeholder="Name" />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="style" sm={2}>Notes</Label>
                                        <Col sm={10}>
                                        <Input type="textarea" name="notes" id="notes" placeholder="Notes" />
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
                    </ModalBody>
                    <ModalFooter>  
                    <button className="btn btn-white" onClick={this.toggleModal} >Close</button>
                    </ModalFooter>
                </Modal>
                <br/>
                <div className="row">
                    <h1>Create New Product</h1>
                </div>
                <br/>
                <div className="row">
                    <div className="col-md-4">
                        <div className="row">
                            <img src={this.props.file} style={{'width':'350px','height':'350px'}}/>
                        </div>
                        <div style={{'text-align':'center'}}>
                            <h5>{this.props.fileName}</h5>
                        </div>
                    </div>
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
                            <Label for="description" sm={2}>Style Number</Label>
                            <Col sm={10}>
                            <Input type="text" name="description" id="description" placeholder="Style Number" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="exampleSelect" sm={2}>Company</Label>
                            <Col sm={8}>
                                <Input type="select" name="company" id="company" placeholder="Company Name" >
                                {this.props.companies.map( 
                                    (data,index) => <option>{data.description}</option>
                                )}

                            </Input>
                            </Col>
                            <Label for="exampleSelect" sm={2} style={{'font-size':'12px','text-decoration':'underline','color':'blue'}} onClick={this.openNewCompanyModal.bind(this)}>Create Company</Label>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="companystyle" sm={2}>Comp Style #</Label>
                            <Col sm={10}>
                            <Input type="text" name="companystyle" id="companystyle" placeholder="Company Style Number" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="exampleSelect" sm={2}>Category</Label>
                            <Col sm={10}>
                                <Input type="select" name="category" id="category" placeholder="Category" >
                                    <option>{'Bracelet'}</option>
                                    <option>{'RM'}</option>
                                    <option>{'Rings'}</option>
                                    <option>{'Pendant'}</option>
                                    <option>{'Pins'}</option>
                                    <option>{'Necklace'}</option>
                                    <option>{'Earings'}</option>
                                    <option>{'Watches'}</option>
                            </Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="exampleSelect" sm={2}>Style</Label>
                            <Col sm={8}>
                                <Input type="select" name="style" id="style" placeholder="Style" >
                                {this.props.styles.map( 
                                    (data,index) => <option>{data.description}</option>
                                )}
                            </Input>
                            </Col>
                            <Label for="exampleSelect" sm={2} style={{'font-size':'12px','text-decoration':'underline','color':'blue'}} onClick={this.openNewStyleModal.bind(this)}>Create Style</Label>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="price" sm={2}>Price</Label>
                            <Col sm={5}>
                            <Input type="number" name="price" id="price" placeholder="Price" />
                            </Col>
                            <Col sm={5}>
                            <Input type="number" name="priceopt" id="priceopt" placeholder="Price Optional" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="notes" sm={2}>Notes</Label>
                            <Col sm={10}>
                            <Input type="textarea" name="notes" id="notes" placeholder="Notes" />
                            </Col>
                        </FormGroup>
                        <br/>
                        <FormGroup row>
                            <Label for="style" sm={2}>&nbsp;</Label>
                            <Col sm={10}>
                            {/* <Input type="submit" className="btn btn-success" name="image" id="image" placeholder="Image" disabled /> */}
                            {hiddenBtnCheck}
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
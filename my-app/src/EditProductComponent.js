
import React, { Component } from 'react';
import { Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Input, Media, Panel,   Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter, Col, Form, FormGroup, Label, Progress } from 'reactstrap';
import { set } from 'mongoose';

class EditProductComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            newCompanyModal: false,
            newStyleModal: false,
            newLoadingModal: true,
            descriptionValue: "",
            companystyleValue: "",
            priceValue: "",
            priceoptValue: "",
            notesValue: "",
            imagesValue: [],
        }
    }

    componentDidMount(){

        let filteredData = this.props.products.filter(

            (data, index) => data.id.indexOf(this.props.match.params.id) !== -1
        );

        this.setState({
            descriptionValue: filteredData[0].description,
            companystyleValue: filteredData[0].companystyle,
            priceValue: filteredData[0].price,
            priceoptValue: filteredData[0].priceopt,
            notesValue: filteredData[0].notes,
            imagesValue: filteredData[0].images,
        })

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
    onChangeDescription(value){
        // console.log(event.target.description.value);
        this.setState({
            descriptionValue: value
        })
                
    }
    onChangeCompanyValue(value){
        // console.log(event.target.description.value);
        this.setState({
            companystyleValue: value
        })
                
    }
    onChangePriceValue(value){
        // console.log(event.target.description.value);
        this.setState({
            priceValue: value
        })
                
    }
    onChangePriceOptValue(value){
        // console.log(event.target.description.value);
        this.setState({
            priceoptValue: value
        })      
    }
    onChangeNotesValue(value){
        // console.log(event.target.description.value);
        this.setState({
            notesValue: value
        })      
    }
    onChangeImagesValue(value){
        // console.log(event.target.description.value);
        this.setState({
            imagesValue: value
        })      
    }

    imageClick = (data) => {
        console.log(data);
    }       
    
    render() {

        let showUpload;
        let hiddenBtnCheck;
        
        if(this.props.fileUploaded){
            showUpload = <Input type="file" style={{'display':'none'}} multiple name="single-file" id="single-file"  onChange={this.props.onCreateProductUpload.bind(this)} placeholder="Image" />
            showUpload = <div> <Progress value={this.props.productLoadingModalLabel} /> {this.props.productLoadingModalLabel+'%'} </div> 

        }else{
            showUpload = <Input type="file" multiple name="single-file" id="single-file"  onChange={this.props.onCreateProductUpload.bind(this)} placeholder="Image" />
        }

        if(!this.props.productHiddenBtn){

            hiddenBtnCheck = <Input type="submit" className="btn btn-success" name="image" id="image" placeholder="Image" />
        }else{
            
            hiddenBtnCheck = <Input type="submit" value="Loading..." className="btn btn-success" name="image" id="image" placeholder="Image" disabled />
        }


        let filteredData = this.props.products.filter(

            (data, index) => data.id.indexOf(this.props.match.params.id) !== -1
        );
        let filteredDataCompany = this.props.companies.filter(

            (data, index) => data.description.indexOf(filteredData[0].company) !== -1
        );
        let filteredDataStyle = this.props.styles.filter(

            (data, index) => data.description.indexOf(filteredData[0].style) !== -1
        );
        
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

                <br/>
                <div className="row">
                    <div className="col-md-4">
                        <div className="row">
                            <img src={this.props.URLExternal+'/images/'+filteredData[0].image}/>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="col-md-8"></div>
                            <div className="col-md-4">
                                <button className="btn btn-warning" onClick={this.props.defaultImageSelectedFunc.bind(this)}>Default</button>
                            </div>
                        </div>
                        <br/>
                        <div className="row">
                        {filteredData[0].images.map(
                                    (data, index) =>
                                    <div className="col-md-3">
                                        {/* <button className="btn btn-white" onClick={this.imageClick.bind(this,data)}> */}
                                        <div className="row">
                                            <button className="btn btn-white" onClick={this.props.imageClickEdit.bind(this,filteredData[0],data)}>
                                                <img src={this.props.URLExternal+"/images/"+data} height="70px" width="40px" />                                                                                
                                            </button>
                                        </div>
                                        <div className="row">
                                            <button className="btn btn-danger" onClick={this.props.onEditDeletePicture.bind(this, filteredData[0],data)} >Delete</button>
                                        </div>
                                    </div>                                         
                        )}
                        </div>
                    </div>
                    <div className="col-md-8">
                    <br/>
                    <br/>
                    <div className="row">
                    </div>
                    <Form onSubmit={this.props.onEditProduct.bind(this)} enctype="multipart/form-data" >
                        {/* <Form > */}
                            <FormGroup row>
                                <Label for="description" sm={2}>&nbsp;</Label>
                                <Col sm={10}>
                                {showUpload}
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col sm={10}>
                                <Input type="text" style={{'display':'none'}} name="id" id="id" placeholder="ID" value={this.props.match.params.id} disabled />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="description" sm={2}>Style Number</Label>
                                <Col sm={10}>
                                <Input type="text" name="description" id="description" placeholder="Style Number" onChange={e => this.onChangeDescription(e.target.value)} value={this.state.descriptionValue} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="exampleSelect" sm={2}>Company</Label>
                                <Col sm={10}>
                                    <Input type="select" name="company" id="company" placeholder="Company Name" >
                                    {filteredDataCompany.map( 
                                        (data,index) => <option>{data.description}</option>
                                    )}

                                </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="companystyle" sm={2}>Comp Style #</Label>
                                <Col sm={10}>
                                <Input type="text" name="companystyle" id="companystyle" placeholder="Company Style Number" onChange={e => this.onChangeCompanyValue(e.target.value)} value={this.state.companystyleValue} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="exampleSelect" sm={2}>Category</Label>
                                <Col sm={10}>
                                    <Input type="select" name="category" id="category" placeholder="Category" >
                                        <option>{filteredData[0].category}</option>
                                        
                                </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="exampleSelect" sm={2}>Style</Label>
                                <Col sm={10}>
                                    <Input type="select" name="style" id="style" placeholder="Style" >
                                    {filteredDataStyle.map(
                                            (data) => <option>{data.description}</option>
                                    )}
                                </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="price" sm={2}>Price</Label>
                                <Col sm={5}>
                                <Input type="number" name="price" id="price" placeholder="Price" onChange={e => this.onChangePriceValue(e.target.value)} value={this.state.priceValue} />
                                </Col>
                                <Col sm={5}>
                                <Input type="number" name="priceopt" id="priceopt" placeholder="Price Optional" onChange={e => this.onChangePriceOptValue(e.target.value)} value={this.state.priceoptValue} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="notes" sm={2}>Notes</Label>
                                <Col sm={10}>
                                <Input type="textarea" name="notes" id="notes" placeholder="Notes" onChange={e => this.onChangeNotesValue(e.target.value)} value={this.state.notesValue} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col sm={10}>
                                <Input type="textarea" style={{'display':'none'}} name="images" id="images" placeholder="Images" onChange={e => this.onChangeImagesValue(e.target.value)} value={this.state.imagesValue} disabled />
                                </Col>
                            </FormGroup>
                            <br/>
                            <FormGroup row>
                                <Label for="style" sm={2}>&nbsp;</Label>
                                <Col sm={10}>
                                {/* <Input type="submit" className="btn btn-success" name="image" id="image" placeholder="Image" /> */}
                                {hiddenBtnCheck}
                                </Col>
                            </FormGroup>
                        </Form>
                    
                    </div>
                </div>
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
                <br/>
                <br/>
            </div>
        );
    }

}

export default EditProductComponent; 
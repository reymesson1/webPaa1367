import React, { Component } from 'react';
import { Button, Col, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Media, Panel,   Card,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter, Progress, FormFeedback } from 'reactstrap';
import { Link } from 'react-router-dom';


class CreateProductComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            newCompanyModal: false,
            newStyleModal: false,
            newLoadingModal: true,
            productHiddenBtn: true,
            descriptionValue: "",
            companystyleValue: "",
            priceValue: "",
            priceoptValue: "",
            notesValue: "",
            imagesValue: [],
            products: [],
            defaultImageSelected: null,
            isModalOpen: false,
            firstname: '',
            lastname: '',
            email: '',
            description: '',
            price: '',
            company: '',
            style: '',  
            companystyle: '',  
            category: '',  
            priceopt: '',  
            notes: '', 
            touched:{
                description: false,
                price: false,
                company: false,
                style: false,  
                companystyle: false,  
                category: false,  
                priceopt: false,  
                notes: false,         
            }
        }

        this.handleBlur = this.handleBlur.bind(this);

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
    }

    onChangeDescription(value){

        if(value.length>0){

            this.setState({
                productHiddenBtn: false
            })
        }else{

            this.setState({
                productHiddenBtn: true
            })
        }

    }

    onGotoCreateProduct(event){
        
        window.location.reload();
    }

    onClickBack(){
        window.history.back();
    }

    handleBlur = (field) => (evt) =>{

        this.setState({
            touched: { ...this.state.touched, [field]: true }
        })

    }

    validate(description, companystyle, price){

        const errors = {
            description: '',
            companystyle: '',
            price: ''
        }

        if(this.state.touched.description && description.length < 3){
            errors.description = "Style Number should be >= 3 characters"
        }
        if(this.state.touched.companystyle && companystyle.length < 3){
            errors.companystyle = "Company Style Style should be >= 3 characters"
        }
        if(this.state.touched.price && price.length < 3){
            errors.price = "Price should be >= 1 characters"
        }

        return errors;
        
    }

    onFirstNameChange(value){
        this.setState({
            firstname: value
        })
    }
    onLastNameChange(value){
        this.setState({
            lastname: value
        })
    }
    onEmailChange(value){
        this.setState({
            email: value
        })
    }

    onDescriptionChange(value){
        this.setState({
            description: value
        })
    }
    onCompanyStyleChange(value){
        this.setState({
            companystyle: value
        })
    }
    onPriceChange(value){
        this.setState({
            price: value
        })
    }

    render() {

        const errors = this.validate(this.state.description, this.state.companystyle, this.state.price);
        // const errors = this.validate(this.state.firstname, this.state.lastname, this.state.email);

        let submitButton
        
        if((this.state.description === '') || (this.state.companystyle === '') || (this.state.price === '') ){

            submitButton = <Input type="submit" className="btn btn-success" name="image" id="image" placeholder="Image" disabled />
        }else{
            
            submitButton = <Input type="submit" className="btn btn-success" name="image" id="image" placeholder="Image" />
        }

        let showUpload;
        let hiddenBtnCheck;

        if(this.props.fileUploaded){
            showUpload = <Input type="file" style={{'display':'none'}} multiple name="single-file" id="single-file"  onChange={this.props.onCreateProductUpload.bind(this)} placeholder="Image" />
            showUpload = <div> <Progress value={this.props.productLoadingModalLabelPcnt} /> {this.props.productLoadingModalLabel} </div> 

        }else{
            showUpload = <Input type="file" multiple name="single-file" id="single-file"  onChange={this.props.onCreateProductUpload.bind(this)} placeholder="Image" />
        }

        if(!this.state.productHiddenBtn){

            hiddenBtnCheck = <Input type="submit" className="btn btn-success" name="image" id="image" placeholder="Image" />
        }else{
            
            hiddenBtnCheck = <Input type="submit" className="btn btn-success" name="image" id="image" placeholder="Image" disabled />
        }

        
        return(
            <div className="container">
                <Modal isOpen={this.props.productLoadingModal}>
                    <ModalHeader>
                    <p>Message</p>
                    </ModalHeader>
                    <ModalBody>
                        <div className="row">
                            <h5>&nbsp;&nbsp;&nbsp;{this.props.productLoadingModalLabel}</h5>
                        </div>
                    </ModalBody>
                    <ModalFooter>  
                        <div className="col-md-0">
                            <Link className="btn btn-success" to={'/product'}>Go Back</Link>
                        </div>
                        <div className="col-md-offset'2">
                            <button className="btn btn-success" onClick={this.onGotoCreateProduct.bind(this)}>Create Product</button>
                        </div>
                    </ModalFooter>                    
                </Modal>
                <Modal isOpen={this.props.productLoadingModalMessageError}>
                    <ModalHeader>
                    <p>Message</p>
                    </ModalHeader>
                    <ModalBody>
                        <div className="row">
                            <h5>{this.props.productLoadingModalMessageErrorLabel}</h5>
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
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item">
                                    <Link to={'/'}> 
                                        <p>Home</p>
                                    </Link>
                                </li>
                                <li onClick={this.onClickBack.bind(this)} className="breadcrumb-item active" style={{'text-decoration':'unset','color':'#007bff','cursor':'pointer'}} aria-current="page">{'Back'}</li>
                            </ol>
                        </nav>
                </div>
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
                    {/* <Form onSubmit={this.props.onCreateProduct.bind(this)} enctype="multipart/form-data" >
                        <FormGroup row>
                            <Label for="style" sm={2}>Image</Label>
                            <Col sm={10}>
                                {showUpload}
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="description" sm={2}>Style Number</Label>
                            <Col sm={10}>
                            <Input type="text" name="description" id="description" onChange={e => this.onChangeDescription(e.target.value)}  placeholder="Style Number" />
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
                            {hiddenBtnCheck}
                            </Col>
                        </FormGroup>
                    </Form> */}
                        <Form onSubmit={this.props.onCreateProduct.bind(this)} enctype="multipart/form-data" >
                                <FormGroup row>
                                    <Label for="image" sm={2}>Image</Label>
                                    <Col sm={10}>
                                        {showUpload}
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="description" sm={2}>Style Number</Label>
                                    <Col sm={10}>
                                        <Input type="text" name="description" id="description" placeholder="Style Number" 
                                            onBlur={this.handleBlur('description')}
                                            valid={this.state.description.length >= 3 }
                                            invalid={this.state.description.length < 3 }
                                            onChange={e => this.onDescriptionChange(e.target.value)}
                                            value={this.state.description}  
                                        />
                                    </Col>
                                    <FormFeedback>{errors.description}</FormFeedback>
                                </FormGroup>

                                    {/* <Label for="description" sm={2}>Style Number</Label>
                                    <Col sm={10}>
                                    <Input type="text" name="description" id="description" placeholder="Style Number" 
                                        onBlur={this.handleBlur('description')}
                                        valid={this.state.description.length >= 3 }
                                        invalid={this.state.description.length < 3 }
                                        onChange={e => this.onDescriptionChange(e.target.value)}
                                        value={this.state.description}  
                                        style={{'width':'275px'}}                                                                                                                             
                                    
                                    /> */}
                                    <FormFeedback>{errors.description}</FormFeedback>
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
                                    <Input type="text" name="companystyle" id="companystyle" placeholder="Company Style Number" 
                                            onBlur={this.handleBlur('companystyle')}
                                            valid={this.state.companystyle.length >= 3 }
                                            invalid={this.state.companystyle.length < 3 }
                                            onChange={e => this.onCompanyStyleChange(e.target.value)}
                                            value={this.state.companystyle}                                                                        
                                    />
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
                                    <Input type="number" name="price" id="price" placeholder="Price"
                                        onBlur={this.handleBlur('price')}
                                        valid={this.state.price.length >= 3 }
                                        invalid={this.state.price.length < 3 }
                                        onChange={e => this.onPriceChange(e.target.value)}
                                        value={this.state.price}                                                                                                            
                                    />
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
                                <br/>
                                <FormGroup row>
                                    <Label for="style" sm={2}>&nbsp;</Label>
                                    <Col sm={10}>
                                        {submitButton}
                                        {/* <Input type="submit" className="btn btn-success" name="image" id="image" placeholder="Image" /> */}
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
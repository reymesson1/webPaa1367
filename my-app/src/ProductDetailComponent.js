
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Media, Panel,   Card,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter, Progress } from 'reactstrap';
import { Button, Col, Form, FormGroup, Label, Input, FormText, FormFeedback } from 'reactstrap';

const API_HEADERS = {

    'Content-Type':'application/json',
    Authentication: 'any-string-you-like'
}

class ProductDetailComponent extends Component {

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
            products: [],
            defaultImageSelected: null,
            isModalOpen: false,
            firstname: '',
            lastname: '',
            email: '',
            touched:{
                firstname: false,
                lastname : false,
                email : false    
            }
        }

        this.handleBlur = this.handleBlur.bind(this);

    }

    imageClickEdit = (dataImage, dataId) => {
        let objSelected = {
          "productId": dataImage.id,
          "name": dataId
        }
        let nextState = this.props.products.filter(
  
          (data, index) => data.id.indexOf(dataImage.id) !== -1
        );
        nextState[0].image = dataId
        this.setState({
          products: nextState,
          defaultImageSelected: objSelected
        })
    }

    onSendEmail(){

        console.log('send email');
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }

    toggleModalStyle = () => {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }

    onSubmit(event){

        event.preventDefault();

        let newEmail = {

            id : event.target.id.value,
            firstname : event.target.firstname.value,
            lastname : event.target.lastname.value,
            email : event.target.email.value

        }

        fetch(this.props.URLExternal+'/sendemail', {

            method: 'post',
            headers: API_HEADERS,
            body: JSON.stringify(newEmail)
          })
    

        // console.log(newEmail);

    }

    handleBlur = (field) => (evt) =>{

        this.setState({
            touched: { ...this.state.touched, [field]: true }
        })

    }

    validate(firstname, lastname, email){

        const errors = {
            firstname: '',
            lastname: '',
            email: ''
        }

        if(this.state.touched.firstname && firstname.length < 3){
            errors.firstname = "First Name should be >= 3 characters"
        }
        if(this.state.touched.lastname && lastname.length < 3){
            errors.lastname = "Last Name Style should be >= 3 characters"
        }
        if(this.state.touched.email && email.length < 3){
            errors.email = "Email should be >= 1 characters"
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
  
    render() {

        const errors = this.validate(this.state.firstname, this.state.lastname, this.state.email);

        let submitButton
        
        if((this.state.firstname === '') || (this.state.lastname === '') || (this.state.email === '') ){

            submitButton = <Input type="submit" className="btn btn-success" name="image" id="image" placeholder="Image" disabled />
        }else{
            
            submitButton = <Input type="submit" className="btn btn-success" name="image" id="image" placeholder="Image" />
        }


        let filteredData = this.props.products.filter(

            (data, index) => data.id.indexOf(this.props.match.params.id) !== -1
        );

        let style 
            
        let company  
        
        let companyStyle 
        
        let category 
        
        let notes 

        if(filteredData.length>0){

            if(filteredData[0].hidden){
                
                style = filteredData[0].style
                
                company = filteredData[0].company 
                
                companyStyle = filteredData[0].companystyle
                
                category = filteredData[0].category
                
                notes = filteredData[0].notes
            }
            return(
                    <div className="container">
                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModalStyle}>
                        <ModalHeader>
                        <p>Send an email</p>
                        </ModalHeader>
                        <ModalBody>
                            <div className="row">

                                <Form onSubmit={this.onSubmit.bind(this)}>
                                        <FormGroup row>
                                            <Label for="firstname" sm={4}>&nbsp;</Label>
                                            <Col sm={8}>
                                            <Input style={{'display':'none'}} type="text" name="id" id="id" value={this.props.match.params.id} disabled />
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label for="firstname" sm={1}>&nbsp;</Label>
                                            <Label for="firstname" sm={4}>First Name</Label>
                                            <Col sm={7}>
                                            <Input type="text" name="firstname" id="firstname" placeholder="First Name" 
                                                onBlur={this.handleBlur('firstname')}
                                                valid={this.state.firstname.length >= 3 }
                                                invalid={this.state.firstname.length < 3 }
                                                onChange={e => this.onFirstNameChange(e.target.value)}
                                                value={this.state.firstname}  
                                                style={{'width':'275px'}}                                                                                                                             
                                          
                                            />
                                            <FormFeedback>{errors.firstname}</FormFeedback>
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label for="lastname" sm={1}>&nbsp;</Label>
                                            <Label for="lastname" sm={4}>Last Name</Label>
                                            <Col sm={7}>
                                            <Input type="text" name="lastname" id="lastname" placeholder="Last Name" 
                                                onBlur={this.handleBlur('lastname')}
                                                valid={this.state.lastname.length >= 3 }
                                                invalid={this.state.lastname.length < 3 }
                                                onChange={e => this.onLastNameChange(e.target.value)}
                                                value={this.state.lastname}     
                                                style={{'width':'275px'}}                                                                                                                             
                                                                                   
                                            />
                                            <FormFeedback>{errors.lastname}</FormFeedback>
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label for="lastname" sm={1}>&nbsp;</Label>
                                            <Label for="email" sm={4}>Email</Label>
                                            <Col sm={7}>
                                            <Input type="email" name="email" id="email" placeholder="Email" 
                                                onBlur={this.handleBlur('email')}
                                                valid={this.state.email.length >= 3 }
                                                invalid={this.state.email.length < 3 }
                                                onChange={e => this.onEmailChange(e.target.value)}
                                                value={this.state.email}       
                                                style={{'width':'275px'}}                                                                                                                             
                                            />
                                            <FormFeedback>{errors.email}</FormFeedback>
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
                        </ModalBody>
                    </Modal>

                    <br/>
                    <br/>
                    <div className="row">
                        <div className="col-md-6">
                            <h1>Product Detail</h1>
                        </div>
                        <div className="col-md-6">
                            <Link className="btn btn-primary" to={'/editproduct/'+filteredData[0].id} >Edit</Link>                                                        
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <br/>
                    </div>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-4">
                            <div className="row">
                                <Link to={'/productdetailzoom/'+filteredData[0].image}>
                                    <img src={this.props.URLExternal+'/images/'+filteredData[0].image}/>
                                </Link>
                            </div>
                            <br/>
                            <br/>
                            <div className="row">
                            {filteredData[0].images.map(
                                        (data, index) =>
                                        <div className="col-md-3">
                                            <div className="row">
                                                <button className="btn btn-white" onClick={this.imageClickEdit.bind(this,filteredData[0],data)}>
                                                {/* <button className="btn btn-white" onClick={this.props.imageClickEdit.bind(this,filteredData[0],data)}> */}
                                                    {/* <img src={this.props.URLExternal+"/images/"+data} height="70px" width="40px" />                                                                                 */}
                                                    <img src={this.props.URLExternal+"/images/output-"+data} height="70px" width="40px" />                                                                                
                                                    {/* <img src={this.props.URLExternal+"/images/output-"+ data.description +  '-' + data.style + '-0s.jpg' }  alt="Avatar" style={{"width":"100%","height":"100%"}}/> */}
                                                </button>
                                            </div>
                                        </div>                                         
                            )}
                            </div>
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-4">

                            <br/>
                            <div className="row">
                                <div className="col-md-6 text-align">
                                    <h4>Style Number:</h4>
                                </div>
                                <div className="col-md-6">
                                    <p>{filteredData[0].description}</p>
                                </div>
                            </div>
                            <br/>
                            <div className="row">
                                <div className="col-md-6 text-align">
                                    <h4>Style:</h4>
                                </div>
                                <div className="col-md-6 text-align">
                                    <p>{style}</p>
                                </div>
                            </div>
                            <br/>
                            <div className="row">
                                <div className="col-md-6 text-align">
                                    <h4>Company:</h4>
                                </div>
                                <div className="col-md-6 text-align">
                                    <p>{company}</p>
                                </div>
                            </div>
                            <br/>
                            <div className="row">
                                <div className="col-md-6 text-align">
                                    <h4>Company Style:</h4>
                                </div>
                                <div className="col-md-6 text-align">
                                    <p>{companyStyle}</p>
                                </div>
                            </div>
                            <br/>
                            <div className="row">
                                <div className="col-md-6 text-align">
                                    <h4>Price:</h4>
                                </div>
                                <div className="col-md-6 text-align">
                                    <p>{filteredData[0].price}</p>
                                </div>
                            </div>
                            <br/>
                            <div className="row">
                                <div className="col-md-6 text-align">
                                    <h4>Price Opt:</h4>
                                </div>
                                <div className="col-md-6 text-align">
                                    <p>{filteredData[0].priceopt}</p>
                                </div>
                            </div>
                            <br/>
                            <div className="row">
                                <div className="col-md-6 text-align">
                                    <h4>Category:</h4>
                                </div>
                                <div className="col-md-6 text-align">
                                    <p>{category}</p>
                                </div>
                            </div>
                            <br/>
                            <div className="row">
                                <div className="col-md-6 text-align">
                                    <h4>Notes:</h4>
                                </div>
                                <div className="col-md-6 text-align">
                                    <p>{notes}</p>
                                </div>
                            </div>
                            <br/>
                            <div className="row">
                                <div className="col-md-2">
                                        <h1 onClick={this.onSendEmail.bind(this)} ><i className="fa fa-envelope fa-lg"></i></h1>
                                </div>
                                <div className="col-md-2">
                                    <h1><i className="fa fa-print fa-lg"></i> <a href="mailto:confusion@food.net"/></h1>
                                </div>
                                <div className="col-md-2">
                                    <h1><i className="fa fa-star fa-lg"></i> <a href="mailto:confusion@food.net"/></h1>
                                </div>
                                <div className="col-md-6"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2"></div>

                    <br/>
                    <br/>
                    <br/> 
                </div>

            );
        }else{
            return(
                <div>
                    <h1>{''}</h1>
                </div>
            );
        }
    }

}

export default ProductDetailComponent; 
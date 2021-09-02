
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
    ModalFooter, Col, Form, FormGroup, Label } from 'reactstrap';

class Product extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchText: '',
            showModal: false,
            description: "",
            price: "",
            style: "",
            company: "",
            limit: 5,
            sequence: 5

        }  
    }

    toggleModal = () => {
        this.setState({
            showModal: !this.state.showModal
        })
    }

    openEditModal(id){
        this.setState({
            showModal: true
        })

        let filteredData = this.props.products.filter(

            (data, index) => data.id.toLowerCase().indexOf(id.toLowerCase()) !== -1
        );

        this.setState({
            id: filteredData[0].id,
            description: filteredData[0].description,
            price: filteredData[0].price,
            style: filteredData[0].style,
            company: filteredData[0].company,
            category: filteredData[0].category
        })
        
    }

    onChangeField(event){

        this.setState({
            searchText: event.target.value
        })
    }

    onClicked(){
        window.location.href = '/createproduct'
    }

    onViewMore(){
        let nextState = this.state.limit;
        nextState+=5;        
        this.setState({

            limit: nextState
        })
    }



    render() {

        var productData  = this.props.products.sort( 
            (a,b) =>{
                if(a.id<b.id){
                    return 1
                }
                if(a.id>b.id){
                    return -1
                }
                return 0
            }
        )

        const result = productData.reduce((temp, value) => {
            if(this.state.searchText==""){
                if(temp.length<this.state.limit){

                    temp.push(value);
                }
            }else{
                
                temp.push(value);
            }
            return temp;
        }, []);

        let showViewMore

        if(this.state.limit==result.length){

            showViewMore = <p style={{'text-decoration':'underline','color':'blue','cursor':'pointer'}} onClick={this.onViewMore.bind(this)} > {'View More'} </p>
        }

        let filteredData = result.filter(

            (data, index) => data.description.toLowerCase().indexOf(this.state.searchText.toLowerCase()) !== -1 || data.style.toLowerCase().indexOf(this.state.searchText.toLowerCase()) !== -1 || data.companystyle.toLowerCase().indexOf(this.state.searchText.toLowerCase()) !== -1 || data.category.toLowerCase().indexOf(this.state.searchText.toLowerCase()) !== -1 || data.company.toLowerCase().indexOf(this.state.searchText.toLowerCase()) !== -1 || data.notes.toLowerCase().indexOf(this.state.searchText.toLowerCase()) !== -1
        );

        return(
            <div className="container">
                <Modal isOpen={this.state.showModal} toggle={this.toggleModal}>
                    <ModalHeader >
                        <div className="row">
                                <p>Edit | {this.state.description}</p>                                
                        </div>

                    </ModalHeader>
                    <ModalBody>
                        <div className="row">
                            <Form onSubmit={this.props.onEditProduct.bind(this)}>
                            {/* <Form> */}
                                <FormGroup row>
                                    <Col sm={8}>
                                    <Input type="text" value={this.state.id} name="id" id="id" placeholder="id" disabled style={{'display':'none'}} />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="description" sm={1}>&nbsp;</Label>
                                    <Label for="description" sm={3}>Description</Label>
                                    <Col sm={8}>
                                    <Input type="text" value={this.state.description} name="description" id="description" placeholder="Description" />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="description" sm={1}>&nbsp;</Label>
                                    <Label for="price" sm={3}>Price</Label>
                                    <Col sm={8}>
                                    <Input type="text" value={this.state.price} name="price" id="price" placeholder="Price" />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="style" sm={1}>&nbsp;</Label>
                                    <Label for="style" sm={3}>Style</Label>
                                    <Col sm={8}>
                                    <Input type="text" value={this.state.style} name="style" id="style" placeholder="Style" />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="style" sm={1}>&nbsp;</Label>
                                    <Label for="style" sm={3}>Company</Label>
                                    <Col sm={8}>
                                    <Input type="text" value={this.state.company} name="company" id="company" placeholder="Company" />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label sm={1}>&nbsp;</Label>
                                    <Label for="exampleSelect" sm={3}>Category</Label>
                                    <Col sm={8}>
                                        <Input type="select" value={this.state.category} name="category" id="category" placeholder="Category" >
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
                                    <Label sm={1}>&nbsp;</Label>
                                    <Col sm={10}>
                                        <Input type="submit" className="btn btn-success" name="submit" id="submit" placeholder="Submit" disabled />
                                    </Col>
                                    <Label sm={1}>&nbsp;</Label>
                                </FormGroup>
                            </Form>
                        </div>
                    </ModalBody>
                </Modal>

                <br/>
                <div className="row">
                    {/* <Input type="text" placeholder="Search" ></Input> */}
                    <Card style={{'width':'100%'}}>
                        <CardBody>
                            {/* <CardTitle tag="h5">Card title</CardTitle> */}
                            {/* <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle> */}
                        </CardBody>
                        <CardBody>
                            <Input type="text" onChange={this.onChangeField.bind(this)} placeholder="Search" ></Input>
                        </CardBody>
                    </Card>
                </div>
                <br/>
                <div className="row">
                    <div className="col-md-6">
                        <h1>&nbsp;</h1>
                    </div>
                    <div className="col-md-6">
                        <Link className="btn btn-dark" to={'/createproduct'} style={{'width':'100%'}}  >Create a New Product</Link>
                        {/* <div className="btn btn-dark" onClick={this.onClicked.bind(this)} style={{'width':'100%'}}  >Create a New Product</div> */}
                    </div>
                </div>
                <div className="row">
                <Table>
                <thead>
                    <tr>
                    <th>&nbsp;</th>
                    <th>Style Number</th>
                    <th>Price</th>
                    <th>Price Optional</th>
                    <th>Style</th>
                    <th>Company Style Number</th>
                    <th>Category</th>
                    <th>Company</th>
                    <th>Notes</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map(
                        (data, index) => 
                                            <tr>
                                                <td style={{"width":"12%","height":"12%"}}>
                                                    <Link to={'/productdetail/'+data.id}> 
                                                        <img src={this.props.URLExternal+"/images/output-"+ data.image}  alt="Avatar"/>
                                                        {/* <img src={this.props.URLExternal+"/images/output-"+ data.description +  '-' + data.style + '-0.jpg' }  alt="Avatar" style={{"width":"100%","height":"100%"}}/> */}
                                                    </Link>
                                                </td>
                                                <td style={{"padding-top":"5%"}} >{data.description}</td>
                                                <td style={{"padding-top":"5%"}}>{data.price}</td>
                                                <td style={{"padding-top":"5%"}}>{data.priceopt}</td>
                                                <td style={{"padding-top":"5%"}}>{data.style}</td>
                                                <td style={{"padding-top":"5%"}}>{data.companystyle}</td>
                                                <td style={{"padding-top":"5%"}}>{data.category}</td>
                                                <td style={{"padding-top":"5%"}}>{data.company}</td>
                                                <td style={{"padding-top":"5%"}}>{data.notes}</td>
                                                <td style={{"padding-top":"5%"}}>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            {/* <button className="btn btn-primary" onClick={this.openEditModal.bind(this, data.id)} >Edit</button>                                                         */}
                                                            
                                                            <Link className="btn btn-primary" to={'/editproduct/'+data.id} >Edit</Link>                                                        
                                                        </div>
                                                        <div className="col-md-6">
                                                            <button className="btn btn-danger" onClick={this.props.onDeleteProduct.bind(this, data.id)} >Delete</button>                                                        
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                    )}
                </tbody>
                </Table>
                </div>
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        {showViewMore}
                    </div>
                    <div className="col-md-4"></div>                            
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            </div>
        );
    }

}

export default Product; 
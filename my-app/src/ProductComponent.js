
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
            company: ""

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

        console.log(id)

        let filteredData = this.props.products.filter(

            (data, index) => data.id.toLowerCase().indexOf(id.toLowerCase()) !== -1
        );

        this.setState({
            description: filteredData[0].description,
            price: filteredData[0].price,
            style: filteredData[0].style,
            company: filteredData[0].company,
            category: filteredData[0].category
        })
        
        console.log(filteredData)
    }

    onChangeField(event){

        this.setState({
            searchText: event.target.value
        })
    }

    render() {

        let filteredData = this.props.products.filter(

            (data, index) => data.description.toLowerCase().indexOf(this.state.searchText.toLowerCase()) !== -1
        );
        
        return(
            <div className="container">
                <Modal isOpen={this.state.showModal} toggle={this.toggleModal}>
                    <ModalHeader>
                    <p>Edit | {this.state.description}</p>
                    </ModalHeader>
                    <ModalBody>
                        <div className="row">
                            {/* <Form onSubmit={this.props.onCreateProduct.bind(this)} enctype="multipart/form-data" > */}
                            <Form>
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
                            </Form>
                        </div>
                    </ModalBody>
                    <ModalFooter>  
                    <button className="btn btn-white" onClick={this.toggleModal} >Close</button>
                    </ModalFooter>
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
                            <Input type="text" placeholder="Search" ></Input>
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
                    </div>
                </div>
                <div className="row">
                <Table>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Style</th>
                    <th>Category</th>
                    <th>Company</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map(
                        (data, index) => 
                                            <tr>
                                                <td>{data.id}</td>
                                                <td>{data.description}</td>
                                                <td>{data.price}</td>
                                                <td>{data.style}</td>
                                                <td>{data.category}</td>
                                                <td>{data.company}</td>
                                                <td>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <button className="btn btn-primary" onClick={this.openEditModal.bind(this, data.id)} >Edit</button>                                                        
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
            </div>
        );
    }

}

export default Product; 
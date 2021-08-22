
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
import { set } from 'mongoose';

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

    imageClick = (data) => {
        console.log(data);
    }       
    
    render() {

        let filteredData = this.props.products.filter(

            (data, index) => data.image.indexOf(this.props.match.params.id) !== -1
        );

        console.log(this.props.match.params.id);

        console.log(this.props.products);

        console.log(filteredData);
        
        return(
            <div className="container">
                <div className="row">
                    <img src={this.props.URLExternal+'/images/'+filteredData[0].image}/>
                </div>
                <div className="row">
                        {filteredData[0].images.map(
                                    (data, index) =>
                                    <div className="col-md-3">
                                        {/* <button className="btn btn-white" onClick={this.imageClick.bind(this,data)}> */}
                                        <button className="btn btn-white" onClick={this.props.imageClickEdit.bind(this,filteredData[0],data)}>
                                        <img src={this.props.URLExternal+"/images/"+data}  />                                        
                                        </button>
                                    </div>                                         
                        )}
                </div>


            </div>
        );
    }

}

export default ProductDetailComponent; 
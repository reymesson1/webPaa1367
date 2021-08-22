
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

    imageClick = (data) => {
        console.log(data);
    }       
    
    render() {

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
                <br/>
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <div className="row">
                            <img src={this.props.URLExternal+'/images/'+filteredData[0].image} style={{'height':'20%', 'width':'20%'}} />
                        </div>
                        <br/>
                        <br/>
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
                    <div className="col-md-2"></div>
                </div>
            </div>
        );
    }

}

export default ProductDetailComponent; 
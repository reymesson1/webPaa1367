
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
            defaultImageSelected: null
        }
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
  
  
    render() {

        let filteredData = this.props.products.filter(

            (data, index) => data.id.indexOf(this.props.match.params.id) !== -1
        );

        let assignedValue = null

        let assignedValueMap = filteredData.map( (data) =>{

            // console.log(data);

            assignedValue = data

            return data

        } )

        console.log(assignedValue);

        let style ="style"
             
        let company = "company"
        
        let companyStyle = "companystyle"
        
        let category = "category"
        
        let notes = "notes"

        // if(assignedValue.hidden){
            
        //     style = assignedValue.style
            
        //     company = assignedValue.company 
            
        //     companyStyle = assignedValue.companystyle
            
        //     category = assignedValue.category
            
        //     notes = assignedValue.notes
        // }
        return(
            <div className="container">
                <br/>
                <br/>
                <div className="row">
                    <div className="col-md-6">
                        <h1>Product Detail</h1>
                    </div>
                    <div className="col-md-6">
                        <Link className="btn btn-primary" to={'/editproduct/'+assignedValue.id} >Edit</Link>                                                        
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
                            <Link to={'/productdetailzoom/'+assignedValue.image}>
                                <img src={this.props.URLExternal+'/images/'+assignedValue.image}/>
                            </Link>
                        </div>
                        <br/>
                        <br/>
                        <div className="row">
                        {assignedValue.images.map(
                                    (data, index) =>
                                    <div className="col-md-3">
                                        <div className="row">
                                            <button className="btn btn-white" onClick={this.imageClickEdit.bind(this,assignedValue,data)}>
                                                <img src={this.props.URLExternal+"/images/output-"+data} height="70px" width="40px" />                                                                                
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
                                <p>{assignedValue.description}</p>
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
                                <p>{assignedValue.price}</p>
                            </div>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="col-md-6 text-align">
                                <h4>Price Opt:</h4>
                            </div>
                            <div className="col-md-6 text-align">
                                <p>{assignedValue.priceopt}</p>
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
                    </div>
                </div>
                <div className="col-md-2"></div>

                <br/>
                <br/>
                <br/> 
            </div>

        );
    }

}

export default ProductDetailComponent; 
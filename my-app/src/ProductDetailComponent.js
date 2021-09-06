
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
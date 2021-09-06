
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

        let data = this.props.productDetailItems;

        console.log(data)
        

        if(data!=null){
            return(
                <div className="container">

                    <div className="row">

                        <h1>{data.id}</h1>

                    </div>

                </div>

            );
        } else{
            return(
                <div className="container">

                    <div className="row">

                        <h1>{'Go back'}</h1>

                    </div>

                </div>

            );
        }
    }

}

export default ProductDetailComponent; 
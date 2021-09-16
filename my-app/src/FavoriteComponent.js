import React, { Component } from 'react';
import { Button, Col, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Link } from 'react-router-dom';

const API_HEADERS = {

    'Content-Type':'application/json',
    Authentication: 'any-string-you-like'
  }
  

class FavoriteComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filterAPI: [],
            products: [],
            limit: 5,
            sequence: 5
        }
    }
    
    onFilterSearch(event){

        event.preventDefault();

        var newFilter = {
            
            "company": event.target.company.value,
            "companystyle": event.target.companystyle.value,
            "style": event.target.style.value,
            "price": event.target.price.value,
            "priceopt": event.target.priceopt.value
        }    

        fetch(this.props.URLExternal+'/filterapiui', {

            method: 'post',
            headers: API_HEADERS,
            body: JSON.stringify({newFilter})
        })
        .then((response)=>response.json())
        .then((responseData)=>{
            console.log(responseData);
                this.setState({

                    filterAPI: responseData
                })
        })


    }

    onViewMore(){
        let nextState = this.state.limit;
        nextState+=5;        
        this.setState({

            limit: nextState
        })
    }

    onClickFavoriteToggle(dataImage, dataId){

        let nextState = this.state.products.filter(
  
          (data, index) => data.id.indexOf(dataImage.id) !== -1
        );
        
        nextState[0].favorite = !nextState[0].favorite
        
        this.setState({
          products: nextState
        })
  
        let objSelected = {
          "productId": dataImage.id,
          "favorite": nextState[0].favorite,
        }
  
        // fetch(API_URL+'/setfavorite', {
  
        //   method: 'post',
        //   headers: API_HEADERS,
        //   body: JSON.stringify(objSelected)
        // })
  
      } 
  

    render() {

        let showViewMore

        if(this.state.limit==this.props.products.length){

            showViewMore = <p style={{'text-decoration':'underline','color':'blue','cursor':'pointer'}} onClick={this.onViewMore.bind(this)} > {'View More'} </p>
        }

        let filteredData = this.props.products.filter(

            (data, index) => data.favorite === true
        );

        const result = filteredData.reduce((temp, value) => {
            if(temp.length<this.state.limit)
              temp.push(value);
            return temp;
        }, []);

        const menu = result.map((product, index) => {
            return (
                <div key={product.id} className="col-md-5">
                    <Link to={'/productdetail/'+product.id}> 
                        <div className="card" style={{'margin':'5%'}}>
                                {/* <img src={"http://localhost:3000/book.png"}  alt="Avatar" style={{"width":"100%","height":"100%"}}/> */}
                                {/* <img src={"http://localhost:3000/"+ index + ".jpg"}  alt="Avatar" style={{"width":"100%","height":"100%"}}/> */}
                                {/* <img src={"http://localhost:8085/executed/"+ product.image}  alt="Avatar" style={{"width":"100%","height":"100%"}}/> */}
                                {/* <img src={"http://localhost:8085/images/"+ product.image}  alt="Avatar" style={{"width":"100%","height":"100%"}}/> */}
                                {/* <img src={"http://143.198.171.44:8085/executed/"+ index + ".jpg"}  alt="Avatar" style={{"width":"100%","height":"100%"}}/> */}
                                {/* <img src={"http://143.198.171.44:8085/images/"+ product.image}  alt="Avatar" style={{"width":"100%","height":"100%"}}/> */}
                                <img src={this.props.URLExternal+"/images/output-"+ product.image}  alt="Avatar" style={{"width":"100%","height":"100%"}}/>
                                {/* <img src={this.props.URLExternal+"/images/output-"+ product.description +  '-' + product.style + '-0.jpg' }  alt="Avatar" style={{"width":"100%","height":"100%"}}/> */}

                        </div>
                    </Link>
                    <h5>{product.description}</h5>
                </div>
            )

        })
        
        return(
            <div className="container">
                <br/>
                <div className="row">
                    <div className="col-md-2">
                        <button className="btn btn-warning" onClick={this.onClickBack.bind(this)}>Back</button>
                    </div>
                    <div className="col-md-10"></div>
                    {/* <nav aria-label="breadcrumb">
                        <ol style={{'padding-top':'1%','padding-left':'1%'}} class="breadcrumb">
                            <li class="breadcrumb-item">
                                <Link to={'/'}> 
                                    <p>Home</p>
                                </Link>
                            </li>
                            <li class="breadcrumb-item active" aria-current="page">{'Favorite'}</li>
                        </ol>
                    </nav> */}
                </div>
                <br/>
                {/* <div className="row">
                    <h1>Favorite</h1>
                </div> */}
                <br/>
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <div className="row">
                            {menu}
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
                    <div className="col-md-2"></div>
                </div>
            </div>    
        )
    }

}

export default FavoriteComponent;
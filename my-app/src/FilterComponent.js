import React, { Component } from 'react';
import { Button, Col, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Link } from 'react-router-dom';

const API_HEADERS = {

    'Content-Type':'application/json',
    Authentication: 'any-string-you-like'
  }
  

class CreateStyleComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filterAPI: [],
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

    render() {

        const result = this.state.filterAPI.reduce((temp, value) => {
            if(temp.length<this.state.limit)
              temp.push(value);
            return temp;
        }, []);

        let showViewMore

        if(this.state.limit==result.length){

            showViewMore = <p style={{'text-decoration':'underline','color':'blue','cursor':'pointer'}} onClick={this.onViewMore.bind(this)} > {'View More'} </p>
        }

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
                                <img src={this.props.URLExternal+"/images/"+ product.image}  alt="Avatar" style={{"width":"100%","height":"100%"}}/>
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
                    <h1>Filter</h1>
                </div>
                <br/>
                <div className="row">
                    <div className="col-md-5">
                    <Form onSubmit={this.onFilterSearch.bind(this)} >
                    {/* <Form > */}
                        <FormGroup row>
                            <Col sm={10}>
                            <Input type="select" name="company" id="company" placeholder="Company Name" >
                                <option>{''}</option>
                                {this.props.companies.map( 
                                    (data,index) => <option>{data.description}</option>
                                )}

                            </Input>                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col sm={10}>
                                <Input type="text" name="companystyle" id="companystyle" placeholder="Company Style" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col sm={10}>
                            <Input type="select" name="style" id="style" placeholder="Style" >
                                    <option>{''}</option>
                                {this.props.styles.map( 
                                    (data,index) => <option>{data.description}</option>
                                )}

                            </Input>                            
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col sm={5}>
                                <Input type="text" name="price" id="price" placeholder="Price From" />
                            </Col>
                            <Col sm={5}>
                                <Input type="text" name="priceopt" id="priceopt" placeholder="Price To" />
                            </Col>
                        </FormGroup>
                        <br/>
                        <FormGroup row>
                            <Col sm={6}></Col>
                            <Col sm={4}>
                            <Input type="submit" value="Search" className="btn btn-success" name="image" id="image" placeholder="Image" />
                            </Col>
                        </FormGroup>
                    </Form>
                    </div>
                    <div className="col-md-7">
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
                </div>
            </div>    
        )
    }

}

export default CreateStyleComponent;
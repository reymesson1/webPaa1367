import React, { Component } from 'react';
import { Button, Col, Form, FormGroup, Label, FormText } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Input, Card,
    CardBody,
    CardTitle,
    CardSubtitle } from 'reactstrap';
import { CardImg, CardText } from 'reactstrap';

const API_HEADERS = {

    'Content-Type':'application/json',
    Authentication: 'any-string-you-like'
  }
  

class FilterComponent extends Component {

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

    onClickBack(){
        window.history.back();
    }


    render() {

        const result = this.state.filterAPI.reduce((temp, value) => {
            if(temp.length<this.state.limit)
              temp.push(value);
            return temp;
        }, []);

        let showViewMore

        if(this.state.limit==result.length){

            // showViewMore = <p style={{'text-decoration':'underline','color':'blue','cursor':'pointer'}} onClick={this.onViewMore.bind(this)} > {'View More'} </p>
            showViewMore = <Button onClick={this.onViewMore.bind(this)} outline color="primary">See More</Button>

        }

        const menu = result.map((product, index) => {
            return (
                <div key={product.id} className="col-md-4">
                    <br/>
                    <Card>
                            <Link to={'/productdetail/'+product.id}> 
                                <CardImg top width="100%" src={this.props.URLExternal+"/images/output-"+ product.image} alt="Card image cap" />
                            </Link>
                            <CardBody>
                            <CardTitle tag="h5">{product.description}</CardTitle>
                            <CardText>{product.category}</CardText>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">{'$ '+product.price}</CardSubtitle>
                            <div className="row">
                                <div className="col-md-4">
                                </div>
                                <div className="col-md-4">
                                    {/* <Button className="btn btn-danger" onClick={this.onClickFavoriteToggle.bind(this,product)} ><i className="fa fa-star" style={{'color':'#ffffff'}} aria-hidden="true"></i></Button> */}
                                </div>
                                <div className="col-md-4">

                                </div>
                            </div>
                            </CardBody>
                        </Card>
                </div>
            )

        })
        
        return(
            <div>
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
                            <li class="breadcrumb-item active" aria-current="page">{'Filter'}</li>
                        </ol>
                    </nav> */}
                </div>
                <br/>
                <div className="row">
                    <div className="col-md-3">
                        <h1>Filter</h1>
                    </div>
                    <div className="col-md-9"></div>
                </div>
                <br/>
                <div className="row" style={{'margin-left':'1%'}}>
                    <div className="col-md-4">
                    <Form onSubmit={this.onFilterSearch.bind(this)} >
                    {/* <Form > */}
                        <FormGroup row>
                            <Label for="companystyle" sm={2} style={{'text-align':'left'}}>Company</Label>
                            <Col sm={10}>
                            <Input type="select" style={{'color':'#fff','height':'50px'}} name="company" id="company" placeholder="Company Name" >
                                <option>{''}</option>
                                {this.props.companies.map( 
                                    (data,index) => <option style={{'color':'#a59d9d','height':'50px'}}>{data.description}</option>
                                )}

                            </Input>                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="companystyle" style={{'text-align':'left'}} sm={4}>Company Style</Label>
                            <Col sm={8}>
                                <Input type="text" name="companystyle" id="companystyle" placeholder="Company Style" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="companystyle" style={{'text-align':'left'}} sm={4}>Style{'   '}</Label>
                            <Col sm={8}>
                            <Input type="select" style={{'color':'#fff','height':'50px'}} name="style" id="style" placeholder="Style" >
                                    <option style={{'color':'#fff','height':'50px'}}>{''}</option>
                                {this.props.styles.map( 
                                    (data,index) => <option style={{'color':'#a59d9d','height':'50px'}}  >{data.description}</option>
                                )}

                            </Input>                            
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="companystyle" style={{'text-align':'left'}} sm={2}>Price</Label>
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
                        <br/>
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

export default FilterComponent;
import React, { Component } from 'react';
import { Input, Media, Panel,   Card,
    CardBody,
    CardTitle,
    CardSubtitle } from 'reactstrap';
import { AddToCart } from './AddToCartComponent';
import Pagination from './PaginationComponent';
import { Link } from 'react-router-dom';

class HomeComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchText: ""
        }  
    }

    onChangeField(event){

        this.setState({
            searchText: event.target.value
        })

        console.log(event.target.value)

    }

    render() {

        let filterData = this.props.products.filter(

            (data, index) => data.description.toLowerCase().indexOf(this.state.searchText.toLowerCase()) !== -1
        );

        if(this.props.newest){
            filterData = filterData.sort( 
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
        }else{
            filterData = filterData.sort( 
                (a,b) =>{
                    if(a.id>b.id){
                        return 1
                    }
                    if(a.id<b.id){
                        return -1
                    }
                    return 0
                }
            )

        }

        const menu = filterData.map((product, index) => {
            return (
                <div key={product.id} className="col-md-3">
                    <Link to={'/productdetail/'+product.image}> 
                        <div className="card" style={{'margin':'5%'}}>
                                {/* <img src={"http://localhost:3000/book.png"}  alt="Avatar" style={{"width":"100%","height":"100%"}}/> */}
                                {/* <img src={"http://localhost:3000/"+ index + ".jpg"}  alt="Avatar" style={{"width":"100%","height":"100%"}}/> */}
                                {/* <img src={"http://localhost:8085/executed/"+ product.image}  alt="Avatar" style={{"width":"100%","height":"100%"}}/> */}
                                {/* <img src={"http://localhost:8085/images/"+ product.image}  alt="Avatar" style={{"width":"100%","height":"100%"}}/> */}
                                {/* <img src={"http://143.198.171.44:8085/executed/"+ index + ".jpg"}  alt="Avatar" style={{"width":"100%","height":"100%"}}/> */}
                                <img src={"http://143.198.171.44:8085/images/"+ index + ".jpg"}  alt="Avatar" style={{"width":"100%","height":"100%"}}/>
                        </div>
                    </Link>
                    <h1>{product.description}</h1>
                </div>
            )

        })
        
        return(
            <div className="container">
                
                    <br/>
                <div className="row">
                    <br/>
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
                <div className="row">                    
                    {menu}
                </div>
            </div>
        );
    }

}

export default HomeComponent;
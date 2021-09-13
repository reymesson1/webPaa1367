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
            searchText: "",
            searchTextCategory: "",
            limit: 4,
            sequence: 5
        }  
    }

    componentDidMount(){
        this.setState({
            // searchText: this.props.match.params.id
            searchTextCategory: this.props.match.params.id
        })   
    }
    onChangeField(event){
        this.setState({
            searchText: event.target.value
        })
    }
    onViewMore(){
        let nextState = this.state.limit;
        nextState+=15;        
        this.setState({

            limit: nextState
        })
    }

    render() {

        // const result = this.props.products.reduce((temp, value) => {
        //     if(temp.length<this.state.limit)
        //       temp.push(value);
        //     return temp;
        // }, []);
        var productData  = this.props.products.sort( 
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

        let filterData
        // filterData = this.props.products.filter(
        if(this.state.searchText==""){

            filterData = productData.filter(
                
                (data, index) => data.category.toLowerCase().indexOf(this.state.searchTextCategory.toLowerCase()) !== -1 
                // (data, index) => data.description.toLowerCase().indexOf(this.state.searchText.toLowerCase()) !== -1 || data.style.toLowerCase().indexOf(this.state.searchText.toLowerCase()) !== -1 || data.companystyle.toLowerCase().indexOf(this.state.searchText.toLowerCase()) !== -1 || data.category.toLowerCase().indexOf(this.state.searchText.toLowerCase()) !== -1 || data.company.toLowerCase().indexOf(this.state.searchText.toLowerCase()) !== -1  || data.notes.toLowerCase().indexOf(this.state.searchText.toLowerCase()) !== -1
                );
        }else{

            filterData = productData.filter(
                
                // (data, index) => data.category.toLowerCase().indexOf(this.state.searchTextCategory.toLowerCase()) !== -1 
                (data, index) => data.description.toLowerCase().indexOf(this.state.searchText.toLowerCase()) !== -1 || data.style.toLowerCase().indexOf(this.state.searchText.toLowerCase()) !== -1 || data.companystyle.toLowerCase().indexOf(this.state.searchText.toLowerCase()) !== -1 || data.category.toLowerCase().indexOf(this.state.searchText.toLowerCase()) !== -1 || data.company.toLowerCase().indexOf(this.state.searchText.toLowerCase()) !== -1  || data.notes.toLowerCase().indexOf(this.state.searchText.toLowerCase()) !== -1
                );
        }

        const result = filterData.reduce((temp, value) => {
            if(this.state.searchText==""){
                if(temp.length<this.state.limit){

                    temp.push(value);
                }
            }else{
                
                temp.push(value);
            }
            return temp;
        }, []);

        let showViewMore

        if(this.state.limit==result.length){

            showViewMore = <p style={{'text-decoration':'underline','color':'blue','cursor':'pointer'}} onClick={this.onViewMore.bind(this)} > {'View More'} </p>
        }

        const menu = result.map((product, index) => {
            return (
                <div key={product.id} className="col-md-3">
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
                <div className="row">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item">
                                <Link to={'/'}> 
                                    <p>Home</p>
                                </Link>
                            </li>
                            <li class="breadcrumb-item active" aria-current="page">{this.props.match.params.id.toUpperCase()}</li>
                        </ol>
                    </nav>
                </div>
                <br/>
                <div className="row">
                    <h1>{this.props.match.params.id.toUpperCase()}</h1>
                </div>
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
        );
    }

}

export default HomeComponent;
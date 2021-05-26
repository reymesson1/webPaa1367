import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { AddToCart } from './AddToCartComponent';
import Pagination from './PaginationComponent';
import { Link } from 'react-router-dom';

class Product extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        let filterData

        if(this.props.newest){
            filterData = this.props.products.sort( 
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
            filterData = this.props.products.sort( 
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
        // let filterData = this.props.products.filter(

        //     (product) => product.description.toLowerCase().indexOf(this.props.filterText.toLowerCase()) !== -1
        // )
        // const menu = filterData.map((product, index) => {
        //     return (
        //         <div key={product.id} className="col-md-3">
        //             <div className="row">
        //             <Link to={'/productdetail/'+index}> 
        //                 <div className="card" style={{'margin':'5%'}}>
        //                     {/* <img src={"http://143.198.124.234:8085/executed/"+ index + ".jpg"}  alt="Avatar" style={{"width":"100%","height":"100%"}}/> */}
        //                     <img src={"http://localhost:8085/executed/"+ index + ".jpg"}  alt="Avatar" style={{"width":"100%","height":"100%"}}/>
        //                     {product.id}
        //                 </div>
        //             </Link>
        //             </div>
        //         </div>
        //     )
        // })

        const menu = filterData.map((product, index) => {
            return (
                <div key={product.id} className="col-md-3">
                    <Link to={'/productdetail/'+index}> 
                        <div className="card" style={{'margin':'5%'}}>
                                <img src={"http://143.198.124.234:8085/executed/"+ index + ".jpg"}  alt="Avatar" style={{"width":"100%","height":"100%"}}/>
                        </div>
                    </Link>
                </div>
            )

        })
        
        return(
            <div className="container">
                <div className="row">                    
                    {menu}
                    {/* <div className="col-md-3">
                        <div className="card" style={{'margin':'5%'}}>
                            <img src={"http://localhost:8085/executed/"+ "0" + ".jpg"}  alt="Avatar" style={{"width":"100%","height":"100%"}}/>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card" style={{'margin':'5%'}}>
                            <img src={"http://localhost:8085/executed/"+ "1" + ".jpg"}  alt="Avatar" style={{"width":"100%","height":"100%"}}/>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card" style={{'margin':'5%'}}>
                            <img src={"http://localhost:8085/executed/"+ "2" + ".jpg"}  alt="Avatar" style={{"width":"100%","height":"100%"}}/>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card" style={{'margin':'5%'}}>
                            <img src={"http://localhost:8085/executed/"+ "4" + ".jpg"}  alt="Avatar" style={{"width":"100%","height":"100%"}}/>
                        </div>
                    </div> */}
                </div>
                {/* <div className="row">   
                    <div className="col-md-4"></div>                 
                    <div className="col-md-4"></div>                 
                </div> */}
            </div>
        );
    }

}

export default Product;
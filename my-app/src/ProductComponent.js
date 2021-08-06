// import React, { Component } from 'react';
// import { Input, Media, Panel,   Card,
//     CardBody,
//     CardTitle,
//     CardSubtitle } from 'reactstrap';
// import { AddToCart } from './AddToCartComponent';
// import Pagination from './PaginationComponent';
// import { Link } from 'react-router-dom';

// class Product extends Component {

//     constructor(props) {
//         super(props);
//     }

//     render() {

//         let filterData

//         if(this.props.newest){
//             filterData = this.props.products.sort( 
//                 (a,b) =>{
//                     if(a.id<b.id){
//                         return 1
//                     }
//                     if(a.id>b.id){
//                         return -1
//                     }
//                     return 0
//                 }
//             )
//         }else{
//             filterData = this.props.products.sort( 
//                 (a,b) =>{
//                     if(a.id>b.id){
//                         return 1
//                     }
//                     if(a.id<b.id){
//                         return -1
//                     }
//                     return 0
//                 }
//             )

//         }
//         // let filterData = this.props.products.filter(

//         //     (product) => product.description.toLowerCase().indexOf(this.props.filterText.toLowerCase()) !== -1
//         // )
//         // const menu = filterData.map((product, index) => {
//         //     return (
//         //         <div key={product.id} className="col-md-3">
//         //             <div className="row">
//         //             <Link to={'/productdetail/'+index}> 
//         //                 <div className="card" style={{'margin':'5%'}}>
//         //                     {/* <img src={"http://143.198.171.44:8085/executed/"+ index + ".jpg"}  alt="Avatar" style={{"width":"100%","height":"100%"}}/> */}
//         //                     <img src={"http://localhost:8085/executed/"+ index + ".jpg"}  alt="Avatar" style={{"width":"100%","height":"100%"}}/>
//         //                     {product.id}
//         //                 </div>
//         //             </Link>
//         //             </div>
//         //         </div>
//         //     )
//         // })

//         const menu = filterData.map((product, index) => {
//             return (
//                 <div key={product.id} className="col-md-3">
//                     <Link to={'/productdetail/'+index}> 
//                         <div className="card" style={{'margin':'5%'}}>
//                                 {/* <img src={"http://localhost:3000/book.png"}  alt="Avatar" style={{"width":"100%","height":"100%"}}/> */}
//                                 {/* <img src={"http://localhost:3000/"+ index + ".jpg"}  alt="Avatar" style={{"width":"100%","height":"100%"}}/> */}
//                                 {/* <img src={"http://localhost:8085/executed/"+ index + ".jpg"}  alt="Avatar" style={{"width":"100%","height":"100%"}}/> */}
//                                 <img src={"http://143.198.171.44:8085/executed/"+ index + ".jpg"}  alt="Avatar" style={{"width":"100%","height":"100%"}}/>
//                         </div>
//                     </Link>
//                 </div>
//             )

//         })
        
//         return(
//             <div className="container">
//                 <br/>
//                 <div className="row">
//                     <div className="col-md-6">
//                         <h1>&nbsp;</h1>
//                     </div>
//                     <div className="col-md-6">
//                         <Link className="btn btn-dark" to={'/createproduct'} style={{'width':'100%'}}  >Create a New Product</Link>
//                     </div>
//                 </div>
//                 <div className="row">
//                     {/* <Input type="text" placeholder="Search" ></Input> */}
//                     <Card style={{'width':'100%'}}>
//                         <CardBody>
//                             {/* <CardTitle tag="h5">Card title</CardTitle> */}
//                             {/* <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle> */}
//                         </CardBody>
//                         <CardBody>
//                             <Input type="text" placeholder="Search" ></Input>
//                         </CardBody>
//                     </Card>
//                 </div>
//                 <div className="row">                    
//                     {menu}
//                     {/* <div className="col-md-3">
//                         <div className="card" style={{'margin':'5%'}}>
//                             <img src={"http://localhost:8085/executed/"+ "0" + ".jpg"}  alt="Avatar" style={{"width":"100%","height":"100%"}}/>
//                         </div>
//                     </div>
//                     <div className="col-md-3">
//                         <div className="card" style={{'margin':'5%'}}>
//                             <img src={"http://localhost:8085/executed/"+ "1" + ".jpg"}  alt="Avatar" style={{"width":"100%","height":"100%"}}/>
//                         </div>
//                     </div>
//                     <div className="col-md-3">
//                         <div className="card" style={{'margin':'5%'}}>
//                             <img src={"http://localhost:8085/executed/"+ "2" + ".jpg"}  alt="Avatar" style={{"width":"100%","height":"100%"}}/>
//                         </div>
//                     </div>
//                     <div className="col-md-3">
//                         <div className="card" style={{'margin':'5%'}}>
//                             <img src={"http://localhost:8085/executed/"+ "4" + ".jpg"}  alt="Avatar" style={{"width":"100%","height":"100%"}}/>
//                         </div>
//                     </div> */}
//                 </div>
//                 {/* <div className="row">   
//                     <div className="col-md-4"></div>                 
//                     <div className="col-md-4"></div>                 
//                 </div> */}
//             </div>
//         );
//     }

// }

// export default Product;

import React, { Component } from 'react';
import { Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Input, Media, Panel,   Card,
    CardBody,
    CardTitle,
    CardSubtitle } from 'reactstrap';

class Product extends Component {

    constructor(props) {
        super(props);

    }

    render() {

        let filteredData = this.props.products;
        
        return(
            <div className="container">
                <br/>
                <div className="row">
                    {/* <Input type="text" placeholder="Search" ></Input> */}
                    <Card style={{'width':'100%'}}>
                        <CardBody>
                            {/* <CardTitle tag="h5">Card title</CardTitle> */}
                            {/* <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle> */}
                        </CardBody>
                        <CardBody>
                            <Input type="text" placeholder="Search" ></Input>
                        </CardBody>
                    </Card>
                </div>
                <br/>
                <div className="row">
                    <div className="col-md-6">
                        <h1>&nbsp;</h1>
                    </div>
                    <div className="col-md-6">
                        <Link className="btn btn-dark" to={'/createproduct'} style={{'width':'100%'}}  >Create a New Product</Link>
                    </div>
                </div>
                <div className="row">
                <Table>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Style</th>
                    <th>Company</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map(
                        (data, index) => 
                                            <tr>
                                                <td>{data.id}</td>
                                                <td>{data.description}</td>
                                                <td>{data.price}</td>
                                                <td>{data.style}</td>
                                                <td>{data.company}</td>
                                            </tr>
                    )}
                </tbody>
                </Table>
                </div>
            </div>
        );
    }

}

export default Product; 
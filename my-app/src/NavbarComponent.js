import React, { useState, Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Table, Input } from 'reactstrap';

function NavbarComponent(props) {
    
    const [dropdownOpen, setDropdownOpen] = useState(false);
    
    const toggle = () => setDropdownOpen(prevState => !prevState);  


    let subTotal = 0;
    let total = 0;

    props.orders[0].orderDetails.map(
        (product) => {
            total += product.price
        }            
    )

    subTotal = (total)-(total*5/100).toFixed(2);

    return(
        <div>
            <Navbar style={{'background-color':'#e6e6e6','height':'150px','color':'#000000'}}>
                <div className="col-md-3">
                    <NavbarBrand style={{'color':'#000000'}} href="/"><img style={{'width':'100px'}} src="http://localhost:8085/testiiiing.jpg"/></NavbarBrand>
                </div>
                <div className="col-md-6">
                    <Input type="text" onChange={props.search.bind(this)} placeholder="Seach" />
                </div>
                <div className="col-md-3">
                    <Dropdown style={{ 'right':'18%'}} isOpen={dropdownOpen} toggle={toggle}>
                    <DropdownToggle style={{'background-color':'#e6e6e6', 'border-color':'#e6e6e6'}} caret>
                        &nbsp;&nbsp;&nbsp;<i className="fa fa-shopping-cart" style={{'color':'#000000'}} aria-hidden="true"></i>&nbsp; <span style={{'font-size':'20px','color':'#000000'}}>Cart</span>
                    </DropdownToggle>
                    <DropdownMenu style={{'width':'350px'}} >
                        <DropdownItem header><h4>Cart</h4></DropdownItem>
                        <DropdownItem>
                        <div className="row">
                            <Table>
                            <tbody>
                                {props.orders[0].orderDetails.map(
                                    (order,index) => <tr>
                                                    <td>
                                                        <div className="row">
                                                            <div className="col-md-7">
                                                                <span>{order.description}</span>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <span>{order.price}</span>
                                                            </div>
                                                            <div className="col-md-2">
                                                                <button onClick={props.deleteItem.bind(this)} value={'{"id":'+ order.id +','+' , "user":"jperez"}'} className="btn btn-danger">                                                                    
                                                                    <i className="fa fa-trash-alt" style={{'font-size':'15px'}} aria-hidden="true"></i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                )}
                                <tr>
                                <td>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <p className="col-md-offset-10">&nbsp;</p>
                                        </div>
                                        <div className="col-md-4">
                                            <p className="col-md-offset-10">Subtotal:</p>
                                        </div>
                                        <div className="col-md-4">
                                            <p className="col-md-offset-10">
                                                {subTotal.toFixed(2)}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <p className="col-md-offset-10">&nbsp;</p>
                                        </div>
                                        <div className="col-md-4">
                                            <p className="col-md-offset-10">Tax (18%):</p>
                                        </div>
                                        <div className="col-md-4">
                                            <p className="col-md-offset-10">
                                                {(total-subTotal).toFixed(2)}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4">
                                        <h5>&nbsp;</h5>
                                        </div>
                                        <div className="col-md-4">
                                        <h5>Total:</h5>
                                        </div>
                                        <div className="col-md-4">
                                            <h5>{total.toFixed(2)}</h5>
                                        </div>
                                    </div>
                                </td>
                                </tr>
                                <tr>
                                <td>                                            
                                    <button className="btn btn-dark" onClick={props.doCheckout.bind(this)} style={{'width':'100%'}}  >Complete Order</button>
                                </td>
                                </tr>
                            </tbody>
                            </Table>
                        </div>
                        </DropdownItem>
                    </DropdownMenu>
                    </Dropdown>
                </div>
            </Navbar>
        </div>
    );
}



export default NavbarComponent;
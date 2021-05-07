import React, { useState, Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
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
            <Navbar style={{'background-color':'#0c343d','height':'150px','color':'#000000'}}>
                <div className="col-md-3">
                        <div style={{'color':'#ffffff', 'font-size':'36px'}} href="/"> Amsel </div>
                        <div style={{'color':'#ef8d09', 'font-size':'16px'}} href="/"> eCatalog </div>
                </div>
                <div className="col-md-6">
                    {/* <Input type="text" onChange={props.search.bind(this)} placeholder="Seach" /> */}
                    <div className="row">
                        <h1>&nbsp;</h1>
                    </div>
                    <div className="row">
                        <Nav>
                            <NavItem>
                                <NavLink style={{'color':'#ef8d09'}} href="/components/">Browse</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink style={{'color':'#ef8d09'}} href="/components/">|</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink style={{'color':'#aaafaf'}} href="/components/">Products</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink style={{'color':'#ef8d09'}} href="/components/">|</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink style={{'color':'#aaafaf'}} href="/components/">Companies</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink style={{'color':'#ef8d09'}} href="/components/">|</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink style={{'color':'#aaafaf'}} href="/components/">Styles</NavLink>
                            </NavItem>
                        </Nav>
                    </div>
                </div>
                <div className="col-md-3">
                    <Dropdown style={{ 'right':'18%'}} isOpen={dropdownOpen} toggle={toggle}>
                    <DropdownToggle style={{'background-color':'#0c343d', 'border-color':'#0c343d'}} caret>
                        <span style={{'font-size':'20px','color':'#aaafaf'}}>@amseluser</span>
                    </DropdownToggle>
                    <DropdownMenu style={{'width':'350px'}} >
                        <DropdownItem header style={{'color':'#aaafaf'}} ><h4>Cart</h4></DropdownItem>
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
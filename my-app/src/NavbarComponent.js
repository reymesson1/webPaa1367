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
                                <NavLink style={{'color':'#ef8d09'}} href="/">Browse</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink style={{'color':'#ef8d09'}} >|</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink style={{'color':'#aaafaf'}} href="/product/">Products</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink style={{'color':'#ef8d09'}} >|</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink style={{'color':'#aaafaf'}} href="/companies/">Companies</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink style={{'color':'#ef8d09'}} >|</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink style={{'color':'#aaafaf'}} href="/styles/">Styles</NavLink>
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
                        <DropdownItem header style={{'color':'#aaafaf'}} >
                            <div className="row">
                                <div className="col-md-5 " style={{'text-align':'center'}}>
                                    <h4>Hide</h4>
                                </div>
                                <div className="col-md-2">
                                    <h4>|</h4>
                                </div>
                                <div className="col-md-5">
                                    <h4>Show</h4>
                                </div>
                            </div>
                        </DropdownItem>
                        <DropdownItem>
                        <div className="row">
                            <Table>
                            <tbody>
                                <tr>
                                <td>                                            
                                    <div className="row">
                                        <label>Upload Picture</label>
                                    </div>
                                    <div className="row">
                                        {/* <input type="file" className="btn btn-dark" onChange={props.doCheckout.bind(this)} id="file-input" name="ImageStyle"  /> */}
                                        <button type="file" className="btn btn-dark" onClick={props.doCheckout.bind(this)} id="file-input" name="ImageStyle">Upload Image</button>
                                    </div>
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
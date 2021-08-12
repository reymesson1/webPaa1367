import React, { useState, Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { ButtonToggle ,CustomInput,Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Table, Input } from 'reactstrap';
import { Link } from 'react-router-dom';

// function NavbarComponent(props) {
class NavbarComponent extends Component {

        constructor(props) {
            super(props);
        }        
 
    // const [dropdownOpen, setDropdownOpen] = useState(false);
    
    // const toggle = () => setDropdownOpen(prevState => !prevState);  


    // let subTotal = 0;
    // let total = 0;

    // props.orders[0].orderDetails.map(
    //     (product) => {
    //         total += product.price
    //     }            
    // )

    // subTotal = (total)-(total*5/100).toFixed(2);

    render(){


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
                    <CustomInput onChange={this.props.onHiddenApp.bind(this)} type="switch" id="exampleCustomSwitch" checked={this.props.onHiddenMode} name="customSwitch" label="Presentation Mode" />
                </div>
            </Navbar>
        </div>
    );
    }
}



export default NavbarComponent;
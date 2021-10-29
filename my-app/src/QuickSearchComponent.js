import React, { Component } from 'react';
import { Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Input, Media, Panel,   Card,
    CardBody,
    CardTitle,
    CardSubtitle } from 'reactstrap';
import {CardImg, CardText,Button} from 'reactstrap';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { ButtonToggle ,CustomInput,Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { ButtonDropdown } from 'reactstrap';

   
class QuickSearchComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [],
            dropdownOpen: true
        }  
    }

    toggle = () => {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        })
    }

    render() {
        return(
            <div>
                <div className="row" >
                    <div className="col-md-10">
                        <Input  placeholder="Search" ></Input>
                    </div>
                    <div className="col-md-2">
                        {/* <ButtonDropdown style={{'background-color':'#0c343d !important','width':'1%'}} isOpen={this.state.dropdownOpen} toggle={this.toggle}> */}
                        <ButtonDropdown style={{'background-color':'transparent','width':'1%'}} isOpen={this.state.dropdownOpen} toggle={this.toggle} disabled>
                        <DropdownToggle caret style={{'left':'-330px'}}>
                        </DropdownToggle  >
                        <DropdownMenu >
                            <DropdownItem header>
                            </DropdownItem>
                            <DropdownItem>
                                <Link className="btn btn-info" to={'/user'}><i className="fa fa-user-circle" style={{'color':'#ffffff'}} aria-hidden="true"></i> &nbsp;User Account</Link>
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>
                                <button className="btn btn-primary" ><i className="fa fa-sign-out" style={{'color':'#ffffff'}} aria-hidden="true"></i> &nbsp;Log out </button>
                                {/* <Link className="btn btn-primary" to={'/user'}><i className="fa fa-user-circle" style={{'color':'#ffffff'}} aria-hidden="true"></i> &nbsp;User Account</Link> */}
                            </DropdownItem>
                        </DropdownMenu>
                        </ButtonDropdown>
                    </div>
                </div> 

            </div>
        );
    }

}

export default QuickSearchComponent; 
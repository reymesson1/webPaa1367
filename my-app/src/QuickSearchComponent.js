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
            dropdownOpen: false,
            searchText: ""
        }  
    }
    toggle = () => {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        })
    }

    onChangeValue(value){

        if(value == ''){

            this.setState({

                searchText: value,
                dropdownOpen: false
            })

        }else{

            this.setState({

                searchText: value,
                dropdownOpen: true
            })
        }
    }

    render() {

        let filteredData = this.props.products.filter(

            (data, index) => data.description.toLowerCase().indexOf(this.state.searchText.toLowerCase()) !== -1 
        )


        return(
            <div>
                <div className="row" >
                    <div className="col-md-10">
                        <Input  placeholder="Search" name="search" id="search" onChange={e => this.onChangeValue(e.target.value)} ></Input>
                        {/* <Input  placeholder="Search" name="search" id="search" onChange={this.onChangeValue.bind(this)} ></Input> */}
                    </div>
                    <div className="col-md-2">
                        {/* <ButtonDropdown style={{'background-color':'#0c343d !important','width':'1%'}} isOpen={this.state.dropdownOpen} toggle={this.toggle}> */}
                        <ButtonDropdown style={{'background-color':'transparent','width':'1%'}} isOpen={this.state.dropdownOpen} toggle={this.toggle} disabled>
                        <DropdownToggle caret style={{'left':'-330px'}}>
                        </DropdownToggle  >
                        <DropdownMenu >
                            <DropdownItem header>
                            </DropdownItem>
                            {filteredData.slice(0,3).map(
                                (data, index) => <DropdownItem>
                                                    <div className="row">
                                                        <div className="col-md-4">
                                                            <div className="row">
                                                                &nbsp; 
                                                            </div>    
                                                            <div className="row">
                                                                <Link to={'/productdetail/'+data.id}> 
                                                                    <img src={this.props.URLExternal+"/images/"+ data.image}  alt="Avatar"/>
                                                                    {/* <img src={this.props.URLExternal+"/images/output-"+ data.description +  '-' + data.style + '-0.jpg' }  alt="Avatar" style={{"width":"100%","height":"100%"}}/> */}
                                                                </Link>
                                                            </div>    
                                                            <div className="row">
                                                                &nbsp; 
                                                            </div>    
                                                        </div>                                                    
                                                        <div className="col-md-8">
                                                            <div className="row">
                                                                <h5>{data.description}</h5> 
                                                            </div>   
                                                            <div className="row">
                                                                <p>{'Category: ' + data.category}</p> 
                                                            </div>   
                                                            <div className="row">
                                                                <p>{'Price: ' + data.price} </p>
                                                            </div>   
                                                        </div>                                                    
                                                    </div>
                                                    <DropdownItem divider />

                                                 </DropdownItem>
                                                 
                            )}
                        </DropdownMenu>
                        </ButtonDropdown>
                    </div>
                </div> 

            </div>
        );
    }

}

export default QuickSearchComponent; 
import React, { Component } from 'react';
import { Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Input, Media, Panel,   Card,
    CardBody,
    CardTitle,
    CardSubtitle } from 'reactstrap';

class CategoryComponent extends Component {

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
    }

    render() {
        
        return(
            <div className="container">
                <br/>
                <div className="row">
                <Link to={'/filter'}> 
                    <h5>Filter</h5>
                </Link>
                </div>
                <div className="row">
                        <Link className="box" to={'/home/bracelet'}> 
                            <div class="ribbon ribbon-top-right"><span>ribbon2</span></div>
                        </Link>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Link className="box" to={'/home/bracelet'}> 
                            <div class="ribbon ribbon-top-right"><span>ribbon2</span></div>
                        </Link>
                </div>
                <br/>
                <br/>
                <div className="row">
                    <div className="col-md-3">
                        <Link to={'/home/bracelet'}> 
                            <img src={this.props.URLExternal+"/images/folder.JPG"} style={{"width":"50%","height":"80%","margin-left":"26%"}}  alt="Avatar"/>
                            <h1>Bracelet</h1>
                        </Link>
                    </div>
                    <div className="col-md-3">
                        <Link to={'/home/rm'}> 
                            <img src={this.props.URLExternal+"/images/folder.JPG"} style={{"width":"50%","height":"80%","margin-left":"26%"}}  alt="Avatar"/>
                            <h1>RM</h1>
                        </Link>
                    </div>
                    <div className="col-md-3">
                        <Link to={'/home/rings'}> 
                            <img src={this.props.URLExternal+"/images/folder.JPG"} style={{"width":"50%","height":"80%","margin-left":"26%"}}  alt="Avatar"/>
                            <h1>Rings</h1>
                        </Link>
                    </div>
                    <div className="col-md-3">
                        <Link to={'/home/pendant'}> 
                            <img src={this.props.URLExternal+"/images/folder.JPG"} style={{"width":"50%","height":"80%","margin-left":"26%"}}  alt="Avatar"/>
                            <h1>Pendant</h1>
                        </Link>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-md-3">
                        <Link to={'/home/pins'}> 
                            <img src={this.props.URLExternal+"/images/folder.JPG"} style={{"width":"50%","height":"80%","margin-left":"26%"}}  alt="Avatar"/>
                            <h1>Pins</h1>
                        </Link>
                    </div>
                    <div className="col-md-3">
                    <Link to={'/home/necklace'}>                         
                            <img src={this.props.URLExternal+"/images/folder.JPG"} style={{"width":"50%","height":"80%","margin-left":"26%"}}  alt="Avatar"/>
                            <h1>Necklace</h1>
                    </Link>
                    </div>
                    <div className="col-md-3">
                    <Link to={'/home/earings'}> 
                            <img src={this.props.URLExternal+"/images/folder.JPG"} style={{"width":"50%","height":"80%","margin-left":"26%"}}  alt="Avatar"/>
                            <h1>Earings</h1>
                    </Link>
                    </div>
                    <div className="col-md-3">
                        <Link to={'/home/watches'}> 
                            <img src={this.props.URLExternal+"/images/folder.JPG"} style={{"width":"50%","height":"80%","margin-left":"26%"}}  alt="Avatar"/>
                            <h1>Watches</h1>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

}

export default CategoryComponent; 
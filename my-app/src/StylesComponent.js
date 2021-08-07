import React, { Component } from 'react';
import { Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Input, Media, Panel,   Card,
    CardBody,
    CardTitle,
    CardSubtitle } from 'reactstrap';

class StylesComponent extends Component {

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

        let filteredData = this.props.styles.filter(

            (data, index) => data.description.toLowerCase().indexOf(this.state.searchText.toLowerCase()) !== -1
        );
        
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
                            <Input type="text" onChange={this.onChangeField.bind(this)} placeholder="Search" ></Input>
                        </CardBody>
                    </Card>
                </div>
                <br/>
                <div className="row">
                    <div className="col-md-6">
                        <h1>&nbsp;</h1>
                    </div>
                    <div className="col-md-6">
                        <Link className="btn btn-dark" to={'/createstyle'} style={{'width':'100%'}}  >Create a New Style</Link>
                    </div>
                </div>
                <div className="row">
                <Table>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Description</th>
                    <th>Notes</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map(
                        (data, index) => 
                                            <tr>
                                                <td>{data.id}</td>
                                                <td>{data.description}</td>
                                                <td>{data.notes}</td>
                                            </tr>
                    )}
                </tbody>
                </Table>
                </div>
            </div>
        );
    }

}

export default StylesComponent; 
import React, { Component } from 'react';
import { Button } from 'reactstrap';

class ButtonDefaultComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }

    render(){

        console.log(this.props.data)
        return(
            <div className="container">
                <p style={{'color':'orange'}}>{'________'}</p>
                {/* <button className="btn btn-danger" onClick={this.onEditDeletePicture.bind(this, this.state.uploadingPic[0],data)} >Default</button> */}
            </div>    
        )
    }

}

export default ButtonDefaultComponent;
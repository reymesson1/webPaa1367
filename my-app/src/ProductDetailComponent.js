import React, { Component } from 'react';

class ProductDetailComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: 0
        }
    }

    componentDidMount(){
        // this.setState({
        //     id: this.props.params.id
        // })
    }

    render() {
        
        return(
            <div className="row">
                {/* <h1>Product Detail Component {this.state.id} </h1> */}
                {/* <h1>{"Product Detail Component" + this.props.params.id} </h1> */}
                <h1>{"Product Detail Component " + this.props.match.params.id} </h1>
            </div>
        );
    }

}

export default ProductDetailComponent; 
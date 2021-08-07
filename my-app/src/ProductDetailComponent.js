import React, { Component } from 'react';

class ProductDetailComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: 0,
            backgroundImage: `url(${this.props.URLExternal+'"/images/"+ '+ this.props.match.params.id})`,
            backgroundPosition: '0% 0%',
            src: this.props.URLExternal+"/images/"+ this.props.match.params.id
        }
    }

    componentDidMount(){
        this.setState({
            id: this.props.match.params.id,
            backgroundImage: `url(${this.props.URLExternal+"/images/"+ this.props.match.params.id})`,
        })
    }

    handleMouseMove = e => {
        const { left, top, width, height } = e.target.getBoundingClientRect()
        const x = (e.pageX - left) / width * 100
        const y = (e.pageY - top) / height * 100
        this.setState({ backgroundPosition: `${x}% ${y}%` })
    }
    

    render() {
        
        return(
            <div className="container">
                <div className="row">
                    <div className="card" style={{'margin':'5%'}}>
                        <div className="row">
                            <div className="col-md-7">
                                <figure onMouseMove={this.handleMouseMove} style={this.state}>
                                    <img src={this.state.src} alt="Avatar" style={{"width":"100%","height":"100%"}} />
                                </figure>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default ProductDetailComponent; 
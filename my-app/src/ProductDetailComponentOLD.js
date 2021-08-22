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
        });


    }

    handleMouseMove = e => {
        const { left, top, width, height } = e.target.getBoundingClientRect()
        const x = (e.pageX - left) / width * 100
        const y = (e.pageY - top) / height * 100
        this.setState({ backgroundPosition: `${x}% ${y}%` })
    }

    onClicked(event){

        console.log(event);
    }
    

    render() {

        let filterData = this.props.products.filter(

            (data, index) => data.image.indexOf(this.props.match.params.id) !== -1 
        );
        
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="card" style={{'margin':'5%'}}>
                            <div className="row">
                                <div className="col-md-7">
                                    <figure onMouseMove={this.handleMouseMove} style={this.state}>
                                        <img src={this.state.src} alt="Avatar" style={{"width":"100%","height":"100%"}} />
                                    </figure>
                                </div>
                            </div>
                            <div className="row">
                                {filterData[0].images.map(
                                    (data, index) =>
                                    <div className="col-md-3">
                                        <img onClick={this.onClicked.bind(this)} src={this.props.URLExternal+"/images/"+data} ></img>
                                    </div>                                         
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <br/>
                        <br/>
                        <div className="row">
                            <div className="col-md-6">
                                <h4>Style Number:</h4>
                            </div>
                            <div className="col-md-6">
                                <p>{filterData[0].description}</p>
                            </div>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="col-md-6">
                                <h4>Style:</h4>
                            </div>
                            <div className="col-md-6">
                                <p>{filterData[0].style}</p>
                            </div>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="col-md-6">
                                <h4>Company:</h4>
                            </div>
                            <div className="col-md-6">
                                <p>{filterData[0].company}</p>
                            </div>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="col-md-6">
                                <h4>Company Style:</h4>
                            </div>
                            <div className="col-md-6">
                                <p>{filterData[0].companystyle}</p>
                            </div>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="col-md-6">
                                <h4>Price:</h4>
                            </div>
                            <div className="col-md-6">
                                <p>{filterData[0].price}</p>
                            </div>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="col-md-6">
                                <h4>Price Opt:</h4>
                            </div>
                            <div className="col-md-6">
                                <p>{filterData[0].priceopt}</p>
                            </div>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="col-md-6">
                                <h4>Category:</h4>
                            </div>
                            <div className="col-md-6">
                                <p>{filterData[0].category}</p>
                            </div>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="col-md-6">
                                <h4>Notes:</h4>
                            </div>
                            <div className="col-md-6">
                                <p>{filterData[0].notes}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default ProductDetailComponent; 
import React, { Component } from 'react';

const src = 'https://images.unsplash.com/photo-1444065381814-865dc9da92c0'

class ProductDetailComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: 0,
            backgroundImage: `url(${src})`,
            // backgroundImage: '',
            backgroundPosition: '0% 0%'
        }
    }

    componentDidMount(){
        this.setState({
            id: this.props.match.params.id
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
                            <div className="col-md-6">
                                <figure onMouseMove={this.handleMouseMove} style={this.state}>
                                    {/* <img src={"http://localhost:8085/executed/"+ this.state.id + ".png"}  alt="Avatar" style={{"width":"100%","height":"100%"}}/> */}
                                    <img src={src} />
                                </figure>
                            </div>
                            <div className="col-md-6">
                                {/* <h3>{"Product Detail Component " + this.state.id} </h3> */}
                                <div class="card-body">
                                    <div className="row">
                                        <h5 class="card-title">{"Product Detail Component " + this.state.id}</h5>
                                        <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley .</p>
                                    </div>
                                    <hr/>
                                    <div className="row">
                                        <h5 class="card-title">{"Company " + this.state.id}</h5>
                                        <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley .</p>
                                    </div>
                                    <hr/>
                                    <div className="row">
                                        <h5 class="card-title">{"Company Style " + this.state.id}</h5>
                                        <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley .</p>
                                    </div>
                                    <hr/>
                                    <div className="row">
                                        <h5 class="card-title">{"Price " + this.state.id}</h5>
                                        <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley .</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        {/* <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div> */}
                    </div>
                    {/* <div class="card" style="width: 18rem;"> */}
                        {/* <img class="card-img-top" src="..." alt="Card image cap"> */}
                        {/* <img src={"http://localhost:8085/executed/"+ this.state.id + ".png"}  alt="Avatar" style={{"width":"100%","height":"100%"}}/> */}
                        {/* <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div> */}
                    {/* </div> */}
                </div>
            </div>
        );
    }

}

export default ProductDetailComponent; 
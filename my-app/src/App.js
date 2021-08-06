import React, { useState, Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button,
  Container,
  Modal,
  ModalTitle,
  ModalHeader,
  ModalBody,
  ModalFooter, Panel  } from 'reactstrap';
import Product from './ProductComponent';
import NavbarComponent from './NavbarComponent';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import HomeComponent from './HomeComponent';
import CompanyComponent from './CompanyComponent';
import StylesComponent from './StylesComponent';
import ProductDetailComponent from './ProductDetailComponent';
import CreateProductComponent from './CreateProductComponent';
import  axios  from 'axios'

let API_URL = "http://localhost:8085";
// let API_URL = "http://143.198.124.234:8085";

const API_HEADERS = {

  'Content-Type':'application/json',
  Authentication: 'any-string-you-like'
}

class App extends Component {

  constructor(props) {
      super(props);
      this.state = {
          showModal: false,
          newest: true,
          filterText: "",
          image: "",
          orders:[{
            id : "0001",
            orderDetails:[],
            subtotal: "0.00",
            total: "0.00"
          }],
          products: [],
          fileUploaded: false
        }

        this.toggleModal = this.toggleModal.bind(this);

    }

    componentDidMount(){

        fetch(API_URL+'/master')
        .then((response)=>response.json())
        .then((responseData)=>{
            console.log(responseData);
            this.setState({

                // products: responseData
            })
        })
        .catch((error)=>{
            console.log('Error fetching and parsing data', error);
        })

        fetch(API_URL+'/product')
        .then((response)=>response.json())
        .then((responseData)=>{
            console.log(responseData);
            this.setState({

                products: responseData
            })
        })
        .catch((error)=>{
            console.log('Error fetching and parsing data', error);
        })

        fetch(API_URL+'/order')
        .then((response)=>response.json())
        .then((responseData)=>{
            console.log(responseData);
            this.setState({

                orders: responseData
            })
        })
        .catch((error)=>{
            console.log('Error fetching and parsing data', error);
        })

    }

    addToCart(event){
      event.preventDefault();

      let nextState = this.state.orders;

      // let today = moment(new Date()).format('YYYY-MM-DD');

      let parseId = JSON.parse(event.target.value);

      let newItem = {

          "id": parseId.id,
          "date": "04-28-2021",
          "description": parseId.description,
          "price": parseId.price
      }

      nextState[0].orderDetails.push(newItem);

      this.setState({
          orders: nextState
      });

      // console.log(this.state.orders);

    }

    deleteItem(event){

      event.preventDefault();

      let nextState = this.state.orders;

      // let parseId = JSON.parse(event.target.value);

      console.log(event.target.value);

      console.log(this.state.orders);

      // console.log(parseId)

      nextState[0].orderDetails.splice(0,1);

      // this.setState({
      //     orders: nextState
      // });


    }

    search(event){

      this.setState({
        filterText: event.target.value
      })

    }

    doCheckout(event){

      event.preventDefault();

      let nextState = this.state.orders;

      nextState[0].orderDetails = [];

      this.toggleModal();

      this.setState({
          orders: nextState
      });


    }

    toggleModal() {
      console.log("hello");
      this.setState({
        showModal: !this.state.showModal
      })
    }
 
    newestClicked(){

      console.log('newest');
      this.setState({
        newest : true
      })
    } 

    oldestClicked(){

      this.setState({
        newest : false
      })

      console.log('oldest');
    } 

    onClickPagination(event){

      fetch(API_URL+'/pagination', {

              method: 'post',
              headers: API_HEADERS,
              body: JSON.stringify({"id":"1","paginationNumber":"1"})
      })
      .then((response)=>response.json())
      .then((responseData)=>{
              this.setState({

                  masterAPI: responseData
              })
      })

      console.log('test from App.js')
    }

    onCreateProductUpload(event){

      this.setState({
        fileUploaded: true
      })

      if (event.target.files && event.target.files[0]) {
        let img = event.target.files[0];
        this.setState({
          image: img
        });  
      }
  

    }
    onCreateProduct(event){

      // event.preventDefault(); 

      const data = new FormData();
      data.append("description",event.target.description.value);
      data.append("price", event.target.price.value);
      data.append("company", event.target.company.value);
      data.append("style", event.target.style.value);
      data.append("single-file", this.state.image);

      axios({
          url: API_URL+'/createproduct',
          method: "POST",
          headers: {
            authorization: 'done'              
          },
          data: data
      }).then((res)=>{

      });

      console.log('create new product from App.js')
    }

    render(){
      
      return (
        <div className="App">
          <Modal isOpen={this.state.showModal} toggle={this.toggleModal}>
            <ModalHeader>
              <p>Transaction ID 00001</p>
            </ModalHeader>
            <ModalBody>
              Your checkout has been successfully completed.
            </ModalBody>
            <ModalFooter>  
              <button className="btn btn-white" onClick={this.toggleModal} >Close</button>
            </ModalFooter>
          </Modal>
          
          <BrowserRouter>

          <NavbarComponent
            doCheckout={this.doCheckout.bind(this)}
            deleteItem={this.deleteItem.bind(this)}
            search={this.search.bind(this)}
            orders={this.state.orders}
          />  
          <Route path="/" exact component= {HomeComponent}   />
          <Route path="/companies" component= {CompanyComponent}   />
          <Route path="/styles" component= {StylesComponent}   />
          <Route path="/styles" component= {StylesComponent}   />
          <Route path="/createproduct" component= {() => <CreateProductComponent 
                      onCreateProduct={this.onCreateProduct.bind(this)}
                      onCreateProductUpload={this.onCreateProductUpload.bind(this)}
                      fileUploaded={this.state.fileUploaded}
                      /> } 
          />
          <Route path="/productdetail/:id" component={ProductDetailComponent}/>
          <Route path="/product" component= {() => <Product
                      newest={this.state.newest}
                      filterText={this.state.filterText}
                      orders={this.state.orders}
                      products={this.state.products}
                      addToCart={this.addToCart.bind(this)}    
                      onClickPagination={this.onClickPagination.bind(this)}            
                      />}    
           />
          </BrowserRouter>          
        </div>
      );
  }
}

export default App;

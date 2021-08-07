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
import CreateStyleComponent from './CreateStyleComponent';
import CreateCompanyComponent from './CreateCompanyComponent';
import  axios  from 'axios'

// let API_URL = "http://localhost:8085";
let API_URL = "http://143.198.171.44:8085";

const API_HEADERS = {

  'Content-Type':'application/json',
  Authentication: 'any-string-you-like'
}


class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
        URLExternal: 'http://143.198.171.44:8085',
          // URLExternal: 'http://localhost:8085',
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
          fileUploaded: false,
          styles: [],
          companies: [],
          productHiddenBtn: false
        }

        this.toggleModal = this.toggleModal.bind(this);

    }

    componentDidMount(){

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

        fetch(API_URL+'/style')
        .then((response)=>response.json())
        .then((responseData)=>{
            console.log(responseData);
            this.setState({

                styles: responseData
            })
        })
        .catch((error)=>{
            console.log('Error fetching and parsing data', error);
        })

        fetch(API_URL+'/companies')
        .then((response)=>response.json())
        .then((responseData)=>{
            console.log(responseData);
            this.setState({

                companies: responseData
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

      event.preventDefault(); 

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

      let newProduct = {

        "id": Date.now(),
        "description": event.target.description.value,
        "price": event.target.price.value,
        "company": event.target.company.value,
        "style": event.target.style.value,  
        "category": event.target.category.value,  
        "image": event.target.description.value +'-'+ event.target.style.value + '.jpg' 
      }

      fetch(API_URL+'/createproduct2', {

        method: 'post',
        headers: API_HEADERS,
        body: JSON.stringify(newProduct)
      })


      console.log('create new product from App.js')

      this.setState({
        productHiddenBtn: true
      })

      setTimeout(() => {
        window.location.reload()
      }, 2000);

    }

    onCreateStyle(event){

      // event.preventDefault(); 

      let newStyle = {

        "id": Date.now(),
        "description": event.target.description.value,
        "notes": event.target.notes.value
      }

      fetch(API_URL+'/createstyle', {

        method: 'post',
        headers: API_HEADERS,
        body: JSON.stringify(newStyle)
      })

      // axios({
      //     url: API_URL+'/createstyle',
      //     method: "POST",
      //     headers: {
      //       authorization: 'done'              
      //     },
      //     data: data
      // }).then((res)=>{

      // });

      console.log('create new style from App.js')
    }

    onCreateCompany(event){

      event.preventDefault(); 

      let newStyle = {

        "id": Date.now(),
        "description": event.target.description.value,
        "notes": event.target.notes.value
      }

      fetch(API_URL+'/createcompany', {

        method: 'post',
        headers: API_HEADERS,
        body: JSON.stringify(newStyle)
      })

      // axios({
      //     url: API_URL+'/createstyle',
      //     method: "POST",
      //     headers: {
      //       authorization: 'done'              
      //     },
      //     data: data
      // }).then((res)=>{

      // });

      console.log('create new company from App.js')
    }

    onEditProduct(id){

      console.log('Clicked edit '+ id);
    }

    onDeleteProduct(id){

      let deleteProduct = {

        "id": id
      }

      fetch(API_URL+'/deleteproduct', {

        method: 'post',
        headers: API_HEADERS,
        body: JSON.stringify(deleteProduct)
      })

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
          <Route path="/" exact component= {() => <HomeComponent   
                    URLExternal={this.state.URLExternal}
                    newest={this.state.newest}
                    filterText={this.state.filterText}
                    orders={this.state.orders}
                    products={this.state.products}
                    addToCart={this.addToCart.bind(this)}    
                    onClickPagination={this.onClickPagination.bind(this)}    
                            
                    />}
          />
          <Route path="/styles" component= {() => <StylesComponent
                    styles={this.state.styles} 
                    
                    />}
          />
          <Route path="/companies" component= {() => <CompanyComponent
                    companies={this.state.companies} 
                    
                    />}
          />
          <Route path="/createproduct" component= {() => <CreateProductComponent 
                      onCreateProduct={this.onCreateProduct.bind(this)}
                      onCreateProductUpload={this.onCreateProductUpload.bind(this)}
                      fileUploaded={this.state.fileUploaded}
                      styles={this.state.styles}
                      companies={this.state.companies}
                      productHiddenBtn={this.state.productHiddenBtn}
                      /> } 
          />
          <Route path="/createstyle" component= {() => <CreateStyleComponent 
                      onCreateStyle={this.onCreateStyle.bind(this)}
                      /> } 
          />
          <Route path="/createcompany" component= {() => <CreateCompanyComponent 
                      onCreateCompany={this.onCreateCompany.bind(this)}
                      /> } 
          />
         <Route 
              path="/productdetail/:id" 
              location={this.props.location} 
              render={({ 
                  location, 
                  match 
              }) => (
                  <ProductDetailComponent match={match}
                    URLExternal={this.state.URLExternal}   
                  />
              )} 
    />
          <Route path="/product" component= {() => <Product
                    products={this.state.products} 
                    onEditProduct={this.onEditProduct.bind(this)} 
                    onDeleteProduct={this.onDeleteProduct.bind(this)} 
                />}
          />
          {/* <Route path="/product" component= {() => <Product
                      newest={this.state.newest}
                      filterText={this.state.filterText}
                      orders={this.state.orders}
                      products={this.state.products}
                      addToCart={this.addToCart.bind(this)}    
                      onClickPagination={this.onClickPagination.bind(this)}            
                      />}    
           /> */}
          </BrowserRouter>          
        </div>
      );
  }
}

export default App;

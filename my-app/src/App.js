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
import CategoryComponent from './CategoryComponent';
import EditProductComponent from './EditProductComponent';
import FilterComponent from './FilterComponent';
import ProductDetailZoomComponent from './ProductDetailZoomComponent';
import FavoriteComponent from './FavoriteComponent';
import  axios  from 'axios'
import UserComponent from './UserComponent';
import { Col, Form, FormGroup, Label, Input, FormText, FormFeedback, Fade } from 'reactstrap';

// let API_URL = "http://localhost:8085";
let API_URL = "http://143.198.171.44:8085"; 

const token = "token";

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
          images: [],
          orders:[{
            id : "0001",
            orderDetails:[],
            subtotal: "0.00",
            total: "0.00"
          }],
          products: [],
          users: [],
          fileUploaded: false,
          styles: [],
          companies: [],
          productHiddenBtn: false,
          productLoadingModal: false,
          productLoadingModalLabel: "Loading...",
          productLoadingModalLabelPcnt: "0",
          productLoadingModalMessageErrorLabel: "Loading...",
          productLoadingModalMessageError: false,
          onHiddenMode: true,
          file: null,
          fileName: "",
          defaultImageSelected: {},
          progressImage: 0,
          isModalLoginOpen: true,
          isModalLoginError: false,
          username: '',
          password: '',
          touched:{
              username: false,
              password : false    
          }
        }

        this.toggleModal = this.toggleModal.bind(this);

    }

    //Todo metodo que actualice el products debe estar App.js
    componentDidMount(){

      fetch(API_URL+'/product')
        .then((response)=>response.json())
        .then((responseData)=>{
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
            this.setState({

                companies: responseData
            })
        })
        .catch((error)=>{
            console.log('Error fetching and parsing data', error);
        })

        fetch(API_URL+'/gethiddenmode')
        .then((response)=>response.json())
        .then((responseData)=>{
            this.setState({

                onHiddenMode: responseData.hidden
            })
        })
        .catch((error)=>{
            console.log('Error fetching and parsing data', error);
        })

        // if(localStorage.getItem("token").length>0){
        //   console.log("logged");
        //   this.setState({
        //     isModalLoginOpen: false
        //   })
        // }else{
        //   this.setState({
        //     isModalLoginOpen: true
        //   })          
        // }

        // if(this.isAuthenticated()){

        //   this.setState({
        //     isModalLoginOpen: false
        //   })          

        // }

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


      if (event.target.files && event.target.files[0]) {
        let img = event.target.files[0];
        this.setState({
          image: img,
          images: event.target.files,
          file: URL.createObjectURL(event.target.files[0]),
          fileName: event.target.files[0].name
        });  
      }

    }
    onCreateProduct(event){

      event.preventDefault(); 

      this.setState({
        productLoadingModalLabel: "Loading....",
        fileUploaded: true,
        productHiddenBtn: true
      })


      let trimDescription = event.target.description.value;
      let replaced = trimDescription.split(' ').join('');

      const data = new FormData();
      data.append("description", replaced);
      data.append("price", event.target.price.value);
      data.append("company", event.target.company.value);
      data.append("style", event.target.style.value);

      for (let i = 0; i < this.state.images.length; i++) {
        data.append('single-file', this.state.images[i])
      }

      let imagesArr = [];

      for (let i = 0; i < this.state.images.length; i++) {  
          imagesArr.push(replaced +'-'+ event.target.style.value+'-'+i+'.jpg');
      }

      let newProduct = {

        "id": Date.now(),
        "description": replaced,
        "price": event.target.price.value,
        "company": event.target.company.value,
        "style": event.target.style.value,  
        "companystyle": event.target.companystyle.value,  
        "category": event.target.category.value,  
        "priceopt": event.target.priceopt.value,  
        "notes": event.target.notes.value,  
        "favorite": false,  
        "hidden": false,  
        "image": replaced +'-'+ event.target.style.value + '-0.jpg',
        "images": imagesArr
      }
    
      axios.post(API_URL+'/createproduct', data, {
        onUploadProgress: ProgressEvent =>{
          console.log('Progress ' + Math.round(  ProgressEvent.loaded / ProgressEvent.total * 100 ) + '%');
          let dataProgress = Math.round(  ProgressEvent.loaded / ProgressEvent.total * 100 );
          this.setState({
            productLoadingModalLabel:  dataProgress + "%",
            productLoadingModalLabelPcnt: dataProgress
          })  
          if(dataProgress == 100){

            this.setState({
              productLoadingModal: true,
              productLoadingModalLabel: "Image uploaded successfully completed"             
            });
            
            fetch(API_URL+'/createproduct3', {

              method: 'post',
              headers: API_HEADERS,
              body: JSON.stringify(newProduct)
            })

          }
        }
      }).then((res)=>{
        console.log(res);
      });

      fetch(API_URL+'/createproduct2', {

        method: 'post',
        headers: API_HEADERS,
        body: JSON.stringify(newProduct)
      });

    }

    onCreateStyle(event){

      event.preventDefault(); 

      var trimDescription = event.target.description.value;
      var replaced = trimDescription.split(' ').join('');


      let newStyle = {

        "id": Date.now(),
        "description": replaced,
        "notes": event.target.notes.value
      }

      let nextState = this.state.styles;

      nextState.push(newStyle);

      this.setState({

        styles: nextState
      })

      fetch(API_URL+'/createstyle', {

        method: 'post',
        headers: API_HEADERS,
        body: JSON.stringify(newStyle)
      })

      // setTimeout(() => {
      //   window.location.reload();
      // }, 500);

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

      let newCompany = {

        "id": Date.now(),
        "description": event.target.description.value,
        "notes": event.target.notes.value
      }

      let nextState = this.state.companies;

      nextState.push(newCompany);

      this.setState({

        companies: nextState
      })

      fetch(API_URL+'/createcompany', {

        method: 'post',
        headers: API_HEADERS,
        body: JSON.stringify(newCompany)
      })

      // setTimeout(() => {
      //   window.location.reload();
      // }, 500);

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

    onEditProduct(event,id){

      event.preventDefault();

      let nextState = this.state.products.filter(

        (data, index) => data.id.indexOf(event.target.id.value) !== -1
      );

      this.setState({
        // productLoadingModal: true,
        productLoadingModalLabel: "Loading....",
        fileUploaded: true,
        productHiddenBtn: true
      })

      let trimDescription = event.target.description.value;
      let replaced = trimDescription.split(' ').join('');

      let trimImages = event.target.images.value;
      let replacedImages = trimImages.split(',');

      let imagesLen = replacedImages.length;

      let newImage = replaced +'-'+ event.target.style.value + '-'+ imagesLen +'.jpg';

      nextState[0].images.push(newImage);

      const data = new FormData();
      data.append("description", replaced);
      data.append("price", event.target.price.value);
      data.append("company", event.target.company.value);
      data.append("style", event.target.style.value);
      data.append("newimage", newImage);

      for (let i = 0; i < this.state.images.length; i++) {
        data.append('single-file', this.state.images[i])
      }

      // axios({
      //     url: API_URL+'/editpictureproduct',
      //     method: "POST",
      //     headers: {
      //       authorization: 'done'              
      //     },
      //     data: data
      // }).then((res)=>{

      // });

      replacedImages.push(newImage);

      let editProduct = {
        "id": event.target.id.value,
        "description": event.target.description.value,
        "price": event.target.price.value,
        "priceopt": event.target.priceopt.value,
        "company": event.target.company.value,
        "companystyle": event.target.companystyle.value,
        "category": event.target.category.value,
        "style": event.target.style.value,
        "notes": event.target.notes.value,
        "image": newImage,
        "images": replacedImages,
      }

      axios.post(API_URL+'/editpictureproduct', data, {
        onUploadProgress: ProgressEvent =>{
          console.log('Progress ' + Math.round(  ProgressEvent.loaded / ProgressEvent.total * 100 ) + '%');
          let dataProgress = Math.round(  ProgressEvent.loaded / ProgressEvent.total * 100 );
          this.setState({
            productLoadingModalLabel:  dataProgress + '%',
            productLoadingModalLabelPcnt: dataProgress
          })  
          if(dataProgress == 100){

            this.setState({
              productHiddenBtn: false,
              productLoadingModal: true,
              productLoadingModalLabel: "Image uploaded successfully completed"             
            })  

            fetch(API_URL+'/createproduct3', {

              method: 'post',
              headers: API_HEADERS,
              body: JSON.stringify(editProduct)
            })





          }

        }
      }).then((res)=>{
        console.log(res);
      });

      fetch(API_URL+'/editproduct', {

        method: 'post',
        headers: API_HEADERS,
        body: JSON.stringify(editProduct)
      })

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

      setTimeout(() => {
        window.location.reload()
      }, 500);

    }

    onDeleteCompany(id){

      let deleteProduct = {

        "id": id
      }

      fetch(API_URL+'/deletecompany', {

        method: 'post',
        headers: API_HEADERS,
        body: JSON.stringify(deleteProduct)
      })

      setTimeout(() => {
        window.location.reload()
      }, 500);

    }
    onDeleteStyle(id){

      let deleteProduct = {

        "id": id
      }

      fetch(API_URL+'/deletestyle', {

        method: 'post',
        headers: API_HEADERS,
        body: JSON.stringify(deleteProduct)
      })

      setTimeout(() => {
        window.location.reload()
      }, 500);

    }

    onHiddenApp(event){

      let newHiddenApp = {

        "onhiddenmode": this.state.onHiddenMode
      }

      fetch(API_URL+'/onhiddenmode', {

        method: 'post',
        headers: API_HEADERS,
        body: JSON.stringify(newHiddenApp)
      })

      setTimeout(() => {
        window.location.reload()
      }, 500);

    }

    imageClickEdit = (dataImage, dataId) => {
      // console.log(dataImage.id);//id product
      // console.log(dataId);//image name
      let objSelected = {
        "productId": dataImage.id,
        "name": dataId
      }
      let nextState = this.state.products.filter(

        (data, index) => data.id.indexOf(dataImage.id) !== -1
      );
      nextState[0].image = dataId
      this.setState({
        products: nextState,
        defaultImageSelected: objSelected
      })
      // console.log(nextState);
    }

    defaultImageSelectedFunc(){

      console.log(this.state.defaultImageSelected);

      this.setState({
        productLoadingModal: true,
        productLoadingModalLabel: "Image default selected was successfully completed"             
      })  


      fetch(API_URL+'/defaultimage', {

        method: 'post',
        headers: API_HEADERS,
        body: JSON.stringify(this.state.defaultImageSelected)
      })

    }

    onEditDeletePicture(dataImage, dataId){

      let nextState = this.state.products.filter(

        (data, index) => data.id.indexOf(dataImage.id) !== -1
      );

      let nextStateFilter = nextState[0].images.filter(

        (data, index) => data.indexOf(dataId) !== 0
      );

      nextState[0].images = nextStateFilter

      this.setState({
        products: nextState
      })

      let objSelected = {
        "productId": dataImage.id,
        "name": dataId,
        "images": nextStateFilter
      }

      fetch(API_URL+'/editdeletepicture', {

        method: 'post',
        headers: API_HEADERS,
        body: JSON.stringify(objSelected)
      })

    }

    onEditCloseModal(event){

      this.setState({
        productLoadingModal: false
      })


    }

    onClickFavoriteToggle(dataImage, dataId){

      let nextState = this.state.products.filter(

        (data, index) => data.id.indexOf(dataImage.id) !== -1
      );
      
      nextState[0].favorite = !nextState[0].favorite
      
      this.setState({
        products: nextState
      })

      let objSelected = {
        "productId": dataImage.id,
        "favorite": nextState[0].favorite,
      }

      fetch(API_URL+'/setfavorite', {

        method: 'post',
        headers: API_HEADERS,
        body: JSON.stringify(objSelected)
      })

    } 

    onSubmitLogin(event){

      event.preventDefault();

      let newLogin = {

        "username": event.target.username.value,
        "password": event.target.password.value
      }

      console.log('send!')

      fetch(API_URL+'/login', {

        method: 'post',
        headers: API_HEADERS,
        body: JSON.stringify(newLogin)
      })
      .then((response)=>response.json())
      .then((responseData)=>{
          console.log(responseData);  

          if(responseData.token){
            this.setState({
              isModalLoginOpen: false
            })    
            localStorage.setItem("token", responseData.token);
            window.location.reload();
            document.documentElement.webkitRequestFullScreen()

          }else{
            console.log('login fault');
            this.setState({
              isModalLoginError: true
            })
            setTimeout(() => {

              this.setState({
                isModalLoginError: false
              })
  
            }, 2000);
          }

      })


    }

    isAuthenticated(){
      return !!localStorage.getItem("token");
    }


    handleBlur = (field) => (evt) =>{

      this.setState({
          touched: { ...this.state.touched, [field]: true }
      })

  }

  validate(username, password){

      const errors = {
          username: '',
          password: ''
      }

      if(this.state.touched.username && username.length < 3){
          errors.username = "User Name should be >= 3 characters"
      }
      if(this.state.touched.password && password.length < 3){
          errors.password = "Password should be >= 3 characters"
      }

      return errors;
      
  }

  onUserNameChangeLogin(value){
    this.setState({
        username: value
    })
  }
  onPasswordChangeLogin(value){
      this.setState({
          password: value
      })
  }




    render(){

      const errors = this.validate(this.state.username,this.state.password);

      let submitButton
      
      if((this.state.username === '') ||(this.state.password === '') ){

          submitButton = <Input type="submit" className="btn btn-success" name="image" id="image" placeholder="Image" disabled />
      }else{
          
          submitButton = <Input type="submit" className="btn btn-success" name="image" id="image" placeholder="Image" />
      }

      let logged

      if(this.isAuthenticated()){

        logged = false
      }else{

        logged = true
      }

      let passwordError
      
      passwordError = <Fade in={this.state.isModalLoginError}><div class="alert alert-dismissible alert-danger"><button type="button" class="btn-close" data-bs-dismiss="alert"></button><p class="mb-0">Best check yo self, you're no.</p></div></Fade>
      
      return (
        <div className="App">
                {/* <Modal isOpen={this.state.isModalLoginOpen}> */}
                <Modal isOpen={logged}>
                    <ModalHeader >
                        <div className="row">
                                <p>{'Login'}</p>                                
                        </div>

                    </ModalHeader>
                    <ModalBody>

                    {passwordError}

                    <Form name="contact-form" onSubmit={this.onSubmitLogin.bind(this)}>
                    {/* <Form name="contact-form"> */}
                                <FormGroup row>
                                    <Label for="username" sm={1}>&nbsp;</Label>
                                    <Label for="username" sm={4}>User Name</Label>
                                    <Col sm={7}>
                                    <Input type="text" name="username" id="username" placeholder="User Name" 
                                        onBlur={this.handleBlur('username')}
                                        valid={this.state.username.length >= 3 }
                                        invalid={this.state.username.length < 3 }
                                        onChange={e => this.onUserNameChangeLogin(e.target.value)}
                                        value={this.state.username}                                      
                                    />
                                    <FormFeedback>{errors.username}</FormFeedback>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="password" sm={1}>&nbsp;</Label>
                                    <Label for="password" sm={4}>Password</Label>
                                    <Col sm={7}>
                                    <Input type="password" name="password" id="password" placeholder="Password" 
                                        onBlur={this.handleBlur('password')}
                                        valid={this.state.password.length >= 3 }
                                        invalid={this.state.password.length < 3 }
                                        onChange={e => this.onPasswordChangeLogin(e.target.value)}
                                        value={this.state.password}                                      
                                    />
                                    <FormFeedback>{errors.password}</FormFeedback>
                                    </Col>
                                </FormGroup>
                                <br/>
                                <br/>
                                <FormGroup row>
                                    <Label for="style" sm={2}>&nbsp;</Label>
                                    <Col sm={10}>
                                        {submitButton}
                                        {/* <Input type="submit" className="btn btn-success" name="image" id="image" placeholder="Image" /> */}
                                    </Col>
                                </FormGroup>
                        </Form>


                    </ModalBody>
                </Modal>
          
          <BrowserRouter>

          <NavbarComponent
            doCheckout={this.doCheckout.bind(this)}
            deleteItem={this.deleteItem.bind(this)}
            search={this.search.bind(this)}
            orders={this.state.orders}
            onHiddenApp={this.onHiddenApp.bind(this)}
            onHiddenMode={this.state.onHiddenMode}
          />  
          <Route path="/" exact component= {() => <CategoryComponent
                    URLExternal={this.state.URLExternal}
                />}
          />
          <Route 
              path="/home/:id" 
              location={this.props.location} 
              render={({ 
                  location, 
                  match 
              }) => (
                  <HomeComponent match={match}
                    URLExternal={this.state.URLExternal}
                    newest={this.state.newest}
                    filterText={this.state.filterText}
                    orders={this.state.orders}
                    products={this.state.products}
                    addToCart={this.addToCart.bind(this)}    
                    onClickPagination={this.onClickPagination.bind(this)}    
                />
              )} 
          />
          <Route path="/styles" component= {() => <StylesComponent
                    styles={this.state.styles} 
                    onDeleteStyle={this.onDeleteStyle.bind(this)} 
                    />}
          />
          <Route path="/companies" component= {() => <CompanyComponent
                    companies={this.state.companies} 
                    onDeleteCompany={this.onDeleteCompany.bind(this)} 
                    />}
          />
          <Route path="/filter" component= {() => <FilterComponent
                    companies={this.state.companies} 
                    onDeleteCompany={this.onDeleteCompany.bind(this)} 
                    onCreateCompany={this.onCreateCompany.bind(this)} 
                    onCreateProduct={this.onCreateProduct.bind(this)}
                    onCreateProductUpload={this.onCreateProductUpload.bind(this)}
                    fileUploaded={this.state.fileUploaded}
                    styles={this.state.styles}
                    companies={this.state.companies}
                    productHiddenBtn={this.state.productHiddenBtn}
                    onCreateCompany={this.onCreateCompany.bind(this)}
                    onCreateStyle={this.onCreateStyle.bind(this)}
                    file={this.state.file}
                    fileName={this.state.fileName}
                    productLoadingModal={this.state.productLoadingModal}
                    productLoadingModalLabel={this.state.productLoadingModalLabel}
                    URLExternal={this.state.URLExternal}

                    />}
          />
          <Route path="/favorite" component= {() => <FavoriteComponent          
                    products={this.state.products} 
                    companies={this.state.companies} 
                    onClickFavoriteToggle={this.onClickFavoriteToggle.bind(this)} 
                    onDeleteCompany={this.onDeleteCompany.bind(this)} 
                    onCreateCompany={this.onCreateCompany.bind(this)} 
                    onCreateProduct={this.onCreateProduct.bind(this)}
                    onCreateProductUpload={this.onCreateProductUpload.bind(this)}
                    fileUploaded={this.state.fileUploaded}
                    styles={this.state.styles}
                    productHiddenBtn={this.state.productHiddenBtn}
                    onCreateCompany={this.onCreateCompany.bind(this)}
                    onCreateStyle={this.onCreateStyle.bind(this)}
                    file={this.state.file}
                    fileName={this.state.fileName}
                    productLoadingModal={this.state.productLoadingModal}
                    productLoadingModalLabel={this.state.productLoadingModalLabel}
                    URLExternal={this.state.URLExternal}

                    />}
          />
          <Route path="/createproduct" component= {() => <CreateProductComponent 
                      onCreateProduct={this.onCreateProduct.bind(this)}
                      onCreateProductUpload={this.onCreateProductUpload.bind(this)}
                      fileUploaded={this.state.fileUploaded}
                      styles={this.state.styles}
                      companies={this.state.companies}
                      productHiddenBtn={this.state.productHiddenBtn}
                      onCreateCompany={this.onCreateCompany.bind(this)}
                      onCreateStyle={this.onCreateStyle.bind(this)}
                      file={this.state.file}
                      fileName={this.state.fileName}
                      productLoadingModal={this.state.productLoadingModal}
                      productLoadingModalLabel={this.state.productLoadingModalLabel}
                      productLoadingModalMessageError={this.state.productLoadingModalMessageError}
                      productLoadingModalMessageErrorLabel={this.state.productLoadingModalMessageErrorLabel}
                      productLoadingModalLabelPcnt={this.state.productLoadingModalLabelPcnt}
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
                    onClickFavoriteToggle={this.onClickFavoriteToggle.bind(this)} 
                    URLExternal={this.state.URLExternal}  
                    products={this.state.products} 
                    onCreateProduct={this.onCreateProduct.bind(this)}
                    onCreateProductUpload={this.onCreateProductUpload.bind(this)}
                    fileUploaded={this.state.fileUploaded}
                    styles={this.state.styles}
                    companies={this.state.companies}
                    productHiddenBtn={this.state.productHiddenBtn}
                    onCreateCompany={this.onCreateCompany.bind(this)}
                    onCreateStyle={this.onCreateStyle.bind(this)}
                    file={this.state.file}
                    fileName={this.state.fileName}
                    productLoadingModal={this.state.productLoadingModal}
                    productLoadingModalLabel={this.state.productLoadingModalLabel}
                    onEditProduct={this.onEditProduct.bind(this)} 
                    onEditDeletePicture={this.onEditDeletePicture.bind(this)}
                    imageClickEdit={this.imageClickEdit.bind(this)}
                    defaultImageSelectedFunc={this.defaultImageSelectedFunc.bind(this)}
                  />
              )} 
          />
         <Route 
              path="/editproduct/:id" 
              location={this.props.location} 
              render={({ 
                  location, 
                  match 
              }) => (
                  <EditProductComponent match={match}
                    URLExternal={this.state.URLExternal}  
                    products={this.state.products} 
                    onCreateProduct={this.onCreateProduct.bind(this)}
                    onCreateProductUpload={this.onCreateProductUpload.bind(this)}
                    fileUploaded={this.state.fileUploaded}
                    styles={this.state.styles}
                    companies={this.state.companies}
                    productHiddenBtn={this.state.productHiddenBtn}
                    onCreateCompany={this.onCreateCompany.bind(this)}
                    onCreateStyle={this.onCreateStyle.bind(this)}
                    file={this.state.file}
                    fileName={this.state.fileName}
                    productLoadingModal={this.state.productLoadingModal}
                    productLoadingModalLabel={this.state.productLoadingModalLabel}
                    onEditProduct={this.onEditProduct.bind(this)} 
                    onEditDeletePicture={this.onEditDeletePicture.bind(this)}
                    imageClickEdit={this.imageClickEdit.bind(this)}
                    defaultImageSelectedFunc={this.defaultImageSelectedFunc.bind(this)}
                    onEditCloseModal={this.onEditCloseModal.bind(this)}
                    productLoadingModalLabelPcnt={this.state.productLoadingModalLabelPcnt}
                  />
              )} 
          />
         <Route 
              path="/productdetailzoom/:id" 
              location={this.props.location} 
              render={({ 
                  location, 
                  match 
              }) => (
                  <ProductDetailZoomComponent match={match}
                    URLExternal={this.state.URLExternal}  
                    products={this.state.products} 
                    onCreateProduct={this.onCreateProduct.bind(this)}
                    onCreateProductUpload={this.onCreateProductUpload.bind(this)}
                    fileUploaded={this.state.fileUploaded}
                    styles={this.state.styles}
                    companies={this.state.companies}
                    productHiddenBtn={this.state.productHiddenBtn}
                    onCreateCompany={this.onCreateCompany.bind(this)}
                    onCreateStyle={this.onCreateStyle.bind(this)}
                    file={this.state.file}
                    fileName={this.state.fileName}
                    productLoadingModal={this.state.productLoadingModal}
                    productLoadingModalLabel={this.state.productLoadingModalLabel}
                    onEditProduct={this.onEditProduct.bind(this)} 
                    onEditDeletePicture={this.onEditDeletePicture.bind(this)}
                    imageClickEdit={this.imageClickEdit.bind(this)}
                    defaultImageSelectedFunc={this.defaultImageSelectedFunc.bind(this)}
                  />
              )} 
          />
          <Route path="/product" component= {() => <Product
                    URLExternal={this.state.URLExternal}
                    products={this.state.products} 
                    onEditProduct={this.onEditProduct.bind(this)} 
                    onDeleteProduct={this.onDeleteProduct.bind(this)} 
                />}
          />
          <Route path="/user" component= {() => <UserComponent
                    URLExternal={this.state.URLExternal}
                    users={this.state.users} 
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

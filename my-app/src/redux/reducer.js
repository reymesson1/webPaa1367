import React, { useState, Component } from 'react';

// let API_URL = "http://localhost:8085";
let API_URL = "http://143.198.171.44:8085"; 

const API_HEADERS = {

  'Content-Type':'application/json',
  Authentication: 'any-string-you-like'
}

export const initialState = {

    products: []
}

// class Reducer extends Component {
  
//   constructor(props) {
//     super(props);
//     this.initialState = { 
//         URLExternal: 'http://143.198.171.44:8085', 
//           // URLExternal: 'http://localhost:8085',
//           products: [],
//           styles: [],
//           companies: [],
//           onHiddenMode: true,
//         }
//     }

//     componentDidMount(){

//       fetch(API_URL+'/product')
//         .then((response)=>response.json())
//         .then((responseData)=>{
//             this.setState({
//                 products: responseData
//             })
//         })
//         .catch((error)=>{
//             console.log('Error fetching and parsing data', error);
//         })

//         fetch(API_URL+'/style')
//         .then((response)=>response.json())
//         .then((responseData)=>{
//             this.setState({

//                 styles: responseData
//             })
//         })
//         .catch((error)=>{
//             console.log('Error fetching and parsing data', error);
//         })

//         fetch(API_URL+'/companies')
//         .then((response)=>response.json())
//         .then((responseData)=>{
//             this.setState({

//                 companies: responseData
//             })
//         })
//         .catch((error)=>{
//             console.log('Error fetching and parsing data', error);
//         })

//         fetch(API_URL+'/gethiddenmode')
//         .then((response)=>response.json())
//         .then((responseData)=>{
//             this.setState({

//                 onHiddenMode: responseData.hidden
//             })
//         })
//         .catch((error)=>{
//             console.log('Error fetching and parsing data', error);
//         })

//     }

// }

// export default Reducer;
export const Reducer = (state = initialState, action) =>{

    return state;
};

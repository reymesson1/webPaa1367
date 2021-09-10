import React, { useState, Component } from 'react';
import MainComponent from './MainComponent';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();

class App extends Component {
  
    render(){
      
      return (
        <Provider store={store}>
          <BrowserRouter>
          <div className="App">
            <MainComponent/>
          </div>
          </BrowserRouter>
        </Provider>
      );
  }
}

export default App;
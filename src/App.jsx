// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MedicalStoreProvider } from './components/MedicalStoreContext';
import Header from './components/Header/Header';
import Home from './components/Header/HeaderCompos/Home';
import Store from './components/Header/HeaderCompos/Store'; 
import Cart from './components/Header/HeaderCompos/Cart';

const App = () => {
  return (
    <Router>
      <MedicalStoreProvider>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/store" component={Store} /> {/* Use the Store component */}
            <Route path="/cart" component={Cart} />
          </Switch>
        </div>
      </MedicalStoreProvider>
    </Router>
  );
};

export default App;

import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
        
          </header>
        <main className="main">
          <div className="content">
        
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/" exact={true} component={HomeScreen} />
          </div>
        </main>
          </div>
    </BrowserRouter>
  );
}

export default App;

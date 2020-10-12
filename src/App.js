import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import BlogsContainer from './containers/BlogsContainer.js'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <BlogsContainer />
      </div>
    </BrowserRouter>
  );
}

export default App;

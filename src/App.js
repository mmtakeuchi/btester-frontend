import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import BlogsContainer from './containers/BlogsContainer.js'
import Blog from './components/blogs/Blog';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/blogs" render={ props=> <BlogsContainer {...props}/>} />
          <Route exact path="/blogs/:id" component={ Blog } />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

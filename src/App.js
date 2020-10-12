import React, {Component} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import BlogsContainer from './containers/BlogsContainer.js'
import BlogList from './components/blogs/BlogList';
import Blog from './components/blogs/Blog';

import BlogForm from './components/blogs/BlogForm'

class App extends Component {
  render() {
    
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/blogs" render={ props => <BlogsContainer {...props}/>} />
            <Route exact path="/blogs/:id" render={props => <Blog {...props}/>} />
            <Route exact path="/blogs/new" render={props => <BlogForm {...props}/>} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;

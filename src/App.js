import React, {Component} from 'react';
// import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import BlogsContainer from './containers/BlogsContainer.js'

class App extends Component {
  render() {
    
    return (
      // <BrowserRouter>
        <div className="App">
          {/* <Navbar /> */}
          {/* <Switch> */}
            {/* <Route exact path="/" component={ Home } /> */}
            {/* <Route exact path="/blogs" component={BlogsContainer} /> */}
          {/* </Switch> */}
          <BlogsContainer />
        </div>
      // </BrowserRouter>
    )
  }
}

export default App;

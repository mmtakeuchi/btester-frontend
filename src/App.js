import React, {Component} from 'react';
// import { Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import BlogsContainer from './containers/BlogsContainer.js'

class App extends Component {
  render() {
    
    return (
        <div className="App">
          <Navbar />
          <Home/>
          <BlogsContainer />
          {/* <Switch> */}
            {/* <Route exact path="/" component={ Home } /> */}
            {/* <Route exact path="/blogs" component={BlogsContainer} /> */}
          {/* </Switch> */}
        </div>
    )
  }
}

export default App;

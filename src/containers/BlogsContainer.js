import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Switch, Route} from 'react-router-dom'
import BlogForm from '../components/blogs/BlogForm';
import BlogList from '../components/blogs/BlogList';
import Blog from '../components/blogs/Blog'
import { fetchBlogs, addPost, deletePost } from '../actions/blogActions'

class BlogsContainer extends Component {

    componentDidMount = () => {
        this.props.fetchBlogs()
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/blogs" render={(props) => <BlogList {...props} blogs={this.props.blogs} deletePost={this.props.deletePost}/>} />
                    <Route exact path="/blogs/new" render={(props) => <BlogForm {...props} addPost={this.props.addPost}/>}/>
                    <Route path="/blogs/:id" render={(props) => <Blog {...props} blogs={this.props.blogs} />} />
                </Switch>
                {/* <BlogList blogs={this.props.blogs} deletePost={this.props.deletePost}/> */}
                {/* <BlogForm addPost={this.props.addPost}/> */}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({blogs: state.blogs})

const mapDispatchToProps = (dispatch) => ({
    fetchBlogs: () => dispatch(fetchBlogs()),
    addPost: (post) => dispatch(addPost(post)),
    deletePost: (blogId) => dispatch(deletePost(blogId))
})

export default connect(mapStateToProps, mapDispatchToProps)(BlogsContainer);

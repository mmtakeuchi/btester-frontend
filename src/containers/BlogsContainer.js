import React, { Component } from 'react';
import { connect } from 'react-redux';
import BlogForm from '../components/blogs/BlogForm';
import BlogList from '../components/blogs/BlogList';
import { fetchBlogs, addPost, deletePost } from '../actions/blogActions'

class BlogsContainer extends Component {

    componentDidMount = () => {
        this.props.fetchBlogs()
    }

    render() {
        return (
            <div>
                <BlogList blogs={this.props.blogs} deletePost={this.props.deletePost}/>
                <BlogForm addPost={this.props.addPost}/>
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

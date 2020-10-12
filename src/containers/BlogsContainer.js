import React, { Component } from 'react';
import { connect } from 'react-redux';
import BlogForm from '../components/blogs/BlogForm';
import BlogList from '../components/blogs/BlogList';
import { fetchBlogs, addPost } from '../actions/blogActions'

class BlogsContainer extends Component {

    componentDidMount = () => {
        this.props.fetchBlogs()
    }

    render() {
        return (
            <div>
                <BlogList blogs={this.props.blogs}/>
                <BlogForm />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    blogs: state.blogs,
})

const mapDispatchToProps = (dispatch) => ({
    fetchBlogs: () => dispatch(fetchBlogs()),
    addPost: (post) => dispatch(addPost(post))
})

export default connect(mapStateToProps, mapDispatchToProps)(BlogsContainer);

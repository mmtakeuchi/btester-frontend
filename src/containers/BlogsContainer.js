import React, { Component } from 'react';
import { connect } from 'react-redux';
import BlogForm from '../components/blogs/BlogForm';
import Blogs from '../components/blogs/Blogs';

class BlogsContainer extends Component {
    render() {
        return (
            <div>
                <BlogForm />
                <Blogs />
            </div>
        )
    }
}

export default BlogsContainer

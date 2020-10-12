import React, { Component } from 'react'
import { connect } from 'react-redux'
import BlogForm from '../components/blogs/BlogForm'

class Blogs extends Component {
    render() {
        return (
            <div>
                <BlogForm />
            </div>
        )
    }
}

export default Blogs

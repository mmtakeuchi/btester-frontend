import React, { Component } from 'react';
import { connect } from 'react-redux';
import BlogForm from '../components/blogs/BlogForm';
import Blogs from '../components/blogs/Blogs';
import { fetchBlogs } from '../actions/blogActions'

class BlogsContainer extends Component {

    componentDidMount = () => {
        this.props.fetchBlogs()
    }

    render() {
        
        return (
            <div>
                <BlogForm />
                <Blogs blogs={this.props.state}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    blogs: state.blogs,
})

const mapDispatchToProps = (dispatch) => ({
    fetchBlogs: () => dispatch(fetchBlogs())
})

export default connect(mapStateToProps, mapDispatchToProps)(BlogsContainer);

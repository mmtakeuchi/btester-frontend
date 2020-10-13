import React from 'react'
import Blog from './Blog'
import { Link } from 'react-router-dom'

const BlogList = (props) => {
    
    return (
        <div>
            <h2>Blogs</h2>
            <ul>
                {props.blogs.map(blog => 
                    <li key={blog.id}>
                        <h3><Link to={'/blogs/' + blog.id}>{blog.title}</Link></h3>
                    </li>)}
            </ul>
        </div>
    )
}

export default BlogList
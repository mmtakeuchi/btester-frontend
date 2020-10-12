import React from 'react'
import Blog from './Blog'

const BlogList = ({blogs}) => {
    const blog = blogs.map(blog => <Blog key={blog.id} id={blog.id} title={blog.title} content={blog.content} />)
    return (
        <div>
            <h2>Blogs</h2>
            {blog}
        </div>
    )
}

export default BlogList

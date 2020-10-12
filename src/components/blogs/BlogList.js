import React from 'react'
import Blog from './Blog'

const BlogList = ({blogs}) => {
    console.log(blogs)
    const blog = blogs.map(blog => <Blog key={blog.id} title={blog.title} content={blog.content} />)
    return (
        <div>
            New blogs
            {blog}
        </div>
    )
}

export default BlogList

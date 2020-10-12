import React from 'react'
import Blog from './Blog'

const BlogList = (props) => {
    // console.log(props)
    const blog = props.blogs.map((blog) => <Blog key={blog.id} id={blog.id} title={blog.title} content={blog.content} deletePost={props.deletePost}/>)
    return (
        <div>
            <h2>Blogs</h2>
            {blog}
        </div>
    )
}

export default BlogList

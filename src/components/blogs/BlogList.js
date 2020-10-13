import React from 'react'
import Blog from './Blog'

const BlogList = (props) => {
    // console.log(props)
    const blog = props.blogs.map((blog, i) => <Blog key={i} blog={blog} deletePost={props.deletePost}/>)
    // console.log(blog)

    return (
        <div>
            <h2>Blogs</h2>
            {blog}
        </div>
    )
}

export default BlogList

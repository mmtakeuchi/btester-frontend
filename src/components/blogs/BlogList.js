import React from 'react'
import Blog from './Blog'

const BlogList = (props) => {
    const blog = props.blogs.map((blog, i) => <Blog key={i} blog={blog} deletePost={props.deletePost}/>)
    
    return (
        <div>
            <h2>Blogs</h2>
                <ul>
                    {blog}
                </ul>
        </div>
    )
}

export default BlogList
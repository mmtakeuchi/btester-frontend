import React from 'react'
import { Link } from 'react-router-dom'

const Blog = (props) => {
    // console.log(props.match)
    
    const blog = (props.blogs && props.blogs.find(post => parseInt(props.match.params.id, 10) === post.id))
    console.log(blog)
    const iBlog = () => {
        if (blog) {
            return (
                <div>
                    <h3>{blog.title}</h3>
                    <div>{blog.content}</div>
                    <button onClick={() => handleDelete()}>Deleete Post</button>
                </div>
            )
        }
    }
    const handleDelete = () => {
        props.deletePost(parseInt(props.match.params.id, 10));
        console.log(props)
        props.history.push("/blogs")
    }

    return (
        <div>
            {iBlog()}
            {/* <h3>{props.blog.title}</h3> */}
            {/* <li>
                <h3><Link to={'/blogs/' + props.blog.id}>{props.blog.title}</Link></h3>
                {/* <h3>{props.blog.title}</h3> */}
                {/* <div>{props.blog.content}</div> */}
                {/* <button onClick={() => props.deletePost(this.props.blog.id)}>Delete Post</button> */}
            {/* </li> */} 
        </div>
    )
}

export default Blog;
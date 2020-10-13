import React from 'react'
// import { Link } from 'react-router-dom'

const Blog = (props) => {
    // console.log(props)

    return(
        <div id={props.blog.id}>
            {/* <h3><Link to={'/blogs/' + props.id}>{props.title}</Link></h3> */}
            <h3>{props.blog.title}</h3>
            <div>{props.blog.content}</div>
            <button onClick={() => props.deletePost(props.blog.id)}>Delete Post</button>
        </div>
    )
}

export default Blog;

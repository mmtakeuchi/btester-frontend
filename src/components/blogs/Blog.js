import React from 'react'
import { Link } from 'react-router-dom'

const Blog = (props) => {
        console.log(props)
    return(
        <div id={props.id}>
            <h3><Link to={'/blogs/' + props.id}>{props.title}</Link></h3>
            <div>{props.content}</div>
            <button onClick={() => props.deletePost(props.id)}>Delete Post</button>
        </div>
    )
}

export default Blog;

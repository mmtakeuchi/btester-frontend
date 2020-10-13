import React from 'react'
import { Link } from 'react-router-dom'

const Blog = (props) => {
    // console.log(props)
    console.log(props)
    debugger;
    
    // handleDelete = (event) => {
    //     this.props.deletePost(this.props.blog.id);
    //     this.props.history.push("/blogs")
    // }

    return (
        <div>
            one Post
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
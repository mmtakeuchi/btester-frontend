import React from 'react'

const Blog = (prop) => {
    console.log(prop)

    return(
        <div id={prop.id}>
            <h3>{prop.title}</h3>
            <div>{prop.content}</div>
        </div>
    )
}

export default Blog;

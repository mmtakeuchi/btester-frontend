const baseURL = "http://localhost:3001/"

export const fetchBlogs = () => {
    return (dispatch) => {
        fetch(baseURL + "blogs")
        .then(resp => resp.json())
        .then(blogs => dispatch({type: 'FETCH_BLOG', blogs}))
        .catch(errors => console.log(errors))
    }
}

export const addPost = (post) => {
    return (dispatch) => {
        const strongParams = {
            blog: {
                title: post.title,
                content: post.content
            }
        }
        
        fetch(baseURL + "blogs", {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(strongParams)
        })
        .then(resp => resp.json())
        .then(post => dispatch({type: 'ADD_POST', post}))
        .catch(errors => console.log(errors))
    }
}

export const deletePost = (blogId) => { 
    return (dispatch) => {
        fetch(baseURL + "blogs/" + blogId, {
            method: 'DELETE'
        })
        .then(resp => console.log(resp))
        .then(data => dispatch({type: 'DELETE_POST', blogId}))
        .catch(errors => console.log(errors))
    }
}
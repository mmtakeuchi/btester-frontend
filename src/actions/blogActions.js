export const fetchBlogs = () => {
    return (dispatch) => {
        fetch('http://localhost:3001/blogs')
        .then(resp => resp.json())
        .then(blogs => dispatch({type: "FETCH_BLOGS", blogs}))
    }
}
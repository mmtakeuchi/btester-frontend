const blogsReducer = (state = {blogs:[]}, action) => {
    switch(action.type) {
        case 'FETCH_BLOG':
            return {
                ...state,
                blogs: action.blogs,
            }

        case 'GET_POST':
            const post = state.blogs.find(blog => blog.id === action.blogId)
            return {...state, post}

        case 'ADD_POST':
            const newPost = {id: action.post.id, title: action.post.title, content: action.post.content}
            return {
                ...state,
                blogs: [...state.blogs, newPost]
            }
            
        case 'DELETE_POST':
            const filteredBlogs = state.blogs.filter(blog => blog.id !== action.blogId)
            console.log(filteredBlogs)
            return {...state, filteredBlogs}

        default:
            return state
    }
}

export default blogsReducer;
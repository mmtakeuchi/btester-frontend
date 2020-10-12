const blogsReducer = (state = {blogs:[]}, action) => {
    switch(action.type) {
        case 'FETCH_BLOGS':
            return {
                ...state,
                blogs: action.blogs,
            }

        case 'ADD_POST':
            console.log(action.blog)
            const newPost = {title: action.title, content: action.content}
            return {
                ...state,
                blogs: [...state.blogs, newPost]
            }
            
        case 'DELETE_POST':
            console.log(action.blogId)
            const filteredBlogs = state.blogs.filter(blog => blog.id !== action.blogId)
            return {...state, filteredBlogs}

        default:
            return state
    }
}

export default blogsReducer;
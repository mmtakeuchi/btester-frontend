const blogsReducer = (state = {blogs: []}, action) => {
    switch(action.type) {
        case 'ADD_BLOG':
            return {
                ...state,
                blogs: action.blog
            }
        
        default:
            return state
    }
}

export default blogsReducer;
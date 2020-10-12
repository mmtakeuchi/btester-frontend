const blogsReducer = (state = {blogs:[]}, action) => {
    switch(action.type) {
        case 'FETCH_BLOGS':
            return {
                ...state,
                blogs: action.blogs,
            }
        
        default:
            return state
    }
}

export default blogsReducer;
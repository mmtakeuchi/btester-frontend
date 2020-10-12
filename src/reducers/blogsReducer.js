const blogsReducer = (state = {blogs:[]}, action) => {
    switch(action.type) {
        case 'FETCH_BLOGS':
            console.log('these are the blogs:', action.blogs)
            return {
                ...state,
                blogs: action.blogs,
            }
        
        default:
            return state
    }
}

export default blogsReducer;
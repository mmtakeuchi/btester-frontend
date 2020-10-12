import React, { Component } from 'react'

class BlogForm extends Component {
    render() {
        return (
            <div>
                <form>
                    <input type="text" name="title" />
                    <input type="text" name="content" />
                    <input type="submit" value="Create Blog" />
                </form>
            </div>
        )
    }
}

export default BlogForm

import React, { Component } from 'react'

class BlogForm extends Component {

    state = {
        title: "",
        content: ""
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render() {
        return (
            <div>
                <form>
                    <input type="text" name="title" value={this.state.title} onChange={this.handleChange}/>
                    <textarea type="text" name="content" value={this.state.content} onChange={this.handleChange}/>
                    <input type="submit" value="Create Blog" />
                </form>
            </div>
        )
    }
}

export default BlogForm

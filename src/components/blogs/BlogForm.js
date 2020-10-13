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

    handleSubmit = (event) => {
        event.preventDefault();

        this.props.addPost(this.state)

        this.setState({
            title: "",
            content: ""
        })
        
        this.props.history.push('/blogs')
    }

    render() {
        return (
            <div>
                <h3>Create Blog</h3>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="title">Title:   </label>
                    <input type="text" name="title" value={this.state.title} onChange={this.handleChange}/><br/>

                    <label htmlFor="content">Content:   </label>
                    <textarea type="text" name="content" value={this.state.content} onChange={this.handleChange}/><br/>

                    <input type="submit" value="Create Blog" />
                </form>
            </div>
        )
    }
}

export default BlogForm

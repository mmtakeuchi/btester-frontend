import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = (props) => (
    <nav>
        <ul>
            <li><NavLink to="/home">Home</NavLink></li>
            <li><NavLink to="/blogs">Blogs</NavLink></li>
            <li><NavLink to="/blogs/new">Create Post</NavLink></li>
        </ul>
    </nav>
)

export default Navbar;



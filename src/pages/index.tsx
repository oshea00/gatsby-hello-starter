import React from "react"
import Header from "../components/header.tsx"
import { Link } from "gatsby"

export default () => (
    <div style={{color: `purple`}}>
        <Header>Hello There World!</Header>
        <p>This is cool!</p>
        <img src="https://source.unsplash.com/random/400x200" alt="" /><br></br>
        <Link to="/about">About Page</Link>
    </div>
)

import React, { Component } from 'react'
import { BrowserRouter,Link } from 'react-router-dom'

const Home = () => {
        return (
            <BrowserRouter>
                <div className="container">
                    <h1>This is the Homepage</h1>
                    <ul>
                        <li><Link to="/">Paris</Link></li>
                        <li><Link to="/">Lyon</Link></li>
                        <li><Link to="/">Marseille</Link></li>
                    </ul>
                </div>
            </BrowserRouter>

        )
    }
export default Home;

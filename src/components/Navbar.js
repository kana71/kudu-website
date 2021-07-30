import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png'
import "./navbar.css"

export default class Navbar extends Component {

    render() {
        return (

            <div>

                <nav className="navbar navbar-expand-lg navbar-light bg-light p-4 color-nav">
                    <div className="container-fluid">
                        <img src={logo} className ="logo" alt="Logo" />

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="toggleSupportedContent">
                            <ul className="navbar-nav ms-auto text-center">
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/what-we-do">What We Do</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/projects">Projects</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/experience">Experience</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

        )
    }
}

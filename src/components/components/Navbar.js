import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import 'bootstrap/js/src/collapse.js';


export default class Navbar extends Component {

    render() {
        return (

            <div>

                <nav className="navbar navbar-expand-lg navbar-light p-4">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">
                            <img src={process.env.PUBLIC_URL + "logo.png"} width="130" height="55"></img>
                        </Link>
                        
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse " id="navbarSupportedContent">
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

import React, { Component } from 'react';

import Navbar from './Navbar';
import Footer from './Footer';
import nick from './image/nick.jpg';
import './Experience.css';

export default class Experience extends Component {
    render() {
        return (
            <div className="experiencecontent container-fluid p-5 text-dark ml-auto bg-gradient">
                <div className="p-5"> 
                </div>
                <h1 className="text-center">EXPERIENCE</h1>
                <div className="row mt-5 p-5">
                    <div className= "col text-center">
                        <img src={nick} className="img-fluid center-nick"  alt="Nick Grantham"  width="400" height="400" />
                    </div>
                </div>

                <div className="d-flex experiencetext mt-5">
                    <div className="container-fluid">
                        <p className="h4 text-center" >
                            Nick holds an undergraduate degree in Genetics, honours and master’s 
                            degrees in molecular biology from the University of Cape Town and a PhD 
                            in Biochemistry from the University of Cambridge. He has been involved 
                            in agricultural innovation since 2016 and has travelled to India, China, 
                            Hong Kong, Zambia, Eswatini, Mozambique, Malawi, Australia, Vietnam, 
                            Singapore, Indonesia, and Israel, to see agricultural practices, 
                            innovations, and fruit marketing developments in these places first-hand.
                        </p>
                    </div>
                </div>

            </div>
        )
    }
}

import React, { Component } from 'react';
import 'bootstrap/js/dist/carousel';

import './Carousel.css';
// import img1 from '../public/images/biotech.png';

export default class Carousel extends Component {
    render() {
        return (
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={process.env.PUBLIC_URL + "images/biotech.png"} className="d-block w-100" alt="..."/>
                        </div>

                        <div className="carousel-item">
                            <img src={process.env.PUBLIC_URL + "images/biotech2.jpg"} className="d-block w-100" alt="..."/>
                        </div>

                        <div className="carousel-item">
                        <img src={process.env.PUBLIC_URL + "images/crops.jpg"} className="d-block w-100" alt="..." />
                        </div>
                    </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>

                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                
                </div>
        )
    }
}

import React, { Component } from 'react';
import 'bootstrap/js/dist/carousel';

import './Carousel.css';
// import img1 from '../public/images/biotech.png';

export default class Carousel extends Component {
    render() {
        return (
            <div className="overlay d-flex">
                {/* <h1> Overlay Text </h1> */}
                <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="1000">
                            <img src={process.env.PUBLIC_URL + "images/fields1.jpg"} className="d-block w-100" alt="..."/>
                            <div class="myCaption carousel-caption d-none d-md-block">
                                <p><strong>WELCOME TO </strong></p>
                                <p><strong>KUDU BIOTECH</strong></p>
                            </div>
                        </div>

                        <div className="carousel-item" data-bs-interval="10000">
                            <img src={process.env.PUBLIC_URL + "images/fields2.jpg"} className="d-block w-100" alt="..."/>
                            <div class="carousel-caption d-none d-md-block">
                                <h1>First slide label</h1>
                                <p>Some representative placeholder content for the first slide.</p>
                            </div>
                        </div>

                        <div className="carousel-item" data-bs-interval="10000">
                        <img src={process.env.PUBLIC_URL + "images/fields3.jpg"} className="d-block w-100" alt="..."/>
                            <div class="carousel-caption d-none d-md-block">
                                <h1>First slide label</h1>
                                <p>Some representative placeholder content for the first slide.</p>
                            </div>
                        </div>
                    </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>

                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>


                
                </div>
            </div>
        )
    }
}

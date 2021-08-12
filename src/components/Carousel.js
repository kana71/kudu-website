import React, { Component } from 'react';
import 'bootstrap/js/dist/carousel';

import './Carousel.css';
import slide1 from './image/slide1.jpg'; 
import fields2 from './image/fields2.jpg'; 
import fields3 from './image/fields3.jpg'

export default class Carousel extends Component {
    render() {
        return (
            <div className="overlay d-flex">
                <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">

                    <div className="carousel-inner">

                        <div className="carousel-item active" data-bs-interval="1000">
                            <img src={slide1} className="d-block w-100" alt="..."/>

                            <div class="myCaption carousel-caption ">
                                <p>KUDU BIOTECH</p>
                                <h1>Agricultural innovation through biotechnology</h1>
                            </div>
                        </div>

                        <div className="carousel-item bg-transparent" data-bs-interval="10000">
                            <img src={fields2} className="d-block w-100" alt="..."/>
                            <div class="carousel-caption ">
                                <p>KUDU BIOTECH</p>
                                <h1>Solving agricultural solutions using biotechnology</h1>
                            </div>
                        </div>

                        <div className="carousel-item" data-bs-interval="10000">
                            <img src={fields3} className="d-block w-100" alt="..."/>
                            <div class="carousel-caption ">
                                <p>KUDU BIOTECH</p>
                                <h1>Solving agricultural solutions using biotechnology</h1>
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

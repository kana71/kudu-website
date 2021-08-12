import React, { Component } from 'react';

import Carousel from './Carousel';
import './Home.css'; 

import whoweareimage from './image/whoweareimage.jpg';

export default class Home extends Component {
    render() {
        return (
            <div>

                <Carousel />

                <div className="whoweare container-fluid p-5 transparent bg-gradient text-light ml-auto">

                    <br/>
                    <br/>


                    <div className="d-flex">
                        <div className="row p-3">
                            <div className="col-md-6 col-sm-12 pl-4">

                                <div className="container-fluid p-4">
                                    <div className="row mt-3 p-5">
                                        <div className= "col text-center">
                                            <img class="img-fluid" src={whoweareimage} width="400px" height="400px"/>

                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="col-md-5">
                                <div className="container-fluid justify-content-right">
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
    
                                    <h1 className="text-center">Who We Are</h1>
                                    <br />
                                    <p className="h5">
                                    Kudu Biotech is a start-up agricultural biotechnology business that looks to leverage experience with pomology, 
                                    high-end expertise in molecular biology, and local and international exposure to thought leaders in academia and agriculture. 
                                    This combination uniquely places us to be able to both identify problems currently facing farmers and to provide solutions 
                                    using biotechnology. </p>
                                    <br />

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                
            </div>
        )
    }
}

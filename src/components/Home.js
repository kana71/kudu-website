import React, { Component } from 'react';

import Navbar from './Navbar';
import Carousel from './Carousel';
import Footer from './Footer';
import './Home.css'; 


export default class Home extends Component {
    render() {
        return (
            <div>

                <Carousel />

                <div className="whoweare container-fluid p-5 transparent bg-gradient text-light ml-auto">

                    {/* <h2 className="text-center">Who We Are</h2> */}
                    <br/>
                    <br/>


                    <div className="d-flex">
                    <div className="row p-5">
                        <div className="col-md-6 col-sm-12 pl-4">

                            <div className="container-fluid p-4">
                                <img class="img-fluid" src={process.env.PUBLIC_URL + "images/people.jpg"} width="500px" height="600px"/>
                                
                            </div>

                        </div>

                        <div className="col-md-5">
                            <div className="container-fluid justify-content-right">
                                <h1 className="text-center">Who We Are</h1>
                                <br />
                                <p className="h5">
                                Kudu Biotech is a start-up agricultural biotechnology business that looks to leverage experience with pomology, high-end expertise in molecular biology, and local and international exposure to thought leaders in academia and agriculture. This combination uniquely places us to be able to both identify problems currently facing farmers and to provide solutions using biotechnology. </p>
                                <br />

                                {/* <p className="h5">
                                Morbi leo urna molestie at elementum. In massa tempor nec feugiat nisl pretium. In iaculis nunc 
                                sed augue lacus viverra vitae congue eu. Mauris vitae ultricies leo integer. Vulputate odio ut enim 
                                blandit. Ac turpis egestas sed tempus. Orci phasellus egestas tellus rutrum tellus pellentesque eu 
                                tincidunt tortor. Ut porttitor leo a diam. Amet consectetur adipiscing elit duis tristique sollicitudin nibh. 
                                Imperdiet nulla malesuada pellentesque elit eget. Consequat semper viverra nam libero justo laoreet. Aliquam 
                                sem et tortor consequat. Tincidunt ornare massa eget egestas purus viverra accumsan in. Orci phasellus egestas 
                                tellus rutrum tellus pellentesque eu. Tempus egestas sed sed risus pretium. Sed blandit libero volutpat sed cras. 
                                Nulla at volutpat diam ut venenatis tellus in metus.
                                </p> */}
                            </div>
                        </div>
                    </div>

                    </div>
                </div>

                 {/* Another div */}

                 {/* <div className="container-fluid bg-primary text-center ml-auto p-5">
                     <h1 className="text-light mb-4">Meet the Team</h1>
                        
                        <div className="row justify-content-center mb-4">

                            <div class="card mb-4 people-card" >
                                First card
                                <img src="..." class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>

                        </div>



                        <div className="row justify-content-center">
                            <div class="card mx-5 people-card">
                                Second Card 
                                <img src="..." class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>

                            <div class="card mx-5 people-card">
                                Third Card 
                                <img src="..." class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>

                        </div>
                       
                </div> */}
                
            </div>
        )
    }
}

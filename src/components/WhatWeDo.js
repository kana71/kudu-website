import React, { Component } from 'react'

import Navbar from './Navbar';
import Footer from './Footer';
import "./WhatWeDo.css"
import litchitree from './litchitree.jpeg'
import golanheights from './golanheights.JPG'
import greenhouse from './greenhouse.JPG'
import litchiflower from './litchiflower.JPEG'
import litchifruit from './litchifruit.jpg'
import litchiroots from './litchiroots.JPG'
import bud from './bud.jpg'
import plant1 from './plant1.jpg'
import plants2 from './plants2.jpg'
import plants3 from './plants3.jpg'
import trees from './trees.jpg'


export default class WhatWeDo extends Component {
    render() {
        return (
            <div className="text-dark text-center bg-gradient">
                <div className="d-flex">

                    <div className="text-center text-light p-5"
                            style={{backgroundImage: `url(${ bud})`,
                                    backgroundSize: 'cover',
                                    width: '2000px',
                                    height: '350px',
                                    backgroundPosition: 'center'

                        }}
                        >
                        <br />
                        <br /> 
                        <br />
                        <h1 className="text-center">WHAT WE DO</h1>
                    </div>
                </div>
              
          {/* <div className="whatwedodiv container-fluid p-5 text-dark ml-auto p-5 bg-gradient">
                <div className="p-5">
              </div>
            <h1 className="text-center">WHAT WE DO</h1>
            <div className="p-3">
        
            </div>

            <br />
            <br />
        </div> */}
            
            <div className="row whatwedodiv container-fluid text-dark mx-auto p-5 bg-gradient">
                <div className="p-5">
                </div>

                <div className="container-fluid">
                  <p className="h4">
                  Kudu is a biotech company that focuses on developing and implementing innovative solutions to problems faced in modern agriculture. 
                  Today’s farmers need precociously bearing varieties, crops tolerant of drought and new pests/diseases, and to be able to move fresh 
                  fruit to markets across the world, often with lengthy transit times. These were not issues of consideration a few decades ago, but 
                  are the biggest challenges faced by todays farmers. Kudu aims to bridge the gap between the demands places on modern fresh produce 
                  and what genetics and cultivars are currently available by using biotechnology. 
                  </p>
                  <br />

                  <p className="h4">
                  Working mainly in the subtropical fruit sector, we have been identifying the biggest issues faced by farmers and identifying how the 
                  international community has responded to these threats. Working with farmers and growers’ associations we have put research into 
                  keeping fruit fresher for longer, what new trends have emerged in international crop breeding and how genetics is increasingly playing
                   a role in variety selection. 
                  </p>
                  <br />

                  <p className="h4">
                  We work closely with and support an existing litchi packhouse (KZN Litchi) to provide an edge to growers who supply it, by using 
                  established post-harvest treatments to keep the produce fresher for longer. This shelf life extension and aggregation allows smaller 
                  farmers to move fruit to wealthier export markets where it realises a higher price and co-ordinates logistics so that local market price 
                  depressions from oversupply are kept to a minimum. 
                  </p>
                  <br />

                  <br />
                  <h2 className="text-center">Gallery</h2>
                </div>

                {/* Grid */}
                <div className="container justify-content center">

                    <div className="row p-2 d-flex">
                        <div className="col">
                            <img src={litchitree} className="photogallery img-fluid img-thumbnail" alt="litchi tree" width="400px" height="400px"/>
                        </div>

                        <div className="col">
                            <img src={litchiflower} className="photogallery img-fluid img-thumbnail" alt="litchi flower" width="400" height="400"/> 
                        </div>

                        <div className="col">
                                <img src={greenhouse} className="photogallery img-fluid img-thumbnail" alt="greenhouse" width="400" height="600px"/>
                                <img src={plants2} className="img-fluid img-thumbnail" alt="plants2" width="400" height="400"/>
                        </div>

                        
                    </div>

                    <div className="row p-2">
                        <div className="col">
                            <img src={trees} className="img-fluid img-thumbnail" alt="trees" width="400" height="400"/>
                            <img src={plants3} className="img-fluid img-thumbnail" alt="plants3" width="400" height="400"/>
                        </div>

                        <div className="col">
                            <img src={litchiroots} className="img-fluid img-thumbnail" alt="litchi roots" width="400" height="400"/>
                        </div>

                        <div className="col">
                            <img src={plant1} className="img-fluid img-thumbnail" alt="plant1" width="400" height="400"/> 
                        </div>
                    </div>




                </div>















                {/* --------------------------------------------- */}
            
                {/* First row */}
                {/* <div className="row mt-5 container-fluid">
                    <div className="d-flex justify-content-center">

                        <div className="card display:inline-block mx-5 text-dark" >
                            <img src={golanheights} className="img-fluid card-img-top" alt="Golan Heights" />
                        </div>

                        <div className="card display:inline-block text-dark" >
                            <img src={litchitree} className="img-fluid card-img-top" alt="Litchi Tree" />
                                <div className="card-body">
                                    <p className="card-text">Litchi Tree with fruit</p>
                                </div>
                        </div>    
                    </div>
                </div> */}

                {/* Second row */}
                {/* <div className="row mt-5">
                    <div className="container-fluid d-flex justify-content-center">
                        <div className="card display:inline-block mx-5 text-dark" >
                            <img src={greenhouse} className="img-fluid card-img-top" alt="Greenhouses" />
                            <div className="card-body">
                                <p className="card-text">Our greenhouses</p>
                            </div>
                        </div>
                        <div className="card display:inline-block" >
                            <img src={litchiflower} className="img-fluid card-img-top" alt="Litchi Tree with Flowers" />
                            <div className="card-body">
                                <p className="card-text">Litchi Tree with Flowers</p>
                            </div>
                        </div>    
                    </div>
                </div> */}

                {/* Third row */}
                {/* <div className="row mt-5 mb-5">
                    <div className="container-fluid d-flex justify-content-center">
                      <div className="card display:inline-block mx-5" >
                          <img src={litchifruit} className="img-fluid card-img-top" alt="Litchi Fruit" />
                              <div className="card-body">
                                  <p className="card-text">Litchi Fruit</p>
                                </div>
                      </div>
                      <div className="card display:inline-block" >
                          <img src={litchiroots} className="img-fluid card-img-top" alt="Litchi plant roots" />
                              <div className="card-body">
                                  <p className="card-text">Litchi plant roots</p>
                              </div>
                      </div>    
                    </div>
                </div> */}

            </div>
        </div>

        )
    }
}
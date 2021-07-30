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

export default class WhatWeDo extends Component {
    render() {
        return (
          <div>
          <div className="container-fluid p-5 text-dark ml-auto">
            <h2 className="text-center">What We Do</h2>
            <br />
            <br />
            <div className="row">

                <div className="container-fluid pl-10">
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
            </div>
            <div className="row mt-5">
                  <div className="container-fluid d-flex justify-content-center">
                      <div className="card display:inline-block mx-5" >
                          <img src={golanheights} className="card-img-top" alt="Golan Heights" />
                              <div className="card-body">
                                  <p className="card-text">Farms in Golan Heights</p>
                                </div>
                      </div>
                      <div className="card display:inline-block" >
                          <img src={litchitree} className="card-img-top" alt="Litchi Tree" />
                              <div className="card-body">
                                  <p className="card-text">Litchi Tree with fruit</p>
                              </div>
                      </div>    
              </div>
            </div>
            <div className="row mt-5">
                  <div className="container-fluid d-flex justify-content-center">
                      <div className="card display:inline-block mx-5" >
                          <img src={greenhouse} className="card-img-top" alt="Greenhouses" />
                              <div className="card-body">
                                  <p className="card-text">Our greenhouses</p>
                                </div>
                      </div>
                      <div className="card display:inline-block" >
                          <img src={litchiflower} className="card-img-top" alt="Litchi Tree with Flowers" />
                              <div className="card-body">
                                  <p className="card-text">Litchi Tree with Flowers</p>
                              </div>
                      </div>    
              </div>
            </div>
            <div className="row mt-5">
                  <div className="container-fluid d-flex justify-content-center">
                      <div className="card display:inline-block mx-5" >
                          <img src={litchifruit} className="card-img-top" alt="Litchi Fruit" />
                              <div className="card-body">
                                  <p className="card-text">Litchi Fruit</p>
                                </div>
                      </div>
                      <div className="card display:inline-block" >
                          <img src={litchiroots} className="card-img-top" alt="Litchi plant roots" />
                              <div className="card-body">
                                  <p className="card-text">Litchi plant roots</p>
                              </div>
                      </div>    
              </div>
            </div>
          </div>
        </div>
        )
    }
}

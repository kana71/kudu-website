import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'; 

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import 'bootstrap/dist/css/bootstrap.css'; 
import 'bootstrap-icons/font/bootstrap-icons.css';

import Home from './components/Home';
import WhatWeDo from './components/WhatWeDo'; 
import Projects from './components/Projects'; 
import Experience from './components/Experience';


export default class App extends Component {
  render() {
    return (

      <div className='App'>
        <BrowserRouter>

          <Navbar />
            <div>
              <Route path='/' exact component={Home} />
              <Route path='/what-we-do' component={WhatWeDo} />
              <Route path='/projects' component={Projects} />
              <Route path='/experience' component={Experience} />
            </div>
        </BrowserRouter>
      </div>
    
    )
  }
}

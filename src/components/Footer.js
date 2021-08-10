import React, { Component } from 'react';
import './Footer.css';

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer bg-gradient text-white py-5">
                <div className="container text-center text-md left">

                <div className="row align-items-center">
                    <div className="col">
                        <h5 className="text-uppercase mb-4 font-weight-bold text-white">Kudu Biotech</h5>
                        {/* <p>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit 
                                amet ital consetetur lorem ipsum dolor sit amet adipiscing elit.
                        </p> */}
                    </div>

                    <div className="col">
                        <h6 className="text mb-4 font-weight-bold text-white">Contact</h6>
                        <p>Nick Grantham</p>
                        <p>nickgrantham@gmail.com</p>
                        {/* <p>1-(111)-123-1234</p> */}

                    </div>

                    <div className="col">
                        <h6 className="text mb-4 font-weight-bold text-white">Hours</h6>
                        <p>Monday - Friday</p>
                        <p>9 am - 5 pm SAST</p>
                        <p>Text</p>
                    </div>

                    {/* <div className="col">
                        <h6 className="text mb-4 font-weight-bold text-white">Location</h6>
                        <p>12345 Some road, Candyland, Candy World 10000 </p>
                    </div> */}

                    {/* <div className="col">
                        <h6 className="text mb-4 font-weight-bold text-white">Follow us</h6>
                        <p>Social icon 1</p>
                        <p>Social icon 2</p>
                        <p>Social icon 3</p>
                    </div> */}
                </div>
                

                </div>
            </footer>
        )
    }
}

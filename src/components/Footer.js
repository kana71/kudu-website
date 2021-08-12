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
                    </div>

                    <div className="col">
                        <h6 className="text mb-4 font-weight-bold text-white">Contact</h6>
                        <p>Nick Grantham</p>
                        <p>nick@kudubiotech.com</p>
                        <p>+27 (0) 828316663 </p>
                    </div>

                    <div className="col">
                        <h6 className="text mb-4 font-weight-bold text-white">Hours</h6>
                        <p>Monday - Friday</p>
                        <p>9 am - 5 pm SAST</p>
                    </div>
                </div>
                </div>
            </footer>
        )
    }
}

import React, { Component } from 'react';
import '../css/bootstrap.min.css'
import '../css/style.css'

class Footer extends Component {
    render() {
        return (
            <div className='footer-magin'>
                <footer className="footer mt-auto py-3 bg-light">
                    <div className="container">
                        <span className="text-muted">
                            © 2023 Your Company. All rights reserved. | Designed by You
                        </span>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;
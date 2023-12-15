import React, { Component } from 'react';
import './css/bootstrap.min.css'
import Navigation from './common_component/Navigation';
import Footer from './common_component/Footer';

function Content() {
    return (
        <div>
            {/* Main Content */}
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h2>Contact Information</h2>
                        <p>
                            If you have any questions or concerns, please feel free to reach out
                            to us.
                        </p>
                        <address>
                            <strong>Your IT Learning Center</strong>
                            <br />
                            <div>
                                123 Main Street
                                <br />
                                City, Country
                                <br />
                                Phone: (123) 456-7890
                                <br />
                                Email: infoexample.com
                            </div>
                        </address>
                    </div>
                    <div className="col-md-6">
                        <h2>Contact Form</h2>
                        <form>
                            <div className="form-group">
                                <label htmlFor="name">Your Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Your Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Your Message</label>
                                <textarea
                                    className="form-control"
                                    id="message"
                                    rows={3}
                                    placeholder="Enter your message"
                                    defaultValue={""}
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

class Contact extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <Content />
                <Footer />
            </div>
        );
    }
}

export default Contact;
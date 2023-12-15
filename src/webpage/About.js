import React, { Component } from 'react';
import './css/bootstrap.min.css'
import Navigation from './common_component/Navigation';
import Footer from './common_component/Footer';

function Content() {
    return (
        <div>
            {/* Jumbotron */}
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">About Us</h1>
                    <p className="lead">
                        Discover the excellence in IT education at our center.
                    </p>
                </div>
            </div>
            {/* Main Content */}
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <h2>Welcome to Our IT Learning Center</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
                            varius purus. Quisque sollicitudin, neque non venenatis tincidunt,
                            velit nisi consectetur eros, vitae scelerisque elit elit a sem.
                        </p>
                        <p>
                            Our center is dedicated to providing high-quality education in the
                            field of Information Technology. With experienced instructors and
                            state-of-the-art facilities, we strive to empower individuals with the
                            knowledge and skills needed to succeed in the dynamic IT industry.
                        </p>
                        <p>
                            Whether you are a beginner looking to start your journey in IT or an
                            experienced professional seeking to enhance your skills, we have a
                            variety of courses and programs tailored to meet your needs.
                        </p>
                    </div>
                    <div className="col-md-4">
                        <h2>Why Choose Us</h2>
                        <ul>
                            <li>Experienced Instructors</li>
                            <li>Hands-On Learning</li>
                            <li>Industry-Relevant Curriculum</li>
                            <li>State-of-the-Art Facilities</li>
                            <li>Flexible Scheduling</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>


    )
}

class About extends Component {
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

export default About;
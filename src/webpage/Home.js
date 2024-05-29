import React, { Component } from "react";
import Navigation from "./common_component/Navigation";
import Footer from "./common_component/Footer";
import "./css/bootstrap.min.css";

function Content() {
  //develop something from toan tran
  //develop something from duy
  //develop something from khanh
  return (
    <div>
      {/* Jumbotron */}
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Welcome to Your Website </h1>
          <p className="lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
            varius purus.
          </p>
          <a className="btn btn-primary btn-lg" href="#" role="button">
            Learn more
          </a>
        </div>
      </div>
      {/* Main Content */}
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2>Section 1</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
              varius purus. Quisque sollicitudin, neque non venenatis tincidunt,
              velit nisi consectetur eros.
            </p>
          </div>
          <div className="col-md-6">
            <h2>Section 2</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
              varius purus. Quisque sollicitudin, neque non venenatis tincidunt,
              velit nisi consectetur eros.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
class Home extends Component {
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

export default Home;

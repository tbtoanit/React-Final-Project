import React, { Component } from 'react';
import './css/bootstrap.min.css'

class Login extends Component {
    render() {
        return (
            <div>
                <div className="container login-container loginmagin">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header">
                                    <h3 className="text-center">Login</h3>
                                </div>
                                <div className="card-body">
                                    <form>
                                        <div className="form-group">
                                            <label htmlFor="username">Username:</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="username"
                                                placeholder="Enter your username"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="password">Password:</label>
                                            <input
                                                type="password"
                                                className="form-control"
                                                id="password"
                                                placeholder="Enter your password"
                                            />
                                        </div>
                                        <button type="submit" className="btn btn-primary btn-block">
                                            Login
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Login;
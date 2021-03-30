import React, { Component } from 'react'
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import Home from '../views/Home';
import Login from '../views/Login';
import Signup from '../views/Signup';
import LoginButton from "./navbarComponents/LoginButton"
import SignupButton from "./navbarComponents/SignupButton"


export default class Navbar extends Component {
    render() {
        return (
            <>
                <BrowserRouter>
                    <nav className="container navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">
                            <Link to="/" className="navbar-brand">LE BON PLAN</Link>
                            <div class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Cities </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="#">Paris</a></li>
                                    <li><a class="dropdown-item" href="#">Lyon</a></li>
                                    <li><a class="dropdown-item" href="#">Marseille</a></li>

                                </ul>
                            </div>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link to="/login" className="nav-link active" ><LoginButton></LoginButton></Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/signup" className="nav-link active" ><SignupButton></SignupButton></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>

                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/login" component={Login} />
                        <Route path="/signup" component={Signup} />
                    </Switch>
                </BrowserRouter>


            </>
        )
    }
}

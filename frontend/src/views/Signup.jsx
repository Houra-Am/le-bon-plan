import React, { Component, useState } from 'react'
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Profil from './Profil';
const Signup = () => {
    const [userName, setUserName] = useState("");
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [signupPassword, setSignupPassword] = useState("");

    const addUserName = (event) => {
        setUserName(event.target.value)
    }
    const addName = (event) => {
        setName(event.target.value)
    }
    const addLastName = (event) => {
        setLastName(event.target.value)
    }
    const addSignupPassword = (event) => {
        setSignupPassword(event.target.value)
    }
    return (
        <BrowserRouter>
            <form className="container">
                <h1>Signup </h1>
                <div class="mb-3">
                    <label class="form-label">userName</label>
                    <input class="form-control" onChange={addUserName} />
                </div>
                <div class="mb-3">
                    <label class="form-label">name</label>
                    <input class="form-control" onChange={addName} />
                </div>
                <div class="mb-3">
                    <label class="form-label">lastName</label>
                    <input class="form-control" onChange={addLastName} />
                </div>
                <div class="mb-3">
                    <label class="form-label">password</label>
                    <input class="form-control" onChange={addSignupPassword} />
                </div>
                <button class="btn  btn-dark">Créer un compte
                </button>
                <p>(CE BOUTON DOIT MENER A LA PAGE PROFIL)</p>
            </form>
            
        </BrowserRouter>
    )
}
export default Signup;

import React, { Component, useState } from 'react'
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';


const Login = () => {
    const [email, setEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");


    const addEmail = (event) => {
        setEmail(event.target.value)
    }
    const addloginPassword = (event) => {
        setLoginPassword(event.target.value)
    }

    return (

        <form className="container">
            <h1>LoginPage</h1>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                    onChange={addEmail} />
            </div>
            <div class="mb-3">
                <label  class="form-label">Password</label>
                <input  class="form-control" onChange={addloginPassword} />
            </div>
            <button type="submit" class="btn btn-primary">Connecter</button>
            <p>(CE BOUTON DOIT MENER A LA HOMEPAGE)</p>
        </form>

    )
}

export default Login;

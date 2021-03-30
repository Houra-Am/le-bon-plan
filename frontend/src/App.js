import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'
import './App.css';
import Navbar from "./components/Navbar"
import loginButton from "./components/navbarComponents/LoginButton"
import SignupButton from "./components/navbarComponents/SignupButton"
import Login from "./views/Login"
import Signup from "./views/Signup"
import Home from "./views/Home"
import Profil from "./views/Profil"

function App() {
  return (
    <>
    <Navbar></Navbar>
    </>
  );
}

export default App;

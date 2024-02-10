import React from "react";
import '../App.css';
import { Link } from 'react-router-dom';
function Login(){
    return(
        <>
            <div className="login-container">
                <img src="/images/afyl_jx6j_230421-min.jpg" className="login-svg"></img>
                <input type="text" placeholder="Enter your username" id="username"></input>
                <input type="password" placeholder="Enter your password" id="password"></input>
                <Link to={'/home'} className="login-button">
                    Login
                </Link>
                
            </div>
        </>
    )
}
export default Login
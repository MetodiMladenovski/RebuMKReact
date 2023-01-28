import React from "react";
import {Link} from 'react-router-dom';

const header = (props) => {
    
    let register = (<Link style={{backgroundColor: "cyan", padding: 0.4 +"em"}} className="nav-link btn btn-primary" to={"/register"}>Register</Link>);
    let login = (<Link style={{backgroundColor: "cyan", padding: 0.4 +"em"}} className="nav-link btn btn-primary" to={"/login"}>Login</Link>);
    let rebumk = (<a style={{marginLeft: 10 + "em"}} className="navbar-brand" href="/home">RebuMK</a>)

    let isLoggedIn
    let showRegister

    if(localStorage.getItem("driverId") || localStorage.getItem("passengerId") || localStorage.getItem("adminId")){
        isLoggedIn = true
        showRegister = ""
    } else {
        isLoggedIn = false
        showRegister = register
    }

    const logoutUser = () => {
        localStorage.clear()
    }
    let logout = (<a style={{marginLeft: 10 + "em", backgroundColor: "coral", padding: 0.4 +"em"}} className="nav-link btn btn-primary" href="/home" onClick={() => logoutUser()}>Logout</a>)


    return (
        <header>
            <nav style={{ borderRadius: 2 + "em"}} className="navbar navbar-expand-md navbar-light navbar-fixed bg-light">
                {rebumk}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                        aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav mr-auto" style={{marginRight: 40 + "em"}}>
                        <li className="nav-item active">
                        </li>
                        <li className="nav-item active">
                        </li>
                    </ul>
                    <form style={{marginLeft: 15 + "em"}} className="form-inline mt-2 mt-md-0 ml-3">
                        {showRegister}
                    </form>
                    <form style={{marginLeft: 1 + "em"}} className="form-inline mt-2 mt-md-0 ml-3">
                        {isLoggedIn ? logout : login}
                    </form>
                </div>
            </nav>
        </header>
    )
}

export default header;
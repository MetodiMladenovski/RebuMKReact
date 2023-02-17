import React from "react";
import {Link} from 'react-router-dom';

const header = (props) => {
    
    let register = (<Link style={{backgroundColor: "white", borderColor: "black", color: 'black'}} className="btn btn-primary" to={"/register"}>Register</Link>);
    let login = (<Link style={{backgroundColor: "white", borderColor: "black", color: 'black'}} className="btn btn-primary" to={"/login"} type="submit">Login</Link>);
    let adminReport = (<Link style={{marginLeft: 1 +"em", color: "white", fontSize: '18px'}} className="nav-link active" aria-current="page" to={"/report/admin"}>Check Report</Link>);
    let driverReport = (<Link style={{marginLeft: 1 +"em", color: "white", fontSize: '18px'}} className="nav-link active" aria-current="page" to={"/report/driver"}>Check Report</Link>);
    let passengerReport = (<Link style={{marginLeft: 1 +"em", color: "white", fontSize: '18px'}} className="nav-link active" aria-current="page" to={"/report/passenger"}>Check Report</Link>);

    let isLoggedIn = false
    let showRegister = register
    let report
        
    if(localStorage.getItem("driverId")){
        report = driverReport;
        isLoggedIn = true;
        showRegister = "";
    } else if(localStorage.getItem("passengerId")) {
        report = passengerReport;
        isLoggedIn = true;
        showRegister = "";
    } else if(localStorage.getItem("adminId")){
        report = adminReport
        isLoggedIn = true
        showRegister = ""
    }

    const logoutUser = () => {
        localStorage.clear()
    }

    let logout = (<a style={{backgroundColor: "white", borderColor: "black", color: 'black'}} onClick={() => logoutUser()} className="btn btn-primary" href={"/home"}>Logout</a>);


    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg bg-body-tertiary rounded-bottom" style={{width:'85%', margin: 'auto', backgroundColor: '#0dbfd3'}}>
                <div className="container">
                    <a className="navbar-brand" href="/home" style={{color:'white', fontWeight: 'bold', fontStyle: 'italic', fontSize: '24px'}}>
                        <img src={require("../../images/logo.PNG")} alt="Logo" width="100" height="34" className="d-inline-block align-text-top" style={{marginRight: '10px'}}/>
                        RebuMK
                    </a>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                {report}
                            </li>
                        </ul>
                    </div>
                    <form className="d-flex" style={{marginRight: "3px"}}>
                        {showRegister}
                    </form>
                    <form className="d-flex">
                        {isLoggedIn ? logout : login}
                    </form>
                </div>
            </nav>
        </div>
    )
}

export default header;
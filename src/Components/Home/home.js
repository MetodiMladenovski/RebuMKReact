import React from 'react';
import { Link } from 'react-router-dom';
import CenteredContainer from '../UtilComponents/CenteredContainer';

const home = (props) => {

    let drivers = (<Link style={{backgroundColor: "#00CED1", borderColor: "black", color: "black"}} className="btn btn-primary" to={"/drivers"}>See drivers</Link>);
    let makeRequest = (<Link style={{backgroundColor: "#00CED1", borderColor: "black", color: "black"}} className="btn btn-primary" to={"/make-request"}>Make Request</Link>);
    let requests = (<Link style={{backgroundColor: "#00CED1", borderColor: "black", color: "black"}} className="btn btn-primary" to={"/requests"}>See Requests</Link>)
    let register = (<Link style={{backgroundColor: "#00CED1", borderColor: "black", color: "black"}} className="btn btn-primary" to={"/register"}>Register</Link>);
    let login = (<Link style={{backgroundColor: "#00CED1", borderColor: "black", color: "black"}} className="btn btn-primary" to={"/login"}>Login</Link>);

    let buttonOne
    let buttonTwo

    if(localStorage.getItem("driverId")){
        buttonOne = requests;
    } else if(localStorage.getItem("passengerId")) {
        buttonOne = drivers
        buttonTwo = makeRequest
    } else if(localStorage.getItem("adminId")){
        buttonOne = drivers
    } else {
        buttonOne = login
        buttonTwo = register
    }


    return (
        <CenteredContainer>
            <h2 style={{textAlign: "center", color: "#00CED1"}}>Welcome to RebuMK</h2>       
            <hr></hr>
            <p style={{textAlign: "center"}}> {buttonOne} 
            <hr></hr>   
            {buttonTwo}  </p>   
        </CenteredContainer>
    )
}

export default home;
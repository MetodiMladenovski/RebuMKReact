import React from "react";
import CenteredContainer from "../UtilComponents/CenteredContainer";

const register = (props) => {
    
    let registerDriver = (<a style={{backgroundColor: "cyan", float: "center", marginLeft: 5.5 +"em"}} class="btn" href="/registerDriver">REGISTER DRIVER</a>);
    let registerPassenger = (<a style={{backgroundColor: "palegreen", float: "center", marginLeft: 4.5 + "em"}} class="btn" href="/registerPassenger">REGISTER PASSENGER</a>);
    let login = (<a style={{backgroundColor: "gray", position: "inline", marginLeft: 8 +"em"}} class="btn" href="/login">Login</a>)

    return (
        <CenteredContainer>
            <h4>Choose as what would you like to register:</h4>
            {registerDriver}
            <hr></hr>
            {registerPassenger}
            <hr></hr>
            <hr></hr>
            <p style={{marginLeft: 5.5 +"em"}}> Or you can login here</p>
            {login}
        </CenteredContainer>
    )
}

export default register;
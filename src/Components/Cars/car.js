import React from "react";
import { useLocation, useNavigate } from 'react-router-dom'
import CenteredContainer from "../UtilComponents/CenteredContainer";

const Car = () => {
    const location = useLocation();


    let driverButton = <a href="/home" className="btn btn-primary" style={{backgroundColor: "darkcyan"}}>Go back</a>

    let adminButton = <a href="/unapproved-drivers" className="btn btn-primary" style={{backgroundColor: "darkcyan"}}>Go back</a>

    let button
    if(localStorage.getItem("driverId")){
        button = driverButton
    } else {
        button = adminButton
    }

    return (
        <CenteredContainer>
        <h2 style={{textAlign: "center", color: "#00CED1"}}>Car for driver</h2>       
        <div className="card text-center">
            <div className="card-header">
                {location.state.car.licensePlate}
            </div>
            <div className="card-body">
                <h5>Model: {location.state.car.model}</h5>
                <h5>Make:  {location.state.car.make}</h5>
                <h5>Year:  {location.state.car.year}</h5>
            </div>
            <br></br>
            {button}
        </div>
        </CenteredContainer>
    )
}

export default Car;
import React from "react";
import { useLocation, useNavigate } from 'react-router-dom'
import CenteredContainer from "../UtilComponents/CenteredContainer";
import axios from "../../custom-axios/axios";

const GradeDrive = (props) => {
    const location = useLocation();
    const navigate = useNavigate();

    const payDrive = () => {
        const driveId = location.state.driveId
        const totalPriceToPay = location.state.totalSumToPay
        axios.post(`/drive/pay/${driveId}`, null, { params: {
            totalPriceToPay
          }
        })       
        navigate("/home")
    }

    return (
        <CenteredContainer>
        <div className="card text-center">
            <h4>You have travelled <br></br>
            {location.state.kmTravelled} km <br></br>
            with a price per km <br></br>
            {location.state.driverPricePerKm} MKD</h4>
            <br></br>
            <h3 style={{color: "green"}}>Your total price to pay is <br></br>
            {(Math.round(location.state.totalSumToPay * 100) / 100).toFixed(2)} MKD</h3>
            <hr></hr>
            <a type="submit" className="btn btn-primary" style={{backgroundColor: "darkcyan", borderColor: 'black', color: 'white'}} onClick={() => payDrive()}>Pay Drive</a>
            <br></br>
            <br></br>
        </div>
        </CenteredContainer>
    )
}

export default GradeDrive;
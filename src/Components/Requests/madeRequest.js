import React from "react";
import { useLocation, useNavigate } from 'react-router-dom'
import CenteredContainer from "../UtilComponents/CenteredContainer";
import axios from "../../custom-axios/axios";

const MadeRequest = (props) => {
    const location = useLocation()
    const navigate = useNavigate()
    const [formData, updateFormData] = React.useState({
        status : location.state.madeRequest.status,
        cityAddress : location.state.madeRequest.cityAddress,
        numberAddress : location.state.madeRequest.numberAddress,
        streetAddress : location.state.madeRequest.streetAddress,
        latitude: location.state.madeRequest.latitude,
        longitude : location.state.madeRequest.longitude,
        confirmedByDriver: "",
    })

    const updateMadeRequest = async () => {
        const requestId = location.state.madeRequest.id
        const response = await axios.get(`/request/${requestId}`)
        updateFormData({
            status : response.data.status,
            cityAddress : response.data.cityAddress,
            numberAddress : response.data.numberAddress,
            streetAddress : response.data.streetAddress,
            latitude: response.data.latitude,
            longitude : response.data.longitude,
            confirmedByDriver: response.data.confirmedByDriver
        })
    }

    const joinDriveForPassenger = async () => {
        const requestId = location.state.madeRequest.id
        const response = await axios.get(`/drive/request/${requestId}`);
        navigate("/started-drive", {state: {startedDrive: response.data}})
    }

    let messageAfterConfirmation1 = ""
    let messageAfterConfirmation2 = ""
    let joinDrive = ""

    if(formData.status === "CONFIRMED"){
        messageAfterConfirmation1 = <p style={{color: "darkgreen", fontStyle: "bold"}}>Your request has been confirmed, 
            please wait for the driver on the provided address.</p>
        messageAfterConfirmation2 = <p style={{color: "darkred", fontStyle: "bold"}}>After your driver picks you up and starts the drive,
        you should start the drive too.</p>
        joinDrive = <a title={"Start Drive"} className={"btn btn-danger"} 
                style={{backgroundColor: "cyan", borderColor: "black", color: "black"}} 
                onClick={() => joinDriveForPassenger()} >
                Join Drive
                </a>
    }

    let confirmedByDriver = ""
    if(formData.confirmedByDriver){
        confirmedByDriver = <h6 className="card-text">
            Confirmed by Driver: {formData.confirmedByDriver.name} {formData.confirmedByDriver.surname}</h6>                
    }

    return (
        <CenteredContainer>
        <div className="card text-center">
            <div className="card-header" style={{color : "darkcyan"}}>
                {formData.status}
            </div>
            <div className="card-body">
                <h6 className="card-title" style={{color : "darkcyan"}}>You have created your request, please wait until some driver confirms it</h6>
                <h5 className="card-title">{formData.cityAddress}, {formData.streetAddress}, {formData.numberAddress}</h5>
                <h6 className="card-title">{formData.latitude}, {formData.longitude}</h6>
                {confirmedByDriver}
            </div>
            <br></br>
            {messageAfterConfirmation1}
            {messageAfterConfirmation2}
            <a style={{backgroundColor: "darkcyan"}} className="btn btn-primary" 
            onClick={() => updateMadeRequest()}>Refresh</a>
            <br></br>
            {joinDrive}
        </div>
        </CenteredContainer>
    )
}

export default MadeRequest;
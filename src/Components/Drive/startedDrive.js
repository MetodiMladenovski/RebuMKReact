import React from "react";
import { useLocation, useNavigate } from 'react-router-dom'
import CenteredContainer from "../UtilComponents/CenteredContainer";
import axios from "../../custom-axios/axios"

const StartedDrive = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const [formData, updateFormData] = React.useState({
        kmTravelled: 0
    })

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    }

    const onFormSubmit = async (e) => {
        e.preventDefault();
        const kmTravelled = formData.kmTravelled
        const driveId = location.state.startedDrive.id
        await axios.post(`/drive/finish/${driveId}`, null, { params: {
            kmTravelled
          }
        })
        navigate("/requests")
    }
    const gradeDrive = () => {
        const driveId = location.state.startedDrive.id 
        navigate("/grade-drive", {state: {driveId: driveId}})
    }

    const payDrive = async () => {
        const driverId = location.state.startedDrive.driver.id
        const requestId = location.state.startedDrive.request.id
        const driverResponse = await axios.get(`/driver/${driverId}`);
        const startedDriveResponse = await axios.get(`/drive/request/${requestId}`)
        const driverPricePerKm = driverResponse.data.pricePerKm
        const kmTravelled = startedDriveResponse.data.kmTravelled
        const totalSumToPay = driverPricePerKm * kmTravelled
        navigate("/pay-drive", {state: {driveId: startedDriveResponse.data.id,
                                            driverPricePerKm: driverPricePerKm, 
                                            totalSumToPay: totalSumToPay,
                                            kmTravelled: kmTravelled}})
    }

    let finishDrive = <form onSubmit={onFormSubmit}>
        <br></br>
                        <div className="form-group" style={{width: 70 + "%", marginLeft: 3 + "em"}}>
                            <label htmlFor="kmTravelled">Kilometers travelled</label>
                            <input type="float"
                                    className="form-control"
                                    name="kmTravelled"
                                    id="kmTravelled"
                                    required
                                    placeholder="Enter kilometers travelled"
                                    onChange={handleChange}/>
                        </div>
                        <button type="submit" className="btn btn-primary" style={{marginTop: 0.5 + "em", backgroundColor: "coral", color:"black"}}>Finish Drive</button>
                       </form>  

    let gradeButton = <a title={"Grade Drive"} className={"btn btn-primary"}
                                      style={{backgroundColor: "darkcyan", borderColor: "black", color: "black"}}
                                      onClick={() => {gradeDrive()}}>
                                          Grade Driver for Drive</a>  
                                          
    let payForDrive = <a title={"Pay Drive"} className={"btn btn-primary"}
                                    style={{backgroundColor: "darkcyan", borderColor: "black", color: "black"}}
                                    onClick={() => {payDrive()}}>
                                        Pay Drive</a>  



    let buttonOne
    let buttonTwo

    if(localStorage.getItem("driverId")){
        buttonOne = finishDrive;
    } else if(localStorage.getItem("passengerId")) {
            buttonOne = payForDrive
        if(location.state.startedDrive.grade === 0)
            buttonTwo = gradeButton
        
    }

    return (
        <CenteredContainer>
        <div className="card text-center">
            <div className="card-header">
                {location.state.startedDrive.startTime}
                <br></br>
                {location.state.startedDrive.status}
            </div>
            <div className="card-body">
                <h5 className="card-title">Grade: {location.state.startedDrive.grade}</h5>
                <h5> Kilometers Travelled: {location.state.startedDrive.kmTravelled}</h5>
                <h6 className="card-title">Destination Latitude: {location.state.startedDrive.destinationLatitude}</h6>                
                <h6 className="card-title">Destination Longitude: {location.state.startedDrive.destinationLongitude}</h6>               
                <h3 style={{color: "green"}}>{location.state.totalSumToPay}</h3>
                {buttonOne}
                <br></br>
                <hr></hr>
                {buttonTwo}
            </div>
        </div>
        </CenteredContainer>
    )
}

export default StartedDrive;
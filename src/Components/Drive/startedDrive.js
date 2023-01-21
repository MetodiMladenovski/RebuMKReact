import React from "react";
import { useLocation, useNavigate } from 'react-router-dom'
import CenteredContainer from "../UtilComponents/CenteredContainer";

const StartedDrive = (props) => {
    const location = useLocation();
    const navigate = useNavigate();

    const [formData, updateFormData] = React.useState({
        grade : "",
    })

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        const grade = formData.grade
        const driveId = location.state.startedDrive.id

        props.onGradeDrive(driveId, grade);
        navigate("/started-drive", {state: {startedDrive: location.state.startedDrive}})
    }


    let finishDrive = <a href='/requests' title={"Finish Drive"} className={"btn btn-primary"}
                                      style={{backgroundColor: "coral", borderColor: "black", color: "black"}}
                                      onClick={() => {
                                        props.onFinishDrive(location.state.startedDrive.id)}}>
                                          Finish Drive</a> 

    let pay = <a href='/pay' title={"Pay Drive"} className={"btn btn-primary"}
                                      style={{backgroundColor: "coral", borderColor: "black", color: "black"}}
                                      onClick={() => {
                                        props.onPayDrive(location.state.startedDrive.id)}}>
                                          Pay</a>   

    let grade = <form onSubmit={onFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="firstName">Grade Driver</label>
                        <input type="float"
                               className="form-control"
                               id="grade"
                               name="grade"
                               required
                               placeholder="Enter value between 0 and 5"
                               style={{height: 100 + "%"}}
                               onChange={handleChange}
                        />
                    </div>
                    <br></br>
                    <button id="submit" type="submit" className="btn btn-primary" style={{backgroundColor: "darkcyan"}}>Grade</button>
                    <br></br>
                </form>


    let buttonOne
    let buttonTwo

    if(localStorage.getItem("driverId")){
        buttonOne = finishDrive;
    } else if(localStorage.getItem("passengerId")) {
        buttonOne = pay
        buttonTwo = grade
    }

    return (
        <CenteredContainer>
        <div className="card text-center">
            <div className="card-header">
                {location.state.startedDrive.startTime}
                {location.state.startedDrive.status}
            </div>
            <div className="card-body">
                <h5 className="card-title">Grade: {location.state.startedDrive.grade}, Kilometers Travelled: {location.state.startedDrive.kmTravelled}</h5>
                <h6 className="card-title">Destination Latitude: {location.state.startedDrive.destinationLatitude}</h6>                
                <h6 className="card-title">Destination Longitude: {location.state.startedDrive.destinationLongitude}</h6>                
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
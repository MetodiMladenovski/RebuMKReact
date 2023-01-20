import React from "react";
import { useNavigate, useLocation } from 'react-router-dom'
import axios from "../../custom-axios/axios";
import CenteredContainer from "../UtilComponents/CenteredContainer";

const ConfirmedRequest = (props) => {
    const location = useLocation();
    const navigate = useNavigate();

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
            
                <a href='/requests' title={"Finish Drive"} className={"btn btn-primary"}
                                      style={{backgroundColor: "coral", borderColor: "black", color: "black"}}
                                      onClick={() => {
                                        props.onFinishDrive(location.state.startedDrive.id)}}>
                                          Finish Drive</a>       
            </div>
        </div>
        </CenteredContainer>
    )
}

export default ConfirmedRequest;